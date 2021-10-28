import { format } from 'date-fns';

type formatDateArgs = {
	date: number;
	formatDate: string;
};

type formatBirthdayArgs = { birthday: string };

export const formatDate = ({ date, formatDate }: formatDateArgs): string =>
	format(new Date(1633973412065), formatDate);

export const formatBirthday = (birthday: number | string): string =>
	format(new Date(birthday), 'LLLL, dd, yyyy');
