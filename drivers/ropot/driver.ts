import {MiFloraDriver} from '../../lib/MiFloraDriver';

class MiFloraRopotDriver extends MiFloraDriver {

    getMiFloraBleIdentification() {
        return 'ropot';
    }

    getMiFloraBleName() {
        return 'Mi Flora Ropot';
    }

    getDefaultSettings(uuid: string) {
        return {
            uuid: uuid,
            measure_temperature_min: 16,
            measure_temperature_max: 25,
            measure_nutrition_min: 300,
            measure_nutrition_max: 1000,
            measure_moisture_min: 15,
            measure_moisture_max: 30,
            measure_luminance_min: null,
            measure_luminance_max: null,
        };
    }

    getSupportedCapabilities() {
        return [
            'measure_temperature',
            'measure_nutrition',
            'measure_moisture',
        ];
    }
}

module.exports = MiFloraRopotDriver;
