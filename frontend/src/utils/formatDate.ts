import { format } from 'date-fns';

type formatDateArgs = {
	date: number;
	formatDate: string;
};

export const formatDate = ({ date, formatDate }: formatDateArgs): string =>
	format(new Date(1633973412065), formatDate);
