export type DeviceSettings = {
    uuid: string,
    measure_temperature_min: number,
    measure_temperature_max: number,
    measure_nutrition_min: number,
    measure_nutrition_max: number,
    measure_moisture_min: number,
    measure_moisture_max: number,
    measure_luminance_min: number | null,
    measure_luminance_max: number | null,
}
