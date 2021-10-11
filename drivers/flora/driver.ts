import {Driver} from 'homey';
import {MiFloraDriver} from '../../lib/MiFloraDriver';

class MiFloraSensorDriver extends MiFloraDriver {

    async onPair(session: Driver.PairSession) {
        console.log('onPair!');
        session.setHandler('list_devices', async function () {
            return [{
                name: 'test',
                id: 'test'
            }]
        });
    }

    // async onPairListDevices(): Promise<MiFloraDevice[]> {
    async onPairListDevices(): Promise<any[]> {
        console.log('onPairListDevices!');
        return [{
            name: 'test',
            id: 'test'
        }];
    }

    getMiFloraBleIdentification() {
        return 'Flower care';
    }

    getMiFloraBleName() {
        return 'Mi Flora Sensor';
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
            measure_luminance_min: 1000,
            measure_luminance_max: 2000,
        };
    }

    getSupportedCapabilities() {
        return [
            'measure_temperature',
            'measure_luminance',
            'measure_nutrition',
            'measure_moisture',
            'measure_battery',
        ];
    }
}

module.exports = MiFloraSensorDriver;
