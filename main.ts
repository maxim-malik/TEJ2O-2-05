/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program shows temperature in kelvin
*/

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    const temp = input.temperature()
    const kelvin = temp + 273.15
    basic.showNumber(kelvin)
})