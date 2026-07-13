/* app.jsx — Pilates Arte tweaks panel
   Renders only the Tweaks panel; applies values to <html> via CSS vars + data attrs.
   The landing markup itself is plain HTML in the document. */

const PA_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "b",
  "accent": ["#7A8B5E", "#A3B284"],
  "radius": 3
}/*EDITMODE-END*/;

const ACCENTS = [
  ["#7A8B5E", "#A3B284"], // sage
  ["#6E7E54", "#97A878"], // moss
  ["#88905E", "#B0B583"], // olive
  ["#5F7A5A", "#8EA886"]  // fern
];

function PilatesArteTweaks(){
  const [t, setTweak] = useTweaks(PA_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => { root.setAttribute('data-variant', t.variant); }, [t.variant]);
  React.useEffect(() => {
    const a = Array.isArray(t.accent) ? t.accent : ACCENTS[0];
    root.style.setProperty('--accent', a[0]);
    root.style.setProperty('--accent-2', a[1]);
  }, [t.accent]);
  React.useEffect(() => { root.style.setProperty('--radius', t.radius + 'px'); }, [t.radius]);

  return (
    <TweaksPanel>
      <TweakSection label="Düzen" />
      <TweakRadio label="Hero yönü" value={t.variant}
        options={[{value:'a',label:'Editöryel'},{value:'b',label:'Tam görsel'}]}
        onChange={(v) => setTweak('variant', v)} />

      <TweakSection label="Renk" />
      <TweakColor label="Vurgu paleti" value={t.accent} options={ACCENTS}
        onChange={(v) => setTweak('accent', v)} />

      <TweakSection label="Form" />
      <TweakSlider label="Köşe yumuşaklığı" value={t.radius} min={0} max={20} unit="px"
        onChange={(v) => setTweak('radius', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<PilatesArteTweaks />);
