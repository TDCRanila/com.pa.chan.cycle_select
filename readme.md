# CycleSelect / TabSelect

![Cycle-Select Icon](media/icon.gif)

A simple in-game UI/UX mod for [*Planetary Annihilation: Titans*.](https://planetaryannihilation.com/)

It **provides the ability to cycle-select or "tabbing" between multiple unit types of the current selection**, by pressing a new hotkey named; "Cycle Select Through Selection". (Either forward or backwards.)

## Motivation

To have an alternative method of relatively quickly selecting units without having to double-click, or using another mod such as 'Hotbuild2' – which changes a lot more to the default unit hotkey setup.

## How it works in-game

1. Select multiple types of units by either box-selecting, using control groups, or via the "select-all" hotkeys, etc.
2. Then pressing the 'Cycle-Select' hotkey – I personally use the 'Tab-key' for this – will select all the units of a singular unit type in the selection list.
3. Pressing it again, will select the next unit type in the selection.
4. At the end of the list, the next cycle-select will loop back to the first unit type.

![Cycle-Select Example](media/example1.gif)

### Technical Details

- Whenever the user selects units, the selection stack is saved. Cycle-Selecting will select all units of a singular unit type in the selection list. (This will not reset the saved selection stack.) 
- When the end of the unit type list is reached, the next cycle-select will select back to the first unit type group in the list.
- Only when box-selecting, recalling control groups, or using "select-all" hotkeys, will the current selection stack be reset to the newly selected units.
- As of right now the unit type cycle priority is determined by the game itself.

* Example; Selection = ABCD, so cycle-selecting will be:
  * ABCD -> UoT A -> UoT B -> UoT C -> S; UoT D -> UoT A. *(UoT = Units of Type)*

## Installation

You can install this mod via the in-game "*Community Mods*" menu, or you can install it locally in the "*client_mods*" folder.

## Future Ideas

- Cycle-selecting from the last unit type, could cycle-select back to the entire selection, and then to the first unit type in the list. Could possibly add this as an option in the settings.
- There is currently no way to customize the Cycle-Select priority of unit types, but should be doable. Though this will add some complexity.
- There is currently also no way to group certain units in the cycle-selection, but should be doable. It will add some complexity. E.g. grouping "Hummingbirds" and "Phoenixes" in one, or units like "Doxi" and "Slammers".
