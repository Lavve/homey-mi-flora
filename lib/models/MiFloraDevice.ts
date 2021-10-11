import {DeviceSettings} from './DeviceSettings';

export type MiFloraDevice = {
    id: string;
    name: string;
    data: {
        id: string,
        uuid: string,
        address: string,
        version: string,
    };
    settings: DeviceSettings,
    capabilities: string[]
}
