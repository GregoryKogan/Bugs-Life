function SwitchStats(){
  if (Os != "IOS"){
    if (!fullscreen()) fullscreen(true);
  }
  if (ShowStatistics == true){
    ShowStatistics = !ShowStatistics;
    if (Device == "Laptop") StatsSwitcherButton.html("Show Stats");
    else StatsSwitcherButton.html("Stats");
    if (Device != "Laptop"){
      if (Creatures.length == 0){
        MakeBalancedSetButton.show();
        MakeRandomSetButton.show();
      }
    }
  }
  else if ((ShowUI == false && ShowChangeMenu == false) || Device == "Laptop"){
    ShowStatistics = !ShowStatistics;
    if (Device == "Laptop") StatsSwitcherButton.html("Hide Stats");
    else StatsSwitcherButton.html("Close");
    if (Device != "Laptop"){
      if (Creatures.length == 0){
        MakeBalancedSetButton.hide();
        MakeRandomSetButton.hide();
      }
    }
  }
}

function SwitchShowInsides(){
  if (Os != "IOS"){
    if (!fullscreen()) fullscreen(true);
  }
  if (ShowInsides == true){
    ShowInsides = !ShowInsides;
    ShowInsidesSwitcher.html("Show Insides");
  }
  else{
    ShowInsides = !ShowInsides;
    ShowInsidesSwitcher.html("Hide Insides");
  }
}

function SwitchInterface(){
  if (Os != "IOS"){
    if (!fullscreen()) fullscreen(true);
  }
  if (ShowUI == false && ((ShowStatistics == false && ShowChangeMenu == false) || Device == "Laptop")){
    ShowUI = !ShowUI;
    InterfaceSwitcher.html("Hide UI");
    TimeScaleSlider.show();
    FoodSpawnSlider.show();
    FieldRadiusSlider.show();
    GlobalScaleSlider.show();
    ShowInsidesSwitcher.show();
    CameraTypeSelector.show();
    FoodSpawningTypeCheckBox.show();
    if (Device != "Laptop"){
      if (Creatures.length == 0){
        MakeBalancedSetButton.hide();
        MakeRandomSetButton.hide();
      }
    }
  }
  else if (ShowUI){
    ShowUI = !ShowUI;
    InterfaceSwitcher.html("Show UI");
    TimeScaleSlider.hide();
    FoodSpawnSlider.hide();
    FieldRadiusSlider.hide();
    GlobalScaleSlider.hide();
    ShowInsidesSwitcher.hide();
    CameraTypeSelector.hide();
    FoodSpawningTypeCheckBox.hide();
    if (Device != "Laptop"){
      if (Creatures.length == 0){
        MakeBalancedSetButton.show();
        MakeRandomSetButton.show();
      }
    }
  }
}

function UpdateUI(){
  TimeScaleSlider.position(10, 50);
  TimeScaleSlider.style('width', '150px');

  FoodSpawnSlider.position(10, 80);
  FoodSpawnSlider.style('width', '150px');

  FieldRadiusSlider.position(10, 110);
  FieldRadiusSlider.style('width', '150px');

  GlobalScaleSlider.position(10, 140);
  GlobalScaleSlider.style('width', '150px');

  if (Device == "Laptop") CreatureSizeSlider.position((windowWidth - 5) / 2 - 190, windowHeight - 345);
  else  CreatureSizeSlider.position((windowWidth - 5) / 2 - 165, windowHeight - 345);
  CreatureSizeSlider.style('width', '150px');

  if (Device == "Laptop") CreatureLifeSpanSlider.position((windowWidth - 5) / 2 - 190, windowHeight - 315);
  else CreatureLifeSpanSlider.position((windowWidth - 5) / 2 - 165, windowHeight - 315);
  CreatureLifeSpanSlider.style('width', '150px');

  let ButtonColor = color(18);

  InterfaceSwitcher.position(10, 10);
  if (Device == "Laptop") InterfaceSwitcher.size(150, 30);
  else InterfaceSwitcher.size(displayWidth / 3.5, 30);
  InterfaceSwitcher.style('font-size', '18px');
  InterfaceSwitcher.style('background-color', ButtonColor);
  InterfaceSwitcher.style('color', 'white');
  InterfaceSwitcher.style('font-family', 'Roboto-Thin');
  InterfaceSwitcher.mousePressed(SwitchInterface);

  ShowInsidesSwitcher.position(10, 230);
  ShowInsidesSwitcher.size(150, 30);
  ShowInsidesSwitcher.style('font-size', '18px');
  ShowInsidesSwitcher.style('background-color', ButtonColor);
  ShowInsidesSwitcher.style('color', 'white');
  ShowInsidesSwitcher.style('font-family', 'Roboto-Thin');
  ShowInsidesSwitcher.mousePressed(SwitchShowInsides);

  if (Device == "Laptop"){
    KillAllButton.size(150, 30);
    KillAllButton.position((windowWidth - 5) / 2 - 75, 10);
  }
  else{
     KillAllButton.size(displayWidth / 3.5, 30);
     KillAllButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 10);
  }
  KillAllButton.style('font-size', '18px');
  KillAllButton.style('background-color', ButtonColor);
  KillAllButton.style('color', 'white');
  KillAllButton.style('font-family', 'Roboto-Thin');
  KillAllButton.mousePressed(KillThemAll);

  if (Device == "Laptop"){
    MakeBalancedSetButton.size(175, 30);
    MakeBalancedSetButton.position((windowWidth - 5) / 2 - 87.5, 10);
  }
  else{
     MakeBalancedSetButton.size(displayWidth / 3.5, 30);
     MakeBalancedSetButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 10);
  }
  MakeBalancedSetButton.style('font-size', '18px');
  MakeBalancedSetButton.style('background-color', ButtonColor);
  MakeBalancedSetButton.style('color', 'white');
  MakeBalancedSetButton.style('font-family', 'Roboto-Thin');
  MakeBalancedSetButton.mousePressed(MakeBalancedSet);

  if (Device == "Laptop"){
    MakeRandomSetButton.size(175, 30);
    MakeRandomSetButton.position((windowWidth - 5) / 2 - 87.5, 50);
  }
  else{
     MakeRandomSetButton.size(displayWidth / 3.5, 30);
     MakeRandomSetButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 50);
  }
  MakeRandomSetButton.style('font-size', '18px');
  MakeRandomSetButton.style('background-color', ButtonColor);
  MakeRandomSetButton.style('color', 'white');
  MakeRandomSetButton.style('font-family', 'Roboto-Thin');
  MakeRandomSetButton.mousePressed(MakeRandomSet);

  if (Device == "Laptop"){
    StatsSwitcherButton.size(150, 30);
    StatsSwitcherButton.position(windowWidth - 165, 10);
  }
  else{
     StatsSwitcherButton.size(displayWidth / 3.5, 30);
     StatsSwitcherButton.position(windowWidth - displayWidth / 3.5 - 15, 10);
  }
  StatsSwitcherButton.style('font-size', '18px');
  StatsSwitcherButton.style('background-color', ButtonColor);
  StatsSwitcherButton.style('color', 'white');
  StatsSwitcherButton.style('font-family', 'Roboto-Thin');
  StatsSwitcherButton.mousePressed(SwitchStats);

  if (Device == "Laptop"){
    ChangeCreatureButton.size(160, 30);
    ChangeCreatureButton.position((windowWidth - 5) / 2 - 80, windowHeight - 45);
  }
  else{
     ChangeCreatureButton.size(displayWidth / 3.5, 30);
     ChangeCreatureButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), windowHeight - 60);
  }
  ChangeCreatureButton.style('font-size', '18px');
  ChangeCreatureButton.style('background-color', ButtonColor);
  ChangeCreatureButton.style('color', 'white');
  ChangeCreatureButton.style('font-family', 'Roboto-Thin');
  ChangeCreatureButton.mousePressed(ChangeCreature);

  if (Device == "Laptop"){
    DieButton.position((windowWidth - 5) / 2 + 40, windowHeight - 270);
    DieButton.size(150, 30);
  }
  else{
    DieButton.position((windowWidth - 5) / 2 + 40, windowHeight - 270);
    DieButton.size(displayWidth / 3.5, 30);
  }
  DieButton.style('font-size', '18px');
  DieButton.style('background-color', ButtonColor);
  DieButton.style('color', 'white');
  DieButton.style('font-family', 'Roboto-Thin');
  DieButton.mousePressed(KillThisCreature);

  if (Device == "Laptop"){
    MakeChildrenButton.position((windowWidth - 5) / 2 + 40, windowHeight - 213);
    MakeChildrenButton.size(150, 30);
  }
  else{
    MakeChildrenButton.position((windowWidth - 5) / 2 + 40, windowHeight - 213);
    MakeChildrenButton.size(displayWidth / 3.5, 30);
  }
  MakeChildrenButton.style('font-size', '18px');
  MakeChildrenButton.style('background-color', ButtonColor);
  MakeChildrenButton.style('color', 'white');
  MakeChildrenButton.style('font-family', 'Roboto-Thin');
  MakeChildrenButton.mousePressed(MakeChildrenOfThisCreature);

  ApplyChangesButton.position((windowWidth - 5) / 2 - 75, windowHeight - 125);
  ApplyChangesButton.size(150, 30);
  ApplyChangesButton.style('font-size', '18px');
  ApplyChangesButton.style('background-color', ButtonColor);
  ApplyChangesButton.style('color', 'white');
  ApplyChangesButton.style('font-family', 'Roboto-Thin');
  ApplyChangesButton.mousePressed(ApplyChanges);

  CameraTypeSelector.position(10, 180);
  CameraTypeSelector.style('font-size', '18px');
  CameraTypeSelector.style('background-color', ButtonColor);
  CameraTypeSelector.style('color', 'white');
  CameraTypeSelector.size(150, 30);

  if (Device == "Laptop") CreatureFoodPrefsSelector.position((windowWidth - 5) / 2 - 190, windowHeight - 210);
  else CreatureFoodPrefsSelector.position((windowWidth - 5) / 2 - 170, windowHeight - 210);
  CreatureFoodPrefsSelector.style('font-size', '18px');
  CreatureFoodPrefsSelector.style('background-color', ButtonColor);
  CreatureFoodPrefsSelector.style('color', 'white');
  CreatureFoodPrefsSelector.size(150, 30);

  FoodSpawningTypeCheckBox.position(10, 270);
  FoodSpawningTypeCheckBox.size(220, 40);
  if (Device == "Laptop") FoodSpawningTypeCheckBox.style('font-size', '24px');
  else FoodSpawningTypeCheckBox.style('font-size', '15px');
  FoodSpawningTypeCheckBox.style('color', 'white');

  if (Device == "Laptop") CreatureLazinessCheckBox.position((windowWidth - 5) / 2 - 190, windowHeight - 280);
  else CreatureLazinessCheckBox.position((windowWidth - 5) / 2 - 170, windowHeight - 280);
  CreatureLazinessCheckBox.size(220, 40);
  CreatureLazinessCheckBox.style('font-size', '24px');
  CreatureLazinessCheckBox.style('color', 'white');

  if (Device == "Laptop") CreatureBraveryCheckBox.position((windowWidth - 5) / 2 - 190, windowHeight - 250);
  else CreatureBraveryCheckBox.position((windowWidth - 5) / 2 - 170, windowHeight - 250);
  CreatureBraveryCheckBox.size(220, 40);
  CreatureBraveryCheckBox.style('font-size', '24px');
  CreatureBraveryCheckBox.style('color', 'white');
}

function SetUpUI(){
  TimeScaleSlider = createSlider(1, 5, 1, 0.1);
  TimeScaleSlider.position(10, 50);
  TimeScaleSlider.style('width', '150px');
  TimeScaleSlider.hide();

  FoodSpawnSlider = createSlider(0, 1500, 250, 1);
  FoodSpawnSlider.position(10, 80);
  FoodSpawnSlider.style('width', '150px');
  FoodSpawnSlider.hide();

  FieldRadiusSlider = createSlider(100, 6000, 2000, 2);
  FieldRadiusSlider.position(10, 110);
  FieldRadiusSlider.style('width', '150px');
  FieldRadiusSlider.hide();

  GlobalScaleSlider = createSlider(0.1, 2, 1, 0.001);
  GlobalScaleSlider.position(10, 140);
  GlobalScaleSlider.style('width', '150px');
  GlobalScaleSlider.hide();

  CreatureSizeSlider = createSlider(20, 60, 40, 1);
  if (Device == "Laptop") CreatureSizeSlider.position((windowWidth - 5) / 2 - 190, windowHeight - 345);
  else  CreatureSizeSlider.position((windowWidth - 5) / 2 - 165, windowHeight - 345);
  CreatureSizeSlider.style('width', '150px');
  CreatureSizeSlider.hide();

  CreatureLifeSpanSlider = createSlider(50, 100, 75, 1);
  if (Device == "Laptop") CreatureLifeSpanSlider.position((windowWidth - 5) / 2 - 190, windowHeight - 315);
  else CreatureLifeSpanSlider.position((windowWidth - 5) / 2 - 165, windowHeight - 315);
  CreatureLifeSpanSlider.style('width', '150px');
  CreatureLifeSpanSlider.hide();

  let ButtonColor = color(18);

  InterfaceSwitcher = createButton("Show UI");
  InterfaceSwitcher.position(10, 10);
  if (Device == "Laptop") InterfaceSwitcher.size(150, 30);
  else InterfaceSwitcher.size(displayWidth / 3.5, 30);
  InterfaceSwitcher.style('font-size', '18px');
  InterfaceSwitcher.style('background-color', ButtonColor);
  InterfaceSwitcher.style('color', 'white');
  InterfaceSwitcher.style('font-family', 'Roboto-Thin');
  InterfaceSwitcher.mousePressed(SwitchInterface);

  ShowInsidesSwitcher = createButton("Show Insides");
  ShowInsidesSwitcher.position(10, 230);
  ShowInsidesSwitcher.size(150, 30);
  ShowInsidesSwitcher.style('font-size', '18px');
  ShowInsidesSwitcher.style('background-color', ButtonColor);
  ShowInsidesSwitcher.style('color', 'white');
  ShowInsidesSwitcher.style('font-family', 'Roboto-Thin');
  ShowInsidesSwitcher.mousePressed(SwitchShowInsides);
  ShowInsidesSwitcher.hide();

  if (Device == "Laptop") KillAllButton = createButton("Kill Them All!");
  else KillAllButton = createButton("Kill All");
  if (Device == "Laptop"){
    KillAllButton.size(150, 30);
    KillAllButton.position((windowWidth - 5) / 2 - 75, 10);
  }
  else{
     KillAllButton.size(displayWidth / 3.5, 30);
     KillAllButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 10);
  }
  KillAllButton.style('font-size', '18px');
  KillAllButton.style('background-color', ButtonColor);
  KillAllButton.style('color', 'white');
  KillAllButton.style('font-family', 'Roboto-Thin');
  KillAllButton.mousePressed(KillThemAll);

  if (Device == "Laptop") MakeBalancedSetButton = createButton("Make Balanced Set");
  else MakeBalancedSetButton = createButton("Balanced");
  if (Device == "Laptop"){
    MakeBalancedSetButton.size(175, 30);
    MakeBalancedSetButton.position((windowWidth - 5) / 2 - 87.5, 10);
  }
  else{
     MakeBalancedSetButton.size(displayWidth / 3.5, 30);
     MakeBalancedSetButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 10);
  }
  MakeBalancedSetButton.style('font-size', '18px');
  MakeBalancedSetButton.style('background-color', ButtonColor);
  MakeBalancedSetButton.style('color', 'white');
  MakeBalancedSetButton.style('font-family', 'Roboto-Thin');
  MakeBalancedSetButton.mousePressed(MakeBalancedSet);

  if (Device == "Laptop") MakeRandomSetButton = createButton("Make Random Set");
  else MakeRandomSetButton = createButton("Random");
  if (Device == "Laptop"){
    MakeRandomSetButton.size(175, 30);
    MakeRandomSetButton.position((windowWidth - 5) / 2 - 87.5, 50);
  }
  else{
     MakeRandomSetButton.size(displayWidth / 3.5, 30);
     MakeRandomSetButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), 50);
  }
  MakeRandomSetButton.style('font-size', '18px');
  MakeRandomSetButton.style('background-color', ButtonColor);
  MakeRandomSetButton.style('color', 'white');
  MakeRandomSetButton.style('font-family', 'Roboto-Thin');
  MakeRandomSetButton.mousePressed(MakeRandomSet);

  if (Device == "Laptop") StatsSwitcherButton = createButton("Show Stats");
  else StatsSwitcherButton = createButton("Stats");
  if (Device == "Laptop"){
    StatsSwitcherButton.size(150, 30);
    StatsSwitcherButton.position(windowWidth - 165, 10);
  }
  else{
     StatsSwitcherButton.size(displayWidth / 3.5, 30);
     StatsSwitcherButton.position(windowWidth - displayWidth / 3.5 - 15, 10);
  }
  StatsSwitcherButton.style('font-size', '18px');
  StatsSwitcherButton.style('background-color', ButtonColor);
  StatsSwitcherButton.style('color', 'white');
  StatsSwitcherButton.style('font-family', 'Roboto-Thin');
  StatsSwitcherButton.mousePressed(SwitchStats);

  if (Device == "Laptop") ChangeCreatureButton = createButton("Change Creature");
  else  ChangeCreatureButton = createButton("Change");
  if (Device == "Laptop"){
    ChangeCreatureButton.size(160, 30);
    ChangeCreatureButton.position((windowWidth - 5) / 2 - 80, windowHeight - 45);
  }
  else{
     ChangeCreatureButton.size(displayWidth / 3.5, 30);
     ChangeCreatureButton.position((windowWidth - 5) / 2 - (displayWidth / 3.5 / 2), windowHeight - 60);
  }
  ChangeCreatureButton.style('font-size', '18px');
  ChangeCreatureButton.style('background-color', ButtonColor);
  ChangeCreatureButton.style('color', 'white');
  ChangeCreatureButton.style('font-family', 'Roboto-Thin');
  ChangeCreatureButton.mousePressed(ChangeCreature);

  DieButton = createButton("Die");
  if (Device == "Laptop"){
    DieButton.position((windowWidth - 5) / 2 + 40, windowHeight - 270);
    DieButton.size(150, 30);
  }
  else{
    DieButton.position((windowWidth - 5) / 2 + 40, windowHeight - 270);
    DieButton.size(displayWidth / 3.5, 30);
  }
  DieButton.style('font-size', '18px');
  DieButton.style('background-color', ButtonColor);
  DieButton.style('color', 'white');
  DieButton.style('font-family', 'Roboto-Thin');
  DieButton.mousePressed(KillThisCreature);
  DieButton.hide();

  if (Device == "Laptop") MakeChildrenButton = createButton("Make Chidren");
  else  MakeChildrenButton = createButton("Breed");
  if (Device == "Laptop"){
    MakeChildrenButton.position((windowWidth - 5) / 2 + 40, windowHeight - 213);
    MakeChildrenButton.size(150, 30);
  }
  else{
    MakeChildrenButton.position((windowWidth - 5) / 2 + 40, windowHeight - 213);
    MakeChildrenButton.size(displayWidth / 3.5, 30);
  }
  MakeChildrenButton.style('font-size', '18px');
  MakeChildrenButton.style('background-color', ButtonColor);
  MakeChildrenButton.style('color', 'white');
  MakeChildrenButton.style('font-family', 'Roboto-Thin');
  MakeChildrenButton.mousePressed(MakeChildrenOfThisCreature);
  MakeChildrenButton.hide();

  if (Device == "Laptop") ApplyChangesButton = createButton("Apply Changes");
  else ApplyChangesButton = createButton("Apply");
  ApplyChangesButton.position((windowWidth - 5) / 2 - 75, windowHeight - 125);
  ApplyChangesButton.size(150, 30);
  ApplyChangesButton.style('font-size', '18px');
  ApplyChangesButton.style('background-color', ButtonColor);
  ApplyChangesButton.style('color', 'white');
  ApplyChangesButton.style('font-family', 'Roboto-Thin');
  ApplyChangesButton.mousePressed(ApplyChanges);
  ApplyChangesButton.hide();

  CameraTypeSelector = createSelect();
  CameraTypeSelector.position(10, 180);
  if (Device == "Laptop") CameraTypeSelector.option("Controllable");
  CameraTypeSelector.option("Following");
  CameraTypeSelector.option("Centered");
  CameraTypeSelector.option("Flying");
  CameraTypeSelector.style('font-size', '18px');
  CameraTypeSelector.style('background-color', ButtonColor);
  CameraTypeSelector.style('color', 'white');
  CameraTypeSelector.size(150, 30);
  CameraTypeSelector.hide();

  CreatureFoodPrefsSelector = createSelect();
  if (Device == "Laptop") CreatureFoodPrefsSelector.position((windowWidth - 5) / 2 - 190, windowHeight - 210);
  else CreatureFoodPrefsSelector.position((windowWidth - 5) / 2 - 170, windowHeight - 210);
  CreatureFoodPrefsSelector.option("Herbivorous");
  CreatureFoodPrefsSelector.option("Predator");
  CreatureFoodPrefsSelector.option("Omnivorous");
  CreatureFoodPrefsSelector.style('font-size', '18px');
  CreatureFoodPrefsSelector.style('background-color', ButtonColor);
  CreatureFoodPrefsSelector.style('color', 'white');
  CreatureFoodPrefsSelector.size(150, 30);
  CreatureFoodPrefsSelector.hide();

  FoodSpawningTypeCheckBox = createCheckbox("FixedFoodAmount", false);
  FoodSpawningTypeCheckBox.position(10, 270);
  FoodSpawningTypeCheckBox.size(220, 40);
  if (Device == "Laptop") FoodSpawningTypeCheckBox.style('font-size', '24px');
  else FoodSpawningTypeCheckBox.style('font-size', '15px');
  FoodSpawningTypeCheckBox.style('color', 'white');
  FoodSpawningTypeCheckBox.hide();

  CreatureLazinessCheckBox = createCheckbox("Lazy", false);
  if (Device == "Laptop") CreatureLazinessCheckBox.position((windowWidth - 5) / 2 - 190, windowHeight - 280);
  else CreatureLazinessCheckBox.position((windowWidth - 5) / 2 - 170, windowHeight - 280);
  CreatureLazinessCheckBox.size(220, 40);
  CreatureLazinessCheckBox.style('font-size', '24px');
  CreatureLazinessCheckBox.style('color', 'white');
  CreatureLazinessCheckBox.hide();

  CreatureBraveryCheckBox = createCheckbox("Brave", false);
  if (Device == "Laptop") CreatureBraveryCheckBox.position((windowWidth - 5) / 2 - 190, windowHeight - 250);
  else CreatureBraveryCheckBox.position((windowWidth - 5) / 2 - 170, windowHeight - 250);
  CreatureBraveryCheckBox.size(220, 40);
  CreatureBraveryCheckBox.style('font-size', '24px');
  CreatureBraveryCheckBox.style('color', 'white');
  CreatureBraveryCheckBox.hide();
}

function DrawStatistics(){
  if (ShowStatistics){
    fill(0, 0, 0, 200);
    rect(windowWidth - 10, 5, -250, 480);
    textSize(22);
    fill(255);
    let Changed = 0;
    let Red = 0;
    let Orange = 0;
    let Yellow = 0;
    let Green = 0;
    let BrightBlue = 0;
    let Blue = 0;
    let Purple = 0;
    let Lazy = 0;
    let Brave = 0;
    let Size = 0;
    let LifeSpan = 0;
    let Herbivores = 0;
    let Predators = 0;
    let Omnivores = 0;
    for (let i = 0; i < Creatures.length; ++i){
      if (Creatures[i].Race == "White")
        Changed++;
      if (Creatures[i].Race == "Red")
        Red++;
      if (Creatures[i].Race == "Orange")
        Orange++;
      if (Creatures[i].Race == "Yellow")
        Yellow++;
      if (Creatures[i].Race == "Green")
        Green++;
      if (Creatures[i].Race == "BrightBlue")
        BrightBlue++;
      if (Creatures[i].Race == "Blue")
        Blue++;
      if (Creatures[i].Race == "Purple")
        Purple++;
      if (Creatures[i].Race == "Changed")
        Changed++;
      if (Creatures[i].Laziness)
        Lazy++;
      if (Creatures[i].Bravery)
        Brave++;
      if (Creatures[i].FoodPrefs == 1)
        Herbivores++;
      if (Creatures[i].FoodPrefs == 2)
        Predators++;
      if (Creatures[i].FoodPrefs == 3)
        Omnivores++;
      Size += Creatures[i].Size;
      LifeSpan += Creatures[i].LifeSpan;
    }
    textFont(RegularFont);
    text("Red: " + Red, windowWidth - 250, 75);
    text("Orange: " + Orange, windowWidth - 250, 100);
    text("Yellow: " + Yellow, windowWidth - 250, 125);
    text("Green: " + Green, windowWidth - 250, 150);
    text("BrightBlue: " + BrightBlue, windowWidth - 250, 175);
    text("Blue: " + Blue, windowWidth - 250, 200);
    text("Purple: " + Purple, windowWidth - 250, 225);
    text("Changed: " + Changed, windowWidth - 250, 250);
    text("Herbivores: " + Herbivores, windowWidth - 250, 300);
    text("Predators: " + Predators, windowWidth - 250, 325);
    text("Omnivores: " + Omnivores, windowWidth - 250, 350);
    if (Creatures.length > 0){
      text(round(Lazy / Creatures.length * 100) + "% are Lazy", windowWidth - 250, 400);
      text(round(Brave / Creatures.length * 100) + "% are Brave", windowWidth - 250, 425);
      text("Average size: " + round(Size / Creatures.length), windowWidth - 250, 450);
      text("Average LifeSpan: " + round(LifeSpan / Creatures.length), windowWidth - 250, 475);
    }
    else{
      text("None are Lazy", windowWidth - 250, 400);
      text("None are Brave", windowWidth - 250, 425);
      text("No Average Size", windowWidth - 250, 450);
      text("No Average LifeSpan", windowWidth - 250, 475);
    }
  }
}

function DrawInterface(){
  if (ShowUI){
    fill(0, 0, 0, 200);
    rect(5, 5, 365, 300);
    if (Device == "Laptop") textSize(22);
    else textSize(17);
    fill(255);
    textFont(RegularFont);
    text(TimeScaleSlider.value() + " - TimeScale", 170, 70);
    if (FoodSpawningTypeCheckBox.checked()) text(FoodSpawnSlider.value() + " - FoodAmount", 170, 100);
    else text(FoodSpawnSlider.value() + " - FoodSpawn", 170, 100);
    text(FieldRadiusSlider.value() / 2 + " - FieldRadius", 170, 130);
    text(GlobalScaleSlider.value() + " - GlobalScale", 170, 160);
    text(" - CameraType", 170, 200);
  }
  if (ShowChangeMenu){
    fill(0, 0, 0, 200);
    rect ((windowWidth - 5) / 2 - 200, windowHeight - 355, 400, 300);
    if (Device == "Laptop") textSize(22);
    else textSize(17);
    fill(255);
    textFont(RegularFont);
    if (Device == "Laptop"){
      text(CreatureSizeSlider.value() + " - Size", (windowWidth - 5) / 2 - 20, windowHeight - 325);
      text(CreatureLifeSpanSlider.value() + " - LifeSpan", (windowWidth - 5) / 2 - 20, windowHeight - 295);
    }
    else{
      text(CreatureSizeSlider.value() + " - Size", (windowWidth - 5) / 2 + 5, windowHeight - 325);
      text(CreatureLifeSpanSlider.value() + " - LifeSpan", (windowWidth - 5) / 2 + 5, windowHeight - 295);
    }
  }
}

function windowResized(){
  if (Device == "Laptop")
    resizeCanvas(windowWidth - 5, windowHeight - 5);
  else
    resizeCanvas(windowWidth + 1, windowHeight + 1);
  UpdateUI();
}
