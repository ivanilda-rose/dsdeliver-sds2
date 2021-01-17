import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'intl';
import 'intl/locale-data/jsonp/pt';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export function dateFromNow(date : string){
	return dayjs(date).fromNow();
}

export function formatPrice(price: number) {
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		minimumFractionDigits: 2	
	});
	
	return formatter.format(price);
}
