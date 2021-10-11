import {Driver} from 'homey';
import {MiFloraDevice} from './models/MiFloraDevice';
import {DeviceSettings} from './models/DeviceSettings';

export abstract class MiFloraDriver extends Driver {

    async onInit(): Promise<void> {
        console.log('Successfully init MiFloraDriver');
    }

    /**
     * the name of the BLE for identification
     */
    abstract getMiFloraBleIdentification(): string

    /**
     * the human readable name of the BLE
     */
    abstract getMiFloraBleName(): string;

    /**
     * the supported capabilities
     */
    abstract getSupportedCapabilities(): string[];

    /**
     * get the default settings
     */
    abstract getDefaultSettings(uuid: string): DeviceSettings;

    /**
     * render a list of devices for pairing to homey
     */
    async onPairListDevices(): Promise<MiFloraDevice[]> {
        const {version} = this.homey.manifest;
        let index = 0;
        let devices: MiFloraDevice[] = [];
        return this.homey.ble.discover()
                .then(advertisements => {
                    advertisements.forEach(advertisement => {
                        if (advertisement.localName === this.getMiFloraBleIdentification()) {
                            ++index;
                            devices.push({
                                id: advertisement.uuid,
                                name: `${this.getMiFloraBleName()} ${index}`,
                                data: {
                                    id: advertisement.id,
                                    uuid: advertisement.uuid,
                                    address: advertisement.uuid,
                                    version: `v${version}`,
                                },
                                settings: this.getDefaultSettings(advertisement.uuid),
                                capabilities: this.getSupportedCapabilities(),
                            });
                        }
                    });

                    return devices;
                });
    }
}
