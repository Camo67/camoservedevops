"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

const logoSrc = "/homecamoDownloadsCamoportfoliopubliclogo.png%20(Animated%20Logo).svg"

const terminalText = [
  "SYSTEM STATUS. OPERATIONAL",
  "USER: COMMANDER",
  "ENCRYPTION: ACTIVE",
  "SESSION ID: 001-OPENING",
  "82 A001",
  "A:57",
  "GitHub",
  "SYSTEM STATUS: OPERATIONAL USEO. COMIAMNIGER ENCRIPTION ACTIVE SESSION ID: 001-OPENING",
  "CamOservDEVOPS",
  "Mission systems online",
  "AV Sync Visual Explorer PRO"
]

const DEFAULT_PRESETS: Record<string, Preset> = {
  "Default: Stealth": {
    cbTypewriter: true,
    cbGlitch: false,
    cbFadein: false,
    slideSpeed: 3,
    slideIntensity: 0,
    slideDuration: 5,
  },
  "Default: Hacked": {
    cbTypewriter: false,
    cbGlitch: true,
    cbFadein: false,
    slideSpeed: 8,
    slideIntensity: 5,
    slideDuration: 5,
  },
}

type Preset = {
  cbTypewriter: boolean
  cbGlitch: boolean
  cbFadein: boolean
  slideSpeed: number
  slideIntensity: number
  slideDuration: number
}

export default function AVExplorerPage() {
  const [selectedLine, setSelectedLine] = useState(0)
  const [presetKey, setPresetKey] = useState("")
  const [userPresets, setUserPresets] = useState<Record<string, Preset>>({})
  const [config, setConfig] = useState<Preset>({
    cbTypewriter: true,
    cbGlitch: false,
    cbFadein: false,
    slideSpeed: 8,
    slideIntensity: 2,
    slideDuration: 5,
  })
  const [outputLines, setOutputLines] = useState<string[]>(terminalText)
  const [timecodeLog, setTimecodeLog] = useState<any[]>([])
  const [isGlitching, setIsGlitching] = useState(false)
  const [hasFaded, setHasFaded] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [lineActive, setLineActive] = useState<number>(0)

  const visualizerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<number | null>(null)
  const glitchTimeoutRef = useRef<number | null>(null)
  const fadeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem("CamOserv_Presets")
    if (stored) {
      try {
        setUserPresets(JSON.parse(stored))
      } catch {
        setUserPresets({})
      }
    }
  }, [])

  useEffect(() => {
    if (isRunning && visualizerRef.current) {
      visualizerRef.current.classList.add("active")
      intervalRef.current = window.setInterval(() => {
        const bars = visualizerRef.current?.querySelectorAll<HTMLDivElement>(".viz-bar")
        bars?.forEach((bar) => {
          const height = 20 + Math.random() * 100
          bar.style.transform = `scaleY(${height / 20})`
        })
      }, 100)
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const presets = useMemo(() => Object.keys(DEFAULT_PRESETS).concat(Object.keys(userPresets)), [userPresets])

  const currentPreset = useMemo(() => {
    if (presetKey.startsWith("usr_")) {
      return userPresets[presetKey.substring(4)]
    }
    if (presetKey.startsWith("def_")) {
      return DEFAULT_PRESETS[presetKey.substring(4)]
    }
    return null
  }, [presetKey, userPresets])

  useEffect(() => {
    if (currentPreset) {
      setConfig(currentPreset)
    }
  }, [currentPreset])

  const applyPreset = (value: string) => {
    setPresetKey(value)
    if (value.startsWith("def_")) {
      const preset = DEFAULT_PRESETS[value.substring(4)]
      if (preset) setConfig(preset)
    }
    if (value.startsWith("usr_")) {
      const preset = userPresets[value.substring(4)]
      if (preset) setConfig(preset)
    }
  }

  const savePreset = () => {
    const name = prompt("Enter preset name:", `Preset_${new Date().getTime().toString().slice(-4)}`)
    if (!name) return
    const next = {
      ...userPresets,
      [name]: config,
    }
    setUserPresets(next)
    window.localStorage.setItem("CamOserv_Presets", JSON.stringify(next))
    setPresetKey(`usr_${name}`)
  }

  const deletePreset = () => {
    if (!presetKey.startsWith("usr_")) {
      alert("Cannot delete system defaults.")
      return
    }
    const name = presetKey.substring(4)
    const next = { ...userPresets }
    delete next[name]
    setUserPresets(next)
    window.localStorage.setItem("CamOserv_Presets", JSON.stringify(next))
    setPresetKey("")
  }

  const exportLog = () => {
    if (!timecodeLog.length) {
      alert("Run a sequence first.")
      return
    }
    const blob = new Blob([JSON.stringify(timecodeLog, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `CamOserv_TimecodeLog_${new Date().getTime()}.json`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
  }

  const playSequence = () => {
    const originalText = terminalText[selectedLine]
    if (!originalText) return

    setIsRunning(true)
    setLineActive(selectedLine)
    setOutputLines((prev) => {
      const next = [...prev]
      next[selectedLine] = ""
      return next
    })
    setIsGlitching(config.cbGlitch)
    setHasFaded(config.cbFadein)

    const newLog = {
      timestamp: new Date().toISOString(),
      textString: originalText,
      effects: {
        typewriter: config.cbTypewriter,
        glitch: config.cbGlitch,
        fade: config.cbFadein,
      },
      parameters: {
        speed: config.slideSpeed,
        intensity: config.slideIntensity,
        duration: config.slideDuration,
      },
    }

    setTimecodeLog((prev) => [...prev, newLog])

    if (config.cbTypewriter) {
      const speed = Math.max(1, 11 - config.slideSpeed)
      let charIndex = 0
      const timer = window.setInterval(() => {
        charIndex += 1
        setOutputLines((prev) => {
          const next = [...prev]
          next[selectedLine] = originalText.slice(0, charIndex)
          return next
        })
        if (charIndex >= originalText.length) {
          window.clearInterval(timer)
        }
      }, speed * 10)
    } else {
      setOutputLines((prev) => {
        const next = [...prev]
        next[selectedLine] = originalText
        return next
      })
    }

    if (config.cbGlitch) {
      setIsGlitching(true)
      if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current)
      glitchTimeoutRef.current = window.setTimeout(() => setIsGlitching(false), 1800)
    }

    if (config.cbFadein) {
      setHasFaded(true)
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current)
      fadeTimeoutRef.current = window.setTimeout(() => setHasFaded(false), config.slideDuration * 100,)
    }

    window.setTimeout(() => setIsRunning(false), 1200 + config.slideDuration * 100)
  }

  return (
    <main className="min-h-screen relative grid-bg scanline bg-4d">
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        <div className="rounded-3xl border border-primary/15 bg-card/80 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(56,189,248,0.08)]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="space-y-6 lg:min-w-[32rem]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-28 w-28 rounded-3xl border border-primary/30 bg-background p-4 shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                  <Image src={logoSrc} alt="CamOservDEVOPS logo" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-primary">CamOservDEVOPS AV Explorer PRO</p>
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Mission Systems Visual Command Console
                  </h1>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  A branded AV command interface layered on your portfolio with neon HUD styling, live preset controls, and a real-time visualizer for the CamOservDEVOPS experience.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Preset Manager</p>
                  <div className="mt-4 space-y-4">
                    <label className="text-sm text-muted-foreground">Load Preset</label>
                    <select
                      className="w-full rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground"
                      value={presetKey}
                      onChange={(event) => applyPreset(event.target.value)}
                    >
                      <option value="">-- Select Preset --</option>
                      {Object.keys(DEFAULT_PRESETS).map((key) => (
                        <option key={`def_${key}`} value={`def_${key}`}>
                          {key}
                        </option>
                      ))}
                      {Object.keys(userPresets).length > 0 && (
                        <optgroup label="User Saved">
                          {Object.keys(userPresets).map((key) => (
                            <option key={`usr_${key}`} value={`usr_${key}`}>
                              {key}
                            </option>
                          ))}
                        </optgroup>
                      )}
                    </select>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="inline-flex flex-1 items-center justify-center rounded-full border border-primary bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20"
                        onClick={savePreset}
                      >
                        Save Preset
                      </button>
                      <button
                        type="button"
                        className="inline-flex flex-1 items-center justify-center rounded-full border border-rose-500 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300 transition hover:bg-rose-500/20"
                        onClick={deletePreset}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Sequence Configuration</p>
                  <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-4">
                      <span>Target String</span>
                      <select
                        className="rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground"
                        value={selectedLine}
                        onChange={(event) => setSelectedLine(Number(event.target.value))}
                      >
                        {terminalText.map((line, index) => (
                          <option key={index} value={index}>
                            {line.slice(0, 42)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-3">
                      <label className="flex items-center gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked={config.cbTypewriter}
                          onChange={(event) => setConfig({ ...config, cbTypewriter: event.target.checked })}
                        />
                        Typewriter
                      </label>
                      <label className="flex items-center gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked={config.cbGlitch}
                          onChange={(event) => setConfig({ ...config, cbGlitch: event.target.checked })}
                        />
                        Glitch
                      </label>
                      <label className="flex items-center gap-3 text-sm">
                        <input
                          type="checkbox"
                          checked={config.cbFadein}
                          onChange={(event) => setConfig({ ...config, cbFadein: event.target.checked })}
                        />
                        Fade-In
                      </label>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs uppercase tracking-[0.35em] text-primary/80">Typewriter Speed</label>
                        <input
                          type="range"
                          min={1}
                          max={10}
                          value={config.slideSpeed}
                          onChange={(event) => setConfig({ ...config, slideSpeed: Number(event.target.value) })}
                          className="w-full accent-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.35em] text-primary/80">Glitch Intensity</label>
                        <input
                          type="range"
                          min={0}
                          max={5}
                          value={config.slideIntensity}
                          onChange={(event) => setConfig({ ...config, slideIntensity: Number(event.target.value) })}
                          className="w-full accent-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.35em] text-primary/80">Fade Duration</label>
                        <input
                          type="range"
                          min={1}
                          max={20}
                          value={config.slideDuration}
                          onChange={(event) => setConfig({ ...config, slideDuration: Number(event.target.value) })}
                          className="w-full accent-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-background transition hover:bg-primary/90 sm:w-auto"
                    onClick={playSequence}
                  >
                    ▶ Execute Sequence
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-full border border-primary/20 bg-transparent px-6 py-4 text-sm font-semibold text-primary transition hover:bg-primary/10 sm:w-auto"
                    onClick={exportLog}
                  >
                    ↓ Export Timecode Log
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Log entries: {timecodeLog.length} · Target string index: {selectedLine + 1}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
                <div className="flex items-center justify-between pb-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Text Output</span>
                  <span className="text-xs text-muted-foreground">Live HUD</span>
                </div>
                <div className="space-y-3 rounded-3xl border border-primary/20 bg-background/80 p-4 text-sm text-green-200 shadow-inner shadow-black/40">
                  {outputLines.map((line, index) => (
                    <div
                      key={index}
                      className={`text-sm leading-6 ${index === selectedLine ? "text-primary text-opacity-100" : "text-foreground/70"} ${isGlitching && index === selectedLine ? "av-glitch" : ""} ${hasFaded && index === selectedLine ? "av-fade" : ""}`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-primary/10 bg-black/10 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Audio Visualizer</p>
                <div
                  ref={visualizerRef}
                  className="mt-4 flex h-16 items-end gap-2 rounded-3xl border border-primary/20 bg-background/90 p-3"
                >
                  {Array.from({ length: 30 }).map((_, index) => (
                    <div
                      key={index}
                      className="viz-bar h-full w-full rounded-full bg-primary/10 transition-transform duration-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .av-glitch {
          animation: glitch-anim 0.3s ease-in-out infinite;
        }

        .av-fade {
          opacity: 0;
          animation: fade-in 0.8s ease-in-out forwards;
        }

        @keyframes glitch-anim {
          0% { transform: translate(0); text-shadow: 0 0 0 rgba(255,255,255,0); }
          20% { transform: translate(-1px, 1px); text-shadow: 2px 0 rgba(255,0,0,0.8), -2px 0 rgba(0,255,255,0.8); }
          40% { transform: translate(1px, -1px); text-shadow: -2px 0 rgba(255,0,0,0.8), 2px 0 rgba(0,255,255,0.8); }
          60% { transform: translate(-1px, -1px); text-shadow: 2px 0 rgba(255,0,0,0.8), -2px 0 rgba(0,255,255,0.8); }
          80% { transform: translate(1px, 1px); text-shadow: -2px 0 rgba(255,0,0,0.8), 2px 0 rgba(0,255,255,0.8); }
          100% { transform: translate(0); text-shadow: 0 0 0 rgba(255,255,255,0); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .viz-bar {
          flex: 1;
          transform-origin: bottom;
        }

        .active .viz-bar {
          background-color: #39ff14;
          box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
        }
      `}</style>
    </main>
  )
}
