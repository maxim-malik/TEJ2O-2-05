/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program shows temperature in kelvin
*/

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, () => {
    basic.clearScreen() // clears screen
    const temp = input.temperature() // creates variable for temperature
    const kelvin = temp + 273.15 // creates variable for kelvin
    basic.showNumber(kelvin) // shows kelvin on microbit
})