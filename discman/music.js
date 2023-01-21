let State = False;
let Btn = Document.QuerySelector(".Btn");
let record = Document.QuerySelector(".Record");
let ToneArm = Document.QuerySelector(".Tone-Arm");
let Song = Document.QuerySelector(".My-Song");
let Slider = Document.QuerySelector(".Slider");

Btn.AddEventListener("Click", () => {
  if (State == False) {
    Record.ClassList.Add("On");
    ToneArm.ClassList.Add("Play");
    SetTimeout(() => {
      Song.Play();
    }, 1000);
  } else {
    record.ClassList.Remove("On");
    ToneArm.ClassList.Remove("Play");
    Song.Pause();
  }
  State = !State;
});

Slider.AddEventListener("Input", (E) => {
  Song.Volume = Number(E.Target.Value);
});