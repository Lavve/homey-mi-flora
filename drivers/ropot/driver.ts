import {Driver} from 'homey';
import {MiFloraDriver} from '../../lib/MiFloraDriver';

class MiFloraRopotDriver extends MiFloraDriver {

    async onPair(session: Driver.PairSession) {
        session.setHandler('list_devices', async function () {
            return [{
                name: 'test',
                id: 'test'
            }]
        });
    }

    // async onPairListDevices(): Promise<MiFloraDevice[]> {
    async onPairListDevices(): Promise<any[]> {
        console.log('pair!');
        return [{
            name: 'test',
            id: 'test'
        }];
    }

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
