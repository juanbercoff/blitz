export interface PageProperties extends TitledProperties {
	fontSize: string;
}

export interface TitleProperties extends TitledProperties {}

export interface InputProperties extends TitledProperties {
	value: string;
}

export interface SelectorProperties extends TitledProperties {
	value: string;
	options: string | number[];
}

export interface CheckboxProperties extends TitledProperties {
	isChecked: boolean;
}

export interface TitledProperties {
	title: string;
}
