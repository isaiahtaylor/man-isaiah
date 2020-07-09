export interface CommandRecord {
    command: string;
    isHelp?: boolean;
    isCancelled?: boolean;
}