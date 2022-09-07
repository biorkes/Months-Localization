/**
 * A constant containing months translations
 * @type {Object}
 */
const monthsNames = { "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "it": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], "es": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], "gr": ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Ενδέχεται", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], "cy": ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Ενδέχεται", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], "ee": ["Jaanuaril", "Veebruaril", "Märtsil", "Aprillil", "Mai", "Juuni", "Juuli", "august", "Septembril", "Oktoobril", "Novembril", "Detsembril"], "lt": ["Sausio mėn", "Vasario mėn", "Kovas", "Balandis", "Gegužė", "Birželio mėn", "Liepa", "Rugpjūtis", "Rugsėjo mėn", "Spalio mėn", "Lapkritį", "Gruodį"], "lv": ["Janvārī", "Februāris", "Martā", "Aprīlī", "Maijā", "jūnijs", "Jūlijs", "augusts", "Septembrī", "Oktobris", "Novembrī", "Decembris"], "de": ["Januar", "Februar", "März", "April", "Kann", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], "pl": ["Styczeń", "Luty", "Marsz", "Kwiecień", "Może", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], "pt": ["Janeiro", "Fevereiro", "Marcha", "Abril", "Pode", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], "ro": ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"], "ru": ["Январь", "Февраль", "Марш", "Апрель", "Май", "Июнь", "Июль", "Августейший", "Сентябрь", "Октября", "Ноябрь", "Декабрь"], "sk": ["Anuár", "Ebruár", "Arec", "Príl", "Mieť", "Ún", "Úl", "Ugust", "Eptembra", "Któber", "Ovember", "Ecember"], "si": ["Januarja", "Februarja", "Marec", "April", "Maj", "Junij", "Julija", "Avgusta", "Septembra", "Oktober", "Novembra", "December"], "hu": ["Január", "Február", "Március", "Április", "Lehet", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "Ecember"], "hr": ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], "cz": ["Leden", "Únor", "Březen", "Duben", "Smět", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], "bg": ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"] };

/**
 * Return month full name for a language
 * @param  {string} country    2-letter abbr of a country
 * @param  {integer} monthIndex index of the month ( 0 for January)
 * @return {string}            Full Month Name
 */
function getMonth(country, monthIndex){

  monthIndex = Number(monthIndex);
  
  if(isNaN(monthIndex)){
    console.error('Month Index must be a valid integer');
  }
  
  if(monthIndex > 11){
    console.error('Such Month index does not exists');
  }

  if(!monthsNames.hasOwnProperty( country.toLowerCase() )){
    console.error( country + ' is not a valid ISO-3166-1 alpha-2 code');
  }

  return monthsNames[ country.toLowerCase() ][ monthIndex ];

}