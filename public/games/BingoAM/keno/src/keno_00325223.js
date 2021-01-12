
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"BingoAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
	
		gameWS.onmessage=function(k){
	
		    var tmpMess=k.data.split("#");
console.log(gameController);
			if(tmpMess[0]=='UPDATE'  && gameController.vrn.hjv!=undefined){
			
			if(gameController.dgg!=parseInt(tmpMess[1])){
				
			gameController.dgg=parseInt(tmpMess[1]);	
		
			gameController.vrn.hjv.dse("creditd", "#lun", [gameController.zai(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////

function kct() {
    this.omm = "Info";
    this.llh = "DEPOSIT";
    this.audio = "AUDIO";
    this.taw = "TIP";
    this.nwu = "TURBO";
    this.otg = "STATISTIC";
    this.exe = "HISTORY";
    this.bpn = "SHORTCUTS";
    this.uvl = "HELP";
    this.itl = "PAYTABLE";
    this.language = "LANGUAGE";
    this.eiw = ">>";
    this.iup = "<<";
    this.jzd = "Fullscreen is not supported!"
}

function qft() {
    this.oxi = "MINIMUM BET IS";
    this.itb = "MAX BET";
    this.mmw = "MIN.BET";
    this.uhi = "MAX.BET";
    this.wnr = "BET";
    this.start = "START";
    this.uvl = "HELP";
    this.itl = "PAYTABLE";
    this.lmc = "MENU";
    this.kue = "MORE|GAMES";
    this.myy = "STOP";
    this.dgg = "CREDIT";
    this.gch = "GAME OVER";
    this.oii = "WINNER!";
    this.yya = "GOOD LUCK!";
    this.fyd = "WIN";
    this.qgl = "LAST WIN";
    this.jmr = "COLLECT";
    this.hmn = "COLLECT";
    this.pml = "GAMBLE";
    this.niv = "AUTO|START";
    this.lfp = "HALF|GAMBLE";
    this.hde = "EXIT";
    this.qts = "START GAME";
    this.nla = "CHOOSE BET";
    this.qnj = "HALF";
    this.ret = "RETURN|TO GAME";
    this.rlb = "Total Win";
    this.aco = "Warning";
    this.zca = "TOTAL";
    this.sya = "PLEASE WAIT ...";
    this.frj = "More Games";
    this.nwu = "SPEED";
    this.xqs = "Malfunction voids all pays and plays.";
    this.zus = "C O N T I N U E";
    this.edc = "AUTOSTART";
    this.ycx = "PAYTABLE";
    this.lwk = "GAMBLE";
    this.left = "LEFT";
    this.qjg = "RIGHT";
    this.ok = "OK";
    this.cen = "CANCEL";
    this.xuy = "Gamble";
    this.tue = "Half";
    this.amp = "GAME RULES";
    this.anw = "GAME RULES";
    this.hlh = "Bonus!";
    this.zsc = "BONUS";
    this.kkm = "PRESS ANY KEY TO CONTINUE";
    this.tnt = "NOT ENOUGH CREDIT.";
    this.zxf = "wins";
    this.bhw = "V A L U E";
    this.of = "OF";
    this.kdq = "TOUCH THE SCREEN TO CONTINUE";
    this.uhk = "LOADING ...";
    this.inv = "LOADING HISTORY ...";
    this.mpr = "Communication Error";
    this.bmr = "You have reached one of the limits!";
    this.spa = "You have reached the maximum amount of free games!";
    this.kec = "(Game will be closed)";
    this.eki = "(Game will be restarted)";
    this.nut = "WON";
    this.error = "ERROR";
    this.qur = "FREEPLAY";
    this.mcn = "AUTO";
    this.mwx = "GAME ID";
    this.cbo = "Playing Time";
    this.ptf = "last";
    this.rsb = "games";
    this.llh = "DEPOSIT";
    this.audio = "AUDIO";
    this.hga = "MUSIC";
    this.etp = "FULLSCREEN";
    this.eta = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.ujm = "Do not show again";
    this.ape = "Sounds can not be loaded!";
    this.dqa = "Resources missing!";
    this.nzm = "Play without sound?";
    this.rpt = "SETTINGS";
    this.qrx = "Please turn your device!";
    this.omm = "INFO";
    this.ihw = "Please disable PRIVATE MODE in your browser to play the game.";
    this.fhn = "This game is optimized for Google Chrome.";
    this.bpz = "Please use the current version of";
    this.hwb = "Unfortunately this browser is not fully supported.";
    this.vbe = "This game can not be started in freeplay mode!";
    this.ztr = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.gcr = "Adjust the game interface to your needs!";
    this.jdz = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.swq = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.alz = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.otg = "Statistic";
    this.oei = "Total Games";
    this.uze = "Total Bets";
    this.igz = "Total Wins";
    this.via = "Reality Check";
    this.pfd = "Total Play Time";
    this.dlv = "I have read this message";
    this.lgx = "EXIT|GAME";
    this.exe = "History";
    this.wuo = "No games played.";
    this.jsn = "STATE";
    this.dqp = "Main Game";
    this.gsr = "Auto Collected";
    this.qte = "Collected";
    this.hmf = "Bonusspins";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "First Deal";
    this.qgd = "Second Deal";
    this.kgl = "Third Deal";
    this.ega = "AUTOSTART SETTINGS";
    this.erz = "Amount of games:";
    this.mir = "Stop autostart";
    this.oft = "Credit lower than:";
    this.qzs = "Credit higher than:";
    this.anr = "Win higher than:";
    this.nps = "The autostart will be stopped at the beginning of the bonus.";
    this.yvt = "Share on Facebook";
    this.bbb = "For more information, see the game rules."
}
qft.prototype = new kct;

function usy() {
    this.oxi = "МИНИМАЛЬНАЯ СТАВКА -";
    this.itb = "МАКС.|СТАВКА";
    this.mmw = "МИН.СТВКА";
    this.uhi = "МАКС.СТВКА";
    this.wnr = "СТАВКА";
    this.start = "СТАРТ";
    this.uvl = "ПОМОЩЬ";
    this.itl = "ТАБЛИЦА ВЫПЛАТ";
    this.lmc = "МЕНЮ";
    this.kue = "ДРУГИЕ|ИГРЫ";
    this.myy = "СТОП";
    this.dgg = "КРЕДИТ";
    this.gch = "КОНЕЦ ИГРЫ";
    this.oii = "ПОБЕДИТЕЛЬ!";
    this.yya = "ЖЕЛАЕМ УДАЧИ!";
    this.fyd = "ВЫИГРЫШ";
    this.qgl = "ПОСЛЕД. ВЫИГРЫШ";
    this.zxf = "выйгрыши";
    this.jmr = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.hmn = "ЗАБРАТЬ ВЫИГРЫШ";
    this.pml = "ИГРА|НА|РИСК";
    this.niv = "АВТО|ИГРА";
    this.lfp = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.hde = "ВЫХОД";
    this.qts = "НАЖМИТЕ СТАРТ";
    this.nla = "ВЫБЕРИТЕ СТАВКУ";
    this.qnj = "ВЗЯТЬ|1/2";
    this.kkm = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.kdq = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.ygw = "Множитель для Бонуса";
    this.ahc = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.rlb = "ОБЩИЙ ВЫИГРЫШ";
    this.uhk = "Загрузка ...";
    this.inv = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.tnt = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.bmr = "Достигнут один из лимитов!";
    this.aco = "Внимание";
    this.mpr = "ошибка обмена данных";
    this.spa = "Вы получили максимальное количество свободных игр!";
    this.kec = "(Игра заканчивается)";
    this.eki = "(Игра начинается заново)";
    this.hlh = "Бонус!";
    this.zsc = "БОНУС";
    this.nut = "ВЫИГРЫШ";
    this.zca = "ВСЕГО";
    this.sya = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.qur = "FREEPLAY";
    this.frj = "ВЫБОР ИГРЫ";
    this.mwx = "GAME ID";
    this.cbo = "Playing Time";
    this.ptf = "последняя";
    this.rsb = "игры";
    this.llh = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.hga = "МУЗЫКА";
    this.nwu = "СКОРОСТЬ";
    this.etp = "FULLSCREEN";
    this.eta = "FULLSCREEN";
    this.language = "ЯЗЫК";
    this.xqs = "При неисправности все игры и выигрыши аннулируются.";
    this.zus = "П Р О Д О Л Ж И Т Ь";
    this.ujm = "Больше не показывать";
    this.edc = "АВТОИГРА";
    this.ycx = "ТАБЛИЦА ВЫПЛАТ";
    this.lwk = "ИГРА НА РИСК";
    this.ape = "Звук не загружается!";
    this.dqa = "Ресурсы отсутствуют!";
    this.nzm = "Играть без звука?";
    this.rpt = "НАСТРОЙКА";
    this.qrx = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.qjg = "ПРАВО";
    this.mcn = "АВТО";
    this.bhw = "V A L U E";
    this.omm = "ИНФОРМАЦИЯ";
    this.ihw = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.fhn = "Настоящая игра оптимизирована для Google Chrome.";
    this.bpz = "Используйте, пожалуйста, актуальную версию";
    this.hwb = "К сожалению нет полной поддержки браузера.";
    this.vbe = "Запуск этой игры в режиме свободных игр невозможен!";
    this.ztr = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.gcr = "Приспособь интерфейс к своим потребностям!";
    this.bbb = "For more information, see the game rules.";
    this.amp = "ПРАВИЛА ИГРЫ";
    this.anw = "ПРАВИЛА ИГРЫ";
    this.jdz = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.swq = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.alz = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.otg = "Статус";
    this.oei = "количество игр";
    this.uze = "вся ставка";
    this.igz = "общий выигрыш";
    this.via = "Reality Check";
    this.pfd = "общее время игры";
    this.dlv = "Я сообщение прочитал.";
    this.lgx = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.exe = "История";
    this.wuo = "нет истории.";
    this.jsn = "STATE";
    this.dqp = "Main Game";
    this.gsr = "Auto Collected";
    this.qte = "Collected";
    this.hmf = "Bonusspins";
    this.xuy = "Gamble";
    this.tue = "Half";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "First Deal";
    this.qgd = "Second Deal";
    this.kgl = "Third Deal";
    this.cen = "ИЗМЕНИТЬ";
    this.ega = "НАСТРОЙКА АВТОСТАРТА";
    this.erz = "Количество игр:";
    this.mir = "Автостарт остановить";
    this.oft = "Кредит ниже, чем:";
    this.qzs = "Кредит выше, чем:";
    this.anr = "Выигрыш выше, чем:";
    this.nps = "Автостарт прерывается, если начинается бонусная игра.";
    this.yvt = "Поделись в фейсбук"
}
usy.prototype = new kct;

function cud() {
    this.oxi = "APUESTA MINIMA ES";
    this.itb = "APUESTA|MAXIMA";
    this.mmw = "APUESTA MIN.";
    this.uhi = "APUESTA MAX.";
    this.wnr = "APUESTA";
    this.start = "START";
    this.uvl = "AYUDA";
    this.itl = "PLAN DE|GANANCIAS";
    this.lmc = "MENU";
    this.kue = "MAS|JUEGOS";
    this.myy = "PARADA";
    this.dgg = "CREDITOS";
    this.gch = "FIN DEL JUEGO";
    this.oii = "¡GANADOR!";
    this.yya = "¡MUCHA SUERTE!";
    this.fyd = "PREMIO";
    this.qgl = "ULTIMOS PREMIO";
    this.zxf = "gana";
    this.jmr = "COBRAR";
    this.hmn = "COBRAR";
    this.pml = "RIESGO";
    this.niv = "AUTO|START";
    this.lfp = "MEDIA|APUESTA";
    this.of = "DE";
    this.hde = "SALIR";
    this.qts = "¡PULSE START!";
    this.nla = "ELIJA SU APUESTA";
    this.qnj = "MITAD";
    this.kkm = "PULSE UNA TECLA PARA CONTINUAR";
    this.kdq = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.rlb = "Benificio total";
    this.uhk = "LOADING ...";
    this.inv = "LOADING HISTORY ...";
    this.tnt = "No hay bastante CREDITO";
    this.bmr = "¡Ha alcanzado uno de los limites!";
    this.aco = "Advertencia";
    this.mpr = "Error de comunicación";
    this.spa = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.kec = "(El juego se cerrará)";
    this.eki = "(El juego se reiniciará)";
    this.hlh = "¡BONUS!";
    this.zsc = "BONUS";
    this.nut = "GANADO";
    this.zca = "TOTAL";
    this.uuc = "TURBO SI";
    this.sem = "TURBO NO";
    this.sya = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.qur = "FREEPLAY";
    this.frj = "MAS JUEGOS";
    this.mwx = "ID DE JUEGO";
    this.cbo = "Playing Time";
    this.ptf = "ultimos";
    this.rsb = "juegos";
    this.llh = "DEPÓSITO";
    this.audio = "AUDIO";
    this.hga = "MÚSICA";
    this.nwu = "VELOCIDAD";
    this.etp = "PANTALLA COMPLETA";
    this.eta = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.xqs = "Un mal funcionamiento anula toda jugada y todo pago.";
    this.zus = "A D E L A N T E";
    this.ujm = "No mostrar de nuevo";
    this.edc = "AUTOSTART";
    this.ycx = "PLAN DE GANANCIAS";
    this.lwk = "RIESGO";
    this.ape = "No se pueden cargar los sonidos.";
    this.dqa = "Faltan recursos.";
    this.nzm = "¿Jugar sin sonido?";
    this.rpt = "AJUSTES";
    this.bhw = "V A L U E";
    this.qrx = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.qjg = "DERECHA";
    this.mcn = "AUTOMÁTICO";
    this.omm = "INFORMACIÓN";
    this.ihw = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.fhn = "Este juego está optimizado para Google Chrome.";
    this.bpz = "Use la versión actual de";
    this.hwb = "Desafortunadamente, este explorador no es compatible.";
    this.vbe = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.ztr = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.gcr = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.bbb = "For more information, see the game rules.";
    this.amp = "REGLAS DEL JUEGO";
    this.anw = "REGLAS|DEL JUEGO";
    this.jdz = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.swq = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.alz = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.otg = "ESTADO";
    this.oei = "Número de juegos";
    this.uze = "Apuesta total";
    this.igz = "Ganancia total";
    this.via = "Reality Check";
    this.pfd = "Tiempo total de juego";
    this.dlv = "He leído el mensaje.";
    this.lgx = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.exe = "HISTORIAL";
    this.wuo = "Aún no hay juegos.";
    this.jsn = "Estado";
    this.dqp = "Juego principal";
    this.gsr = "Ganancia automática";
    this.qte = "Ganancia";
    this.hmf = "BONUSSPINS";
    this.xuy = "Apuesta";
    this.tue = "Mitad";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "Primera mano";
    this.qgd = "Segunda mano";
    this.kgl = "Tercera mano";
    this.cen = "CANCELAR";
    this.ega = "CONFIGURACIONES DE AUTOSTART";
    this.erz = "Cantidad de juegos:";
    this.mir = "Detener Autostart";
    this.oft = "Crédito menor que:";
    this.qzs = "Crédito mayor que:";
    this.anr = "Ganancia mayor que:";
    this.nps = "El Autostart se detendrá al principio del bonus.";
    this.yvt = "Compartir en Facebook"
}
cud.prototype = new kct;

function vtv() {
    this.oxi = "MINIMALER EINSATZ IST";
    this.itb = "MAX. EINSATZ";
    this.mmw = "MIN. EINSATZ";
    this.uhi = "MAX. EINSATZ";
    this.wnr = "EINSATZ";
    this.start = "START";
    this.uvl = "HILFE";
    this.itl = "GEWINNPLAN";
    this.lmc = "MENÜ";
    this.kue = "MEHR|SPIELE";
    this.dgg = "KREDIT";
    this.gch = "SPIEL ENDE";
    this.oii = "GEWINNER!";
    this.yya = "VIEL GLÜCK!";
    this.fyd = "GEWINN";
    this.qgl = "LETZTER GEWINN";
    this.zxf = "gewinnt";
    this.jmr = "NEHMEN";
    this.hmn = "NEHMEN";
    this.pml = "RISIKO";
    this.niv = "AUTO|START";
    this.lfp = "HALF|GAMBLE";
    this.myy = "STOP";
    this.of = "VON";
    this.hde = "EXIT";
    this.qts = "START DRÜCKEN";
    this.nla = "EINSATZ WÄHLEN";
    this.qnj = "TEILEN";
    this.kkm = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.kdq = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.rlb = "Gesamt Gewinn";
    this.uhk = "LÄDT ...";
    this.inv = "LÄDT HISTORIE ...";
    this.tnt = "NICHT GENUG KREDIT!";
    this.aco = "Achtung";
    this.mpr = "Kommunikationsfehler";
    this.bmr = "Sie haben eines der Limits erreicht!";
    this.spa = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.kec = "(Das Spiel wird beendet)";
    this.eki = "(Das Spiel wird neu gestartet)";
    this.hlh = "Bonus!";
    this.zsc = "BONUS";
    this.nut = "GEWONNEN";
    this.zca = "TOTAL";
    this.sya = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.qur = "FREEPLAY";
    this.frj = "MEHR|SPIELE";
    this.mwx = "SPIEL ID";
    this.cbo = "Spielzeit";
    this.ptf = "Letzten";
    this.rsb = "Spiele";
    this.llh = "GUTHABEN";
    this.audio = "AUDIO";
    this.hga = "MUSIK";
    this.nwu = "SPEED";
    this.etp = "VOLLBILD";
    this.eta = "VOLLBILD";
    this.language = "SPRACHE";
    this.xqs = "Bei Gerätestörung keine Haftung.";
    this.zus = "W E I T E R";
    this.ujm = "Nicht noch einmal anzeigen";
    this.edc = "AUTOSTART";
    this.lwk = "RISIKO";
    this.ycx = "GEWINNPLAN";
    this.ape = "Sounds können nicht geladen werden!";
    this.dqa = "Ressourcen fehlen!";
    this.nzm = "Ohne Ton spielen?";
    this.rpt = "EINSTELL.";
    this.qrx = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.qjg = "RECHTS";
    this.mcn = "AUTOM.";
    this.bhw = "V A L U E";
    this.omm = "INFO";
    this.ihw = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.fhn = "Dieses Spiel ist optimiert für Google Chrome.";
    this.bpz = "Bitte benutzen sie die aktuelle Version von";
    this.hwb = "Leider wird dieser Browser nicht unterstützt.";
    this.vbe = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.ztr = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.gcr = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.bbb = "Zusätzliche Information finden Sie in den Spielregeln.";
    this.amp = "SPIELREGELN";
    this.anw = "SPIELREGELN";
    this.jdz = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.swq = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.alz = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.otg = "Statistik";
    this.oei = "Anzahl der Spiele";
    this.uze = "Gesamteinsatz";
    this.igz = "Gesamtgewinn";
    this.via = "Reality Check";
    this.pfd = "Gesamtspielzeit";
    this.dlv = "Ich habe die Nachricht gelesen";
    this.lgx = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.exe = "Historie";
    this.wuo = "Es existieren noch keine Spiele.";
    this.jsn = "STATUS";
    this.dqp = "Hauptspiel";
    this.gsr = "Auto. Nehmen";
    this.qte = "Genommen";
    this.hmf = "Bonusspins";
    this.xuy = "Risiko";
    this.tue = "Halb";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "Erster Deal";
    this.qgd = "Zweiter Deal";
    this.kgl = "Dritter Deal";
    this.cen = "ABBRUCH";
    this.ega = "AUTOSTART EINSTELLUNGEN";
    this.erz = "Anzahl der Spiele: ";
    this.mir = "Autostart anhalten";
    this.oft = "Kredit niedriger als:";
    this.qzs = "Kredit höher als:";
    this.anr = "Gewinn höher als:";
    this.nps = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.yvt = "Auf Facebook teilen"
}
vtv.prototype = new kct;

function erm() {
    this.oxi = "MINIMUM BANKO";
    this.itb = "MAKS. BANKO";
    this.mmw = "MIN. BANKO";
    this.uhi = "MAKS. BANKO";
    this.wnr = "BANKO";
    this.start = "BAŞLAT";
    this.uvl = "YARDIM";
    this.itl = "Kazanç planı";
    this.lmc = "MENÜ";
    this.kue = "DAHA ÇOK|OYUN";
    this.myy = "DUR";
    this.dgg = "KREDI";
    this.gch = "OYUN BİTTİ";
    this.oii = "KAZANDINIZ!";
    this.yya = "BOL ŞANSLAR!";
    this.fyd = "KAZANÇ";
    this.qgl = "SON KAZANÇ";
    this.zxf = "kazanır";
    this.jmr = "ALMAK";
    this.hmn = "ALMAK";
    this.pml = "RIZIKO";
    this.niv = "OTOMATİK|BAŞLATMA";
    this.lfp = "YARI|RIZIKO";
    this.of = "VEREN";
    this.hde = "ÇIKIŞ";
    this.qts = "BAŞLAT TUŞUNA BASINIZ";
    this.nla = "BANKO SEÇİNİZ";
    this.qnj = "ALMAK|1/2";
    this.kkm = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.kdq = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.rlb = "Toplam kazanç";
    this.uhk = "YÜKLÜYOR ...";
    this.inv = "GEÇMIŞI YÜKLÜYOR ...";
    this.tnt = "YETERSİZ KREDİ.";
    this.bmr = "Limitlerin birine ulaştınız!";
    this.aco = "Dikkat";
    this.mpr = "İletişim hatası";
    this.spa = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.kec = "(Oyun sonlandırılıyor)";
    this.eki = "(Oyun yeniden başlatılıyor)";
    this.hlh = "Bedava oyun primi!";
    this.zsc = "PRİM";
    this.nut = "KAZANDINIZ";
    this.zca = "TOPLAM";
    this.sya = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.qur = "FREEPLAY";
    this.frj = "DAHA ÇOK OYUN";
    this.mwx = "OYUN ID";
    this.cbo = "OYUN SÜRESİ";
    this.ptf = "Son";
    this.rsb = "oyun";
    this.llh = "BAKIYE";
    this.audio = "AUDIO";
    this.hga = "MÜZIK";
    this.nwu = "HıZ";
    this.etp = "TAM EKRAN";
    this.eta = "TAM EKRAN";
    this.language = "LISAN";
    this.xqs = "Arıza halinde tüm ödemeler ve oyunlar geçersiz sayılır.";
    this.zus = "İ L E R I";
    this.ujm = "Tekrar gösterme";
    this.edc = "OTOMATİK|BAŞLATMA";
    this.lwk = "RIZIKO";
    this.ycx = "Kazanç planı";
    this.ape = "Sesler yüklenemiyorlar!";
    this.dqa = "Kaynaklar eksik!";
    this.nzm = "Sessiz oynayacak mısınız?";
    this.rpt = "AYARLAR";
    this.qrx = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.qjg = "SAĞ";
    this.mcn = "OTOMATIK";
    this.bhw = "V A L U E";
    this.omm = "BILGI";
    this.ihw = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.fhn = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.bpz = "'nin güncel versiyonunu kullanın";
    this.hwb = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.vbe = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.ztr = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.gcr = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.bbb = "For more information, see the game rules.";
    this.amp = "OYUNUN KURALLARı";
    this.anw = "OYUNUN|KURALLARı";
    this.jdz = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.swq = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.alz = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.otg = "İstatistik";
    this.oei = "Toplam oyunlar";
    this.uze = "Toplam bankolar";
    this.igz = "Toplam kazançlar";
    this.via = "Reality Check";
    this.pfd = "Toplam oyun süresi";
    this.dlv = "Bu mesajı okudum.";
    this.lgx = "OYUNU|KAPAT";
    this.ok = "OK";
    this.exe = "GEÇMİŞ";
    this.wuo = "Henüz hiç bir oyun yok.";
    this.jsn = "STATÜ";
    this.dqp = "Ana oyun";
    this.gsr = "Otomatik olarak kazandınız";
    this.qte = "Toplandı";
    this.hmf = "Prim oyunlar";
    this.xuy = "Riziko";
    this.tue = "Yarım";
    this.rog = "Respin";
    this.gpf = "Prim";
    this.zfh = "İlk anlaşma";
    this.qgd = "İkinci anlaşma";
    this.kgl = "Üçüncü anlaşma";
    this.cen = "İPTAL";
    this.ega = "OTOMATIK BAŞLAT AYARLARı";
    this.erz = "Oyun sayısı:";
    this.mir = "Otomatik başlatmayı durdur";
    this.oft = "Kredi bundan düşüktür:";
    this.qzs = "Kredi bundan yüksektir:";
    this.anr = "Kazanç bundan yüksektir:";
    this.nps = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.yvt = "Facebook'ta paylaş"
}
erm.prototype = new kct;

function hxg() {
    this.oxi = "MINIMÁLNÍ SÁZKA JE";
    this.itb = "MAX. SÁZKA";
    this.mmw = "MIN. SÁZKA";
    this.uhi = "MAX. SÁZKA";
    this.wnr = "SÁZKA";
    this.start = "START";
    this.uvl = "POMOC";
    this.itl = "VÝHERNÍ PLÁN";
    this.lmc = "MENU";
    this.kue = "DALŠÍ|HRY";
    this.myy = "STOP";
    this.dgg = "KREDIT";
    this.gch = "KONEC HRY";
    this.oii = "VÍTEZ!";
    this.yya = "HODNE ŠTESTÍ!";
    this.fyd = "VÝHRA";
    this.qgl = "POSL. VÝHRA";
    this.zxf = "vyhrává";
    this.jmr = "VEZMI";
    this.hmn = "VEZMI";
    this.pml = "HRA";
    this.niv = "AUTO|START";
    this.lfp = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.hde = "VÝSTUP";
    this.qts = "START HRY";
    this.nla = "VYBRAT SÁZKU";
    this.qnj = "POLOVINA";
    this.kkm = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.kdq = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.rlb = "Celková výhra";
    this.uhk = "NAHRÁVÁM ...";
    this.inv = "NAHRÁVÁM HISTORII ...";
    this.tnt = "Nedostatecný kredit.";
    this.bmr = "Dosáhli jste jednoho z limitů!";
    this.aco = "Varování";
    this.mpr = "Chyba komunikace";
    this.spa = "Dosáhli jste maximálního počtu her zdarma!";
    this.kec = "(Hra se zavře)";
    this.eki = "(Hra se restartuje)";
    this.hlh = "Bonus!";
    this.zsc = "BONUS";
    this.nut = "VYHRÁL";
    this.zca = "CELKOVÁ";
    this.sya = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.qur = "FREEPLAY";
    this.frj = "DALŠÍ HRY";
    this.mwx = "ID HRY";
    this.cbo = "HRACÍ DOBA";
    this.ptf = "Poslední";
    this.rsb = "hry";
    this.llh = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.hga = "MUZIKA";
    this.nwu = "RYCHLOST";
    this.etp = "FULLSCREEN";
    this.eta = "FULLSCREEN";
    this.language = "ŘEČ";
    this.xqs = "Při poruše jsou všechny hry a výhry neplatné.";
    this.zus = "P O K R A Č U J";
    this.ujm = "Nezobrazujte znovu";
    this.edc = "AUTOSTART";
    this.lwk = "HRA";
    this.ycx = "VÝHERNÍ PLÁN";
    this.ape = "Zvuk nelze nahrát!";
    this.dqa = "Chybí zdroje!";
    this.nzm = "Hrát bez zvuku?";
    this.rpt = "NASTAVENÍ";
    this.bhw = "V A L U E";
    this.qrx = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.qjg = "VPRAVO";
    this.mcn = "AUTO";
    this.omm = "INFORMACE";
    this.ihw = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.fhn = "Tato hra je optimalizovaná pro Google Chrome.";
    this.bpz = "Použijte aktuální verzi";
    this.hwb = "Tento prohlížeč není bohužel plně podporován.";
    this.vbe = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.ztr = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.gcr = "Nastavte rozhraní hry svým potřebám!";
    this.bbb = "For more information, see the game rules.";
    this.amp = "PRAVIDLA HRY";
    this.anw = "PRAVIDLA HRY";
    this.jdz = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.swq = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.alz = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.otg = "Statistika";
    this.oei = "Celkem hry";
    this.uze = "Celkem sázky";
    this.igz = "Celkem výhry";
    this.via = "Reality Check";
    this.pfd = "Celková hrací doba";
    this.dlv = "Zprávu jsem četl/a.";
    this.lgx = "UKONČIT|HRU";
    this.ok = "OK";
    this.exe = "HISTORIE";
    this.wuo = "Žádné odehrané hry.";
    this.jsn = "STATUS";
    this.dqp = "Hlavní hra";
    this.gsr = "Automaticky vybráno";
    this.qte = "Vybráno";
    this.hmf = "Bonusspins";
    this.xuy = "Hra";
    this.tue = "Polovina";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "První vyložení";
    this.qgd = "Druhé vyložení";
    this.kgl = "Třetí vyložení";
    this.cen = "ZRUŠIT";
    this.ega = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.erz = "Množství her:";
    this.mir = "Zastavit automatický start";
    this.oft = "Kredit nižší než:";
    this.qzs = "Kredit vyšší než:";
    this.anr = "Výhra vyšší než:";
    this.nps = "Automatický start se zastaví na začátku bonusu.";
    this.yvt = "Sdílet na Facebooku"
}
hxg.prototype = new kct;

function ihh() {
    this.oxi = "MIINIMUMPANUS ON";
    this.itb = "MAX PANUS";
    this.mmw = "MIN PANUS";
    this.uhi = "MAX PANUS";
    this.wnr = "PANUS";
    this.start = "START";
    this.uvl = "ABI";
    this.itl = "VÕIDU TABEL";
    this.lmc = "MENÜÜ";
    this.kue = "VALI|MÄNG";
    this.myy = "STOPP";
    this.dgg = "KREDIIT";
    this.gch = "MÄNG ON LÕPPENUD!";
    this.oii = "OLED VÕITNUD!";
    this.yya = "SOOVIME EDU!";
    this.fyd = "VÕIT";
    this.qgl = "EELMINE VÕIT";
    this.jmr = "VÕTA|VÕIT";
    this.hmn = "VÕTA VÕIT";
    this.pml = "DUUBEL|DAMINE";
    this.niv = "AUTO|START";
    this.lfp = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.hde = "VÄLJA";
    this.qts = "ALUSTA MÄNGU";
    this.nla = "VALI PANUS";
    this.qnj = "POOLIK";
    this.kkm = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.rlb = "Koguvõit";
    this.tnt = "POLE PIISAVALT KREDIITI.";
    this.hlh = "Boonus!";
    this.zsc = "BOONUS";
    this.sya = "PALUN OODAKE ...";
    this.frj = "Vali Mäng";
    this.audio = "HELI";
    this.hga = "MUUSIKA";
    this.nwu = "KIIRUS";
    this.etp = "TÄISEKRAAN";
    this.eta = "TÄISEKRAAN";
    this.xqs = "Rikke korral kõik mängud ja võidud tühistatakse.";
    this.ble = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.amp = "MÄNGUREEGLID";
    this.anw = "MÄNGUREEGLID";
    this.uhk = "LAADIMINE ...";
    this.inv = "AJALOO LAADIMINE ...";
    this.bmr = "Oled saavutanud ühe limiitidest!";
    this.aco = "Hoiatus";
    this.mpr = "Ühenduse viga";
    this.spa = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.kec = "(Mäng suletakse)";
    this.eki = "(Mäng taaskäivitatakse)";
    this.kdq = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.rpt = "SÄTTED";
    this.bhw = "V A L U E";
    this.qrx = "Pöörake oma seadet!";
    this.omm = "INFO";
    this.ihw = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.fhn = "See mäng on optimeeritud Google Chrome jaoks.";
    this.bpz = "Palun kasutage praeguse versiooni";
    this.hwb = "Kahjuks ei toetata seda brauserit täielikult.";
    this.vbe = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.qjg = "PAREM";
    this.mcn = "AUTOMAATNE";
    this.nut = "VÕITIS";
    this.zxf = "võidetud";
    this.zca = "KOKKU";
    this.error = "VIGA";
    this.qur = "TASUTA MÄNG";
    this.mwx = "MÄNGU ID";
    this.cbo = "MÄNGUAEG";
    this.ptf = "Viimased";
    this.rsb = "mängu";
    this.llh = "SISSEMAKSE";
    this.jdz = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.swq = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.alz = "RISKI, ET SUURENDADA OMA VÕITU";
    this.otg = "Statistika";
    this.oei = "Mänge kokku";
    this.uze = "Kogupanus";
    this.igz = "Koguvõit";
    this.via = "Reality Check";
    this.pfd = "Mänguaeg kokku";
    this.dlv = "Olen seda teadet lugenud.";
    this.lgx = "MÄNGU|LÕPP";
    this.exe = "Ajalugu";
    this.wuo = "Ühtegi mängu ei ole mängitud.";
    this.jsn = "OLEK";
    this.dqp = "Põhimäng";
    this.gsr = "Automaatne väljavõtt";
    this.qte = "Välja võetud";
    this.hmf = "Bonusspins";
    this.xuy = "Gamble";
    this.tue = "Pool";
    this.rog = "Respin";
    this.gpf = "Boonus";
    this.zfh = "Esimene jagamine";
    this.qgd = "Teine jagamine";
    this.kgl = "Kolmas jagamine";
    this.zus = "J Ä T K A";
    this.ujm = "Ära seda enam näita";
    this.edc = "AUTOSTART";
    this.lwk = "DUUBEL DAMINE";
    this.ycx = "VÕIDU TABEL";
    this.ape = "Helisid ei saa laadida!";
    this.dqa = "Ressursid puuduvad!";
    this.nzm = "Soovid mängida ilma helideta?";
    this.ztr = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.gcr = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.bbb = "For more information, see the game rules.";
    this.cen = "TÜHISTA";
    this.ega = "AUTOMAATKÄIVITUSE SÄTTED";
    this.erz = "Mängude arv:";
    this.mir = "Peata automaatkäivitus";
    this.oft = "Krediit madalam kui:";
    this.qzs = "Krediit kõrgem kui:";
    this.anr = "Võit suurem kui:";
    this.nps = "Automaatkäivitus peatatakse boonuse alguses.";
    this.yvt = "Jaga Facebookis";
    this.ok = "OK"
}
ihh.prototype = new kct;

function lmg() {
    this.oxi = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.itb = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.mmw = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.uhi = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.wnr = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.uvl = "ΒΟHΘΕΙΑ";
    this.itl = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.lmc = "ΜΕΝΟY";
    this.kue = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.myy = "ΣΤΟΠ";
    this.dgg = "ΠIΣΤΩΣΗ";
    this.gch = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.oii = "ΝΙΚΗΤΗΣ!";
    this.yya = "ΚΑΛΗ ΤΥΧΗ!";
    this.fyd = "ΚEΡΔΟΣ";
    this.qgl = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.jmr = "ΠΑΡΑΛΑΒH";
    this.hmn = "ΠΑΡΑΛΑΒH";
    this.pml = "ΤΖΟΓAΡΩ";
    this.niv = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.lfp = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.hde = "EΞΟΔΟΣ";
    this.qts = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.nla = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.qnj = "ΠΑΡΑΛΑΒH|1/2";
    this.kkm = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.rlb = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.tnt = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.hlh = "Μπόνουσ!";
    this.zsc = "ΜΠOΝΟΥΣ";
    this.sya = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.frj = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.hga = "ΜΟΥΣΙΚΉ";
    this.nwu = "ΤΑΧYΤΗΤΑ";
    this.etp = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.eta = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.xqs = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.zca = "ΣYΝΟΛΟ";
    this.amp = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.anw = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.uhk = "ΦΟΡΤΩΣΗ ...";
    this.inv = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.bmr = "Ξεπεράσατε κάποιο όριο!";
    this.aco = "Προειδοποίηση";
    this.mpr = "Σφάλμα επικοινωνίας";
    this.spa = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.kec = "(Το παιχνίδι θα τερματιστεί)";
    this.eki = "(Το παιχνίδι θα εκκινηθεί εκ νέου)";
    this.kdq = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.rpt = "ΡΥΘΜΙΣΕΙΣ";
    this.bhw = "V A L U E";
    this.qrx = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.omm = "ΠΛΗΡΟΦΟΡΊΕς";
    this.ihw = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.fhn = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.bpz = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.hwb = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.vbe = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.qjg = "ΔΕΞΙA";
    this.mcn = "AΥΤOΜΑΤΟ";
    this.nut = "ΚEΡΔΙΣΕ";
    this.zxf = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.qur = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.mwx = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.cbo = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.ptf = "Τελευταία";
    this.rsb = "παιχνίδια";
    this.llh = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.jdz = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.swq = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.alz = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.otg = "Στατιστικά";
    this.oei = "Σύνολο παιχνιδιών";
    this.uze = "Συνολικό ποντάρισμα";
    this.igz = "Συνολικό κέρδος";
    this.via = "Reality Check";
    this.pfd = "Συνολικός χρόνος παιχνιδιού";
    this.dlv = "Eχω διαβάσει το μήνυμα.";
    this.lgx = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.exe = "ΙΣΤΟΡΙΚΟ";
    this.wuo = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.jsn = "ΚΑΤAΣΤΑΣΗ";
    this.dqp = "Κύριο παιχνίδι";
    this.gsr = "Αυτόματη λήψη";
    this.qte = "Ελήφθησαν";
    this.hmf = "Bonusspins";
    this.xuy = "Τζογάρω";
    this.tue = "Hμισυ";
    this.rog = "Respin";
    this.gpf = "Μπόνουσ";
    this.zfh = "Πρώτο μοίρασμα";
    this.qgd = "Δεύτερο μοίρασμα";
    this.kgl = "Τρίτο μοίρασμα";
    this.zus = "Σ Υ Ν  E Χ Ε Ι Α";
    this.ujm = "Να μην προβληθεί ξανά";
    this.edc = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.lwk = "ΤΖΟΓAΡΩ";
    this.ycx = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.ape = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.dqa = "Λείπουν πόροι!";
    this.nzm = "Παιχνίδι χωρίς ήχο?";
    this.ztr = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.gcr = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.bbb = "For more information, see the game rules.";
    this.cen = "ΑΚΎΡΩΣΗ";
    this.ega = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.erz = "Αριθμός παιχνιδιών:";
    this.mir = "Διακοπή autostart";
    this.oft = "Μονάδες χαμηλότερα από:";
    this.qzs = "Μονάδες υψηλότερες από:";
    this.anr = "Κέρδος υψηλότερο από:";
    this.nps = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.yvt = "Κοινοποίηση στο Facebook";
    this.ok = "OK"
}
lmg.prototype = new kct;

function ycc() {
    this.oxi = "МИН. ЗАЛОГ Е";
    this.itb = "МАКС. ЗАЛОГ";
    this.mmw = "МИНИМ. ЗАЛОГ";
    this.uhi = "МАКС. ЗАЛОГ";
    this.wnr = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.uvl = "ПОМОЩ";
    this.itl = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.lmc = "МЕНЮ";
    this.kue = "ПОВЕЧЕ|ИГРИ";
    this.myy = "СТОП";
    this.dgg = "КРЕДИТ";
    this.gch = "ИГРАТА ЗАВЪРШИ";
    this.oii = "ПЕЧЕЛИТЕ!";
    this.yya = "УСПЕХ!";
    this.fyd = "ПЕЧАЛБА";
    this.qgl = "ПОСЛ.ПЕЧАЛБА";
    this.jmr = "ПРИБИРАНЕ";
    this.hmn = "ПРИБИРАНЕ";
    this.pml = "ДУБЛИРАНЕ";
    this.niv = "АВТО|СТАРТ";
    this.lfp = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.hde = "ИЗХОД";
    this.qts = "ЗАПОЧНЕТЕ ИГРАТА";
    this.nla = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.qnj = "ДЕЛЕНЕ";
    this.kkm = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.rlb = "ОБЩА ПЕЧАЛБА";
    this.tnt = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.hlh = "Бонус!";
    this.zsc = "БОНУС";
    this.sya = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.frj = "Повече Игри";
    this.nwu = "ТУРБО";
    this.xqs = "НЕЗПРАВНОСТ НА МАШИНАТА АНУЛИРА ВСИЧКИ ПЕЧАЛБИ И ИГРИ.";
    this.language = "ЕЗИК";
    this.amp = "ПРАВИЛА НА ИГРАТА";
    this.anw = "ПРАВИЛА|НА ИГРАТА";
    this.uhk = "ЗАРЕЖДАНЕ ...";
    this.inv = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.bmr = "Достигна един от лимитите!";
    this.aco = "Предупреждение";
    this.mpr = "Комуникационна грешка";
    this.spa = "Достигнали сте максималния брой безплатни игри!";
    this.kec = "(Играта ще бъде затворена)";
    this.eki = "(Играта ще бъде рестартирана)";
    this.kdq = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.rpt = "НАСТРОЙКИ";
    this.bhw = "V A L U E";
    this.qrx = "Моля, включете устройството!";
    this.omm = "ИНФОРМАЦИЯ";
    this.ihw = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.fhn = "Тази игра е оптимизирана за Google Chrome.";
    this.bpz = "Моля, използвайте текущата версия на";
    this.hwb = "За съжаление този браузър не се поддържа напълно.";
    this.vbe = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.qjg = "ДЯСНА";
    this.mcn = "АВТО";
    this.nut = "СПЕЧЕЛЕНО";
    this.zxf = "печалби";
    this.zca = "ОБЩО";
    this.error = "ГРЕШКА";
    this.qur = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.hga = "МУЗИКА";
    this.etp = "ПЪЛЕН ЕКРАН";
    this.eta = "ПЪЛЕН|ЕКРАН";
    this.mwx = "ИД НА ИГРА";
    this.cbo = "ВРЕМЕ НА ИГРА";
    this.ptf = "Последни";
    this.rsb = "игри";
    this.llh = "ДЕПОЗИТ";
    this.jdz = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.swq = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.alz = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.otg = "Статистика";
    this.oei = "Общо игри";
    this.uze = "Общо залог";
    this.igz = "Общо печалби";
    this.via = "Reality Check";
    this.pfd = "Общо време на игра";
    this.dlv = "Прочетох това съобщение.";
    this.lgx = "ИЗХОД|ОТ|ИГРАТА";
    this.exe = "ИСТОРИЯ";
    this.wuo = "Няма играни игри.";
    this.jsn = "СТАТУС";
    this.dqp = "Основна игра";
    this.gsr = "Автоматично събрани";
    this.qte = "Събрани";
    this.hmf = "Бонус-игри";
    this.xuy = "Дублиране";
    this.tue = "Половина";
    this.rog = "Respin";
    this.gpf = "Бонус";
    this.zfh = "Първо раздаване";
    this.qgd = "Второ раздаване";
    this.kgl = "Трето раздаване";
    this.zus = "П Р О Д Ъ Л Ж А В А М";
    this.ujm = "Не показвай отново";
    this.edc = "AUTOSTART";
    this.lwk = "ДУБЛИРАНЕ";
    this.ycx = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.ape = "Звукът не може да бъде зареден!";
    this.dqa = "Липсват ресурси!";
    this.nzm = "Игра без звук?";
    this.ztr = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.gcr = "Настройте интерфейса на играта според своите нужди!";
    this.bbb = "For more information, see the game rules.";
    this.cen = "ИЗЧИСТВАНЕ";
    this.ega = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.erz = "Брой игри:";
    this.mir = "Спри автоматичния старт";
    this.oft = "Кредит по-малък от:";
    this.qzs = "Кредит по-висок от:";
    this.anr = "Спечели повече от:";
    this.nps = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.yvt = "Сподели във Facebook";
    this.ok = "OK"
}
ycc.prototype = new kct;

function cqv() {
    this.oxi = "მინიმალური ფსონი არის";
    this.itb = "მაქსიმალური ფსონი";
    this.mmw = "მინიმალური ფსონი";
    this.uhi = "მაქსიმალური ფსონი";
    this.wnr = "ფსონი";
    this.start = "დაწყება";
    this.uvl = "დახმარება";
    this.itl = "გადახდის მრიცხველი";
    this.lmc = "მენიუ";
    this.kue = "მეტი|თამაშები";
    this.myy = "გაჩერება";
    this.dgg = "კრედიტი";
    this.gch = "თამაში დასრულებულია";
    this.oii = "გამარჯვებული!";
    this.yya = "გისურვებთ წარმატებას!";
    this.fyd = "მოგება";
    this.qgl = "ბოლო მოგება";
    this.jmr = "შეგროვება";
    this.hmn = "შეგროვება";
    this.pml = "აზარტი";
    this.niv = "ავტო|დაწყება";
    this.lfp = "ნახევარი";
    this.hde = "გამოსვლა";
    this.qts = "თამაშის დაწყება";
    this.nla = "აირჩიეთ ფსონი";
    this.qnj = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.rlb = "მთლიანი მოგება";
    this.aco = "გაფრთხილება";
    this.zca = "მთლიანი";
    this.sya = "გთხოვთ, დაელოდოთ ...";
    this.frj = "მეტი თამაშები";
    this.nwu = "ტურბო";
    this.xqs = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.zus = "გაგრძელება";
    this.edc = "ავტო დაწყება";
    this.ycx = "გადახდის მრიცხველი";
    this.lwk = "აზარტი";
    this.left = "მარცხნივ";
    this.qjg = "მარჯვნივ";
    this.mcn = "ავტომატურად";
    this.ok = "კი";
    this.cen = "გაუქმება";
    this.xuy = "აზარტი";
    this.tue = "ნახევარი";
    this.amp = "თამაშის წესები";
    this.anw = "თამაშის წესები";
    this.hlh = "BONUS!";
    this.zsc = "ბონუს";
    this.kkm = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.tnt = "არა საკმარისი კრედიტი.";
    this.kdq = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.uhk = "ჩატვირთვის  ...";
    this.inv = "ჩატვირთვის  ისტორია  ...";
    this.mpr = "საკომუნიკაციო შეცდომა";
    this.bmr = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.spa = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.kec = "(თამაში დასრულდება)";
    this.eki = "(თამაში გადაიტვირთება)";
    this.nut = "მოგებულია";
    this.zxf = "wins";
    this.bhw = "V A L U E";
    this.error = "შეცდომა";
    this.qur = "უფასო თამაში";
    this.mwx = "თამაშის  ნომერი";
    this.cbo = "სათამაშო დრო";
    this.ptf = "ბოლო ";
    this.rsb = "თამაშები";
    this.llh = "დეპოზიტი";
    this.audio = "ხმა";
    this.hga = "მუსიკა";
    this.etp = "სრული ეკრანი";
    this.eta = "სრული ეკრანი";
    this.language = "ენის";
    this.ujm = "მომავალში აღარ ჩვენება";
    this.ape = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.dqa = "არასაკმარისი რესურსები!";
    this.nzm = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.qrx = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.ihw = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.fhn = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.kgd = "გთხოვთ გამოიყენოთ";
    this.iqk = "-ის მიმდინარე ვერსია";
    this.hwb = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.vbe = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.ztr = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.gcr = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.jdz = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.swq = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.alz = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.oei = "მთლიანი თამაშები";
    this.uze = "ფსონი მთლიანად";
    this.igz = "მთლიანი მოგება";
    this.pfd = "მთლიანი სათამაშო დრო";
    this.dlv = "მე გავეცანი ამ გზავნილს.";
    this.lgx = "თამაშის|დამთავრება";
    this.exe = "მოვლენების ჩანაწერი";
    this.wuo = "ნათამაშები თამაშები არ არის.";
    this.jsn = "მდგომარეობა";
    this.dqp = "ძირითადი თამაში";
    this.gsr = "ავტომატურად შეგროვება";
    this.qte = "აღებულ იქნა";
    this.zfh = "პირველი დარიგება";
    this.qgd = "მეორე დარიგება";
    this.kgl = "მესამე დარიგება";
    this.ega = "ავტოგამშვების პარამეტრები";
    this.erz = "თამაშების რაოდენობა:";
    this.mir = "შეაჩერეთ ავტოგამშვები";
    this.oft = "კრედიტი უფრო დაბალი ვიდრე:";
    this.qzs = "კრედიტი უფრო მაღალი ვიდრე:";
    this.anr = "მოიგეთ უფრო მეტი ვიდრე:";
    this.nps = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.yvt = "გააზიარეთ ფეისბუქზე";
    this.otg = "სტატისტიკა";
    this.of = "/";
    this.hmf = "Bonus თამაში";
    this.gpf = "ბონუსი";
    this.omm = "ინფორმაცია";
    this.rpt = "პარამეტრ.";
    this.rog = "ხელახლა დატრიალების";
    this.via = "Reality Check";
    this.bbb = "For more information, see the game rules."
}
cqv.prototype = new kct;

function ybq() {
    this.oxi = "A MINIMUM TÉT";
    this.itb = "MAXIMUM TÉT";
    this.mmw = "MIN. TÉT";
    this.uhi = "MAX. TÉT";
    this.wnr = "TÉT";
    this.start = "START";
    this.uvl = "SÚGÓ";
    this.itl = "SÚGÓ";
    this.lmc = "MENÜ";
    this.kue = "MENÜ";
    this.myy = "STOP";
    this.dgg = "HITEL";
    this.gch = "A JÁTÉKNAK VÉGE";
    this.oii = "NYEREMÉNY!";
    this.yya = "SOK SZERENCSÉT!";
    this.fyd = "NYEREMÉNY";
    this.qgl = "UTOLSÓ NYER.";
    this.jmr = "FELÍR";
    this.hmn = "FELÍR";
    this.pml = "SZORZÁS";
    this.niv = "AUTO|START";
    this.lfp = "FELEZÉS";
    this.hde = "KILÉPÉS";
    this.qts = "START";
    this.nla = "VÁLASSZON TÉTET";
    this.qnj = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.rlb = "Összes Nyeremény";
    this.aco = "Figyelmeztetés";
    this.zca = "ÖSSZES";
    this.sya = "KÉREM VÁRJON ...";
    this.frj = "Menü";
    this.nwu = "SEBESSÉG";
    this.xqs = "A meghibásodás érvénytelenít minden játékot és kifizetést.";
    this.zus = "T O V Á B B";
    this.edc = "AUTOSTART";
    this.ycx = "SÚGÓ";
    this.lwk = "SZORZÁS";
    this.left = "BAL";
    this.qjg = "JOBB";
    this.ok = "OK";
    this.cen = "MÉGSEM";
    this.xuy = "Szorzás";
    this.tue = "Felezés";
    this.amp = "JÁTÉKSZABÁLYOK";
    this.anw = "JÁTÉKSZABÁLYOK";
    this.hlh = "Bónusz!";
    this.zsc = "BÓNUSZ";
    this.kkm = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.tnt = "NINCS ELÉG HITEL";
    this.bhw = "V A L U E";
    this.zxf = "nyeremények";
    this.of = "/";
    this.kdq = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.uhk = "BETÖLTÉSE ...";
    this.inv = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.mpr = "Kommunikációs hiba";
    this.bmr = "Elérte az egyik limitet!";
    this.spa = "Elérte a szabad játékok maximum számát!";
    this.kec = "(A játék megállítva)";
    this.eki = "(Játék újraindul)";
    this.nut = "NYERT";
    this.error = "HIBA";
    this.qur = "FREEPLAY";
    this.mcn = "AUTO";
    this.mwx = "JÁTÉK ID";
    this.cbo = "Játék Idő";
    this.ptf = "utolsó";
    this.rsb = "játék";
    this.llh = "HITEL";
    this.audio = "HANG";
    this.hga = "ZENE";
    this.etp = "TELJES KÉPERNYŐ";
    this.eta = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.ujm = "Ne mutassa mégegyszer";
    this.ape = "A hangot nem lehet betölteni!";
    this.dqa = "Források hiányoznak!";
    this.nzm = "Játék hang nélkül?";
    this.rpt = "BEÁLLÍTÁS";
    this.qrx = "Kérjük fordítsa el a készüléket!";
    this.omm = "INFÓ";
    this.ihw = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.fhn = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.kgd = "Kérjük használja a(z)";
    this.iqk = " legújabb verzióját!";
    this.hwb = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.vbe = "Ez a játék nem indítható FreePlay módban!";
    this.ztr = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.gcr = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.jdz = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.swq = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.alz = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.otg = "Statisztika";
    this.oei = "Összes Játék";
    this.uze = "Összes Tét";
    this.igz = "Összes Nyeremény";
    this.via = "Reality Check";
    this.pfd = "Összes Játék Idő";
    this.dlv = "Elolvastam az üzenetet.";
    this.lgx = "KILÉPÉS";
    this.exe = "Játék Történet";
    this.wuo = "Nincsenek játékok.";
    this.jsn = "STÁTUSZ";
    this.dqp = "Fő Játék";
    this.gsr = "Autom. Felírás";
    this.qte = "Felírva";
    this.hmf = "Bónusz játék";
    this.rog = "Respin";
    this.gpf = "Bónusz";
    this.zfh = "Első Leosztás";
    this.qgd = "Második Leosztás";
    this.kgl = "Harmadik Leosztás";
    this.ega = "AUTOSTART BEÁLLÍTÁS";
    this.erz = "Játékok száma:";
    this.mir = "Stop autostart";
    this.oft = "A hitel kevesebb, mint:";
    this.qzs = "A hitel több, mint:";
    this.anr = "A nyeremény több, mint:";
    this.nps = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.yvt = "Megosztás a Facebook-on";
    this.bbb = "For more information, see the game rules."
}
ybq.prototype = new kct;

function xsb() {
    this.oxi = "MIZA MINIMĂ ESTE";
    this.itb = "MIZA MAXIMĂ";
    this.mmw = "MIZA MIN.";
    this.uhi = "MIZA MAX.";
    this.wnr = "MIZĂ";
    this.start = "START";
    this.uvl = "AJUTOR";
    this.itl = "LISTA|CÂŞTIGURI";
    this.lmc = "MENIU";
    this.kue = "MENIUL|JOCULUI";
    this.myy = "STOP";
    this.dgg = "CREDIT";
    this.gch = "SFÂRŞIT JOCUL";
    this.oii = "CÂŞTIGĂTOR!";
    this.yya = "MULT NOROC!";
    this.fyd = "CÂŞTIG";
    this.qgl = "ULTIMUL CÂŞTIG";
    this.jmr = "COLECTA";
    this.hmn = "COLECTA";
    this.pml = "JOC";
    this.niv = "AUTO|START";
    this.lfp = "COLECTARE|1/2";
    this.hde = "IEŞIRE";
    this.qts = "APĂSAŢI START";
    this.nla = "ALEGEŢI MIZA";
    this.qnj = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.rlb = "Câştig total";
    this.aco = "Avertizare";
    this.zca = "TOTAL";
    this.sya = "AŞTEPTAŢI VĂ ROG ...";
    this.frj = "Meniul Jocului";
    this.nwu = "VITEZĂ";
    this.xqs = "Fără garanţie la defectarea aparatului.";
    this.zus = "C O N T I N U A R E";
    this.edc = "AUTOSTART";
    this.ycx = "LISTA CÂŞTIGURI";
    this.lwk = "JOC";
    this.left = "STÂNGA";
    this.qjg = "DREAPTA";
    this.ok = "OK";
    this.cen = "ÎNTRERUPERE";
    this.xuy = "Joc";
    this.tue = "Colectare 1/2";
    this.amp = "REGULILE JOCULUI";
    this.anw = "REGULILE|JOCULUI";
    this.hlh = "Bonus!";
    this.zsc = "BONUS";
    this.kkm = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.tnt = "CREDIT INSUFICIENT.";
    this.zxf = "câştigă";
    this.bhw = "V A L U E";
    this.of = "DIN";
    this.kdq = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.uhk = "ÎNCARCĂ ...";
    this.inv = "ÎNCARCĂ ISTORIC ...";
    this.mpr = "Eroare de comunicare";
    this.bmr = "Aţi atins una dintre limite!";
    this.spa = "Aţi atins numărul maxim de jocuri gratis!";
    this.kec = "(Jocul se încheie)";
    this.eki = "(Jocul se restartează)";
    this.nut = "CÂŞTIGAT";
    this.error = "EROARE";
    this.qur = "FREEPLAY";
    this.mcn = "AUTO";
    this.mwx = "ID JOC";
    this.cbo = "TIMP DE JOC";
    this.ptf = "ultimele";
    this.rsb = "jocuri";
    this.llh = "CREDIT";
    this.audio = "AUDIO";
    this.hga = "MUZICĂ";
    this.etp = "ECRAN COMPLET";
    this.eta = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.ujm = "Nu reafișați";
    this.ape = "Sunetele nu pot fi încărcate!";
    this.dqa = "Lipsesc resurse!";
    this.nzm = "Jucaţi fără sunet?";
    this.rpt = "SETĂRI";
    this.qrx = "Vă rugăm opriţi aparatul!";
    this.omm = "INFO";
    this.ihw = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.fhn = "Acest joc este optimizat pentru Google Chrome.";
    this.bpz = "Vă rugăm utilizaţi versiunea actuală";
    this.hwb = "Din păcate acest browser nu este sprijinit complet.";
    this.vbe = "Acest joc nu poate fi pornit în modul freeplay!";
    this.ztr = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.gcr = "Ajustează interfaţa de joc nevoilor dvs!";
    this.jdz = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.swq = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.alz = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.otg = "Statistică";
    this.oei = "Număr jocuri";
    this.uze = "Pariuri totale";
    this.igz = "Câştig total";
    this.via = "Reality Check";
    this.pfd = "Timp total de joc";
    this.dlv = "Am citit mesajul.";
    this.lgx = "ÎNCHEIERE|JOC";
    this.exe = "ISTORIC";
    this.wuo = "Nu există jocuri.";
    this.jsn = "STATUT";
    this.dqp = "Joc principal";
    this.gsr = "Auto colectare";
    this.qte = "Colectat";
    this.hmf = "Bonusspins";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "Primul Deal";
    this.qgd = "Al doilea deal";
    this.kgl = "Al treilea deal";
    this.ega = "SETĂRI AUTOSTART";
    this.erz = "Numărul jocurilor:";
    this.mir = "Oprire autostart";
    this.oft = "Credit sub:";
    this.qzs = "Credit peste:";
    this.anr = "Câștig peste:";
    this.nps = "Autostart se va opti la începerea bonusului.";
    this.yvt = "Distribuie Facebook";
    this.bbb = "For more information, see the game rules."
}
xsb.prototype = new kct;

function rcw() {
    this.oxi = "MÍNIMA APOSTA É";
    this.itb = "MÁX. APOSTA";
    this.mmw = "MÍN. APOSTA";
    this.uhi = "MÁX. APOSTA";
    this.wnr = "APOSTA";
    this.start = "PARTIDA";
    this.uvl = "AJUDA";
    this.itl = "ESQUEMA|DE PAGOS";
    this.lmc = "MENU";
    this.kue = "SELEÇÃO|DE JOGOS";
    this.myy = "PARADA";
    this.dgg = "CRÉDITO";
    this.gch = "FIM DO JOGO";
    this.oii = "VENCEDOR!";
    this.yya = "BOA SORTE!";
    this.fyd = "GANHO";
    this.qgl = "ULTIMO GANHO";
    this.jmr = "COLETAR";
    this.hmn = "COLETAR";
    this.pml = "JOGADA";
    this.niv = "AUTO|PARTIDA";
    this.lfp = "METADE";
    this.hde = "SAÍDA";
    this.qts = "PREMIR PARTIDA";
    this.nla = "SELECIONAR APOSTA";
    this.qnj = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.rlb = "Ganho total";
    this.aco = "Aviso";
    this.zca = "TOTAL";
    this.sya = "AGUARDE POR FAVOR ...";
    this.frj = "Seleção de jogos";
    this.nwu = "VELOCIDADE";
    this.xqs = "Não se assume responsabilidade por avarias na máquina.";
    this.zus = "C O N T I N U A R";
    this.edc = "AUTOPARTIDA";
    this.ycx = "ESQUEMA DE PAGOS";
    this.lwk = "JOGADA";
    this.left = "ESQUERDA";
    this.qjg = "DIREITA";
    this.ok = "OK";
    this.cen = "CANCELAR";
    this.xuy = "Jogada";
    this.tue = "Metade";
    this.amp = "REGRAS DO JOGO";
    this.anw = "REGRAS|DO JOGO";
    this.hlh = "Bonus!";
    this.zsc = "BONUS";
    this.kkm = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.tnt = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.zxf = "ganha";
    this.bhw = "V A L U E";
    this.of = "DE";
    this.kdq = "TOCAR NA TELA PARA CONTINUAR";
    this.uhk = "CARREGANDO ...";
    this.inv = "CARREGANDO HISTÓRICO ...";
    this.mpr = "Erro de comunicação";
    this.bmr = "Alcançou um dos limities!";
    this.spa = "Alcançou a quantidade máxima de jogos livres!";
    this.kec = "(O jogo será encerrado)";
    this.eki = "(O jogo será reiniciado)";
    this.nut = "GANHOU";
    this.error = "ERRO";
    this.qur = "FREEPLAY";
    this.mcn = "AUTO";
    this.mwx = "GAME ID";
    this.cbo = "Playing Time";
    this.ptf = "last";
    this.rsb = "games";
    this.llh = "DEPOSIT";
    this.audio = "AUDIO";
    this.hga = "MUSIC";
    this.etp = "TELA CHEIA";
    this.eta = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.ujm = "Não exibir novamente";
    this.ape = "Sounds não podem ser carregados!";
    this.dqa = "Faltam recursos!";
    this.nzm = "Jogar sem som?";
    this.rpt = "AJUSTES";
    this.qrx = "Favor girar o seu aparelho!";
    this.omm = "INFORMAÇÃO";
    this.ihw = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.fhn = "Este jogo é otimizado por Google Chrome.";
    this.bpz = "Favor usar a versão atual de";
    this.hwb = "Infelizmente este browser não é completamente suportado.";
    this.vbe = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.ztr = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.gcr = "Adapte a interface do jogo às suas necessidades!";
    this.jdz = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.swq = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.alz = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.otg = "Estatísticas";
    this.oei = "Número de jogos";
    this.uze = "Aposta total";
    this.igz = "Ganho total";
    this.via = "Reality Check";
    this.pfd = "Tempo total do jogo";
    this.dlv = "Eu lí esta mensagem.";
    this.lgx = "ENCERRAR|JOGO";
    this.exe = "HISTÓRICO";
    this.wuo = "Ainda não existem jogos.";
    this.jsn = "ESTADO";
    this.dqp = "Jogo principal";
    this.gsr = "Coletado automaticamente";
    this.qte = "Coletado";
    this.hmf = "Bonusspins";
    this.rog = "Respin";
    this.gpf = "Bonus";
    this.zfh = "Primeiro Deal";
    this.qgd = "Segundo Deal";
    this.kgl = "Terceiro Deal";
    this.ega = "AJUSTES AUTOSTART";
    this.erz = "Número de jogos:";
    this.mir = "Parar autostart";
    this.oft = "Crédito menor do que:";
    this.qzs = "Crédito maior do que:";
    this.anr = "Ganho maior do que:";
    this.nps = "O autostart será parado no início do bonus.";
    this.yvt = "Participar no Facebook";
    this.bbb = "For more information, see the game rules."
}
rcw.prototype = new kct;

function xfu() {
    this.ild = "Finish placing your bets!";
    this.xnw = "Place your bets please!";
    this.sow = "No more bets!";
    this.kcm = "You win!";
    this.icp = "EXTRA|BALL";
    this.nqv = "CLEAR";
    this.omc = "QUICK|TIP";
    this.pob = "EXTRA BALL";
    this.eqn = "Bets accepted!";
    this.yvs = "Bets not accepted!";
    this.pyj = "Game in progress, please wait!";
    this.upv = "Select between 3 and 10 numbers. After pressing the start-button 20 numbers are drawn. Each matching number will be marked on the card. If you reach a certain amount of matches you have the possibility to buy 2 extraballs to increase your winnings.";
    this.bng = "See the above table when you are able to buy extraballs. You pay the same bet for the extraballs as you did for the game.";
    this.wta = "Select at least 3 Numbers!";
    this.zkk = "You can not select more numbers!";
    this.hzp = "Remove one number to further increase your bet!";
    this.qvz = "Hits";
    this.zho = "Numbers marked";
    this.krc = "Buy extra balls or take win"
}
xfu.prototype = new qft;

function dhg() {
    this.eqn = "Ставки признаны!";
    this.yvs = "Ставки не признаны!";
    this.pyj = "Игра в процессе, пожалуйста, подождите...";
    this.ild = "Игра сейчас начнется!";
    this.xnw = "Сделайте ставку, пожалуйста!";
    this.sow = "Ставок больше нет!";
    this.kcm = "Вы выиграли!";
    this.upv = "Выберите 3 номера или более, в соответствии со ставкой. После нажатия на клавишу 'Старт', выбираются 20 шариков. Каждый совпадающий номер отмечаются на карте. При достижении определенного количества совпадений Вы можете купить 2 дополнительных шарика и ваш выигрыш увеличится.";
    this.bng = "В верхней таблице Вы увидете, когда Вы сможете купить дополнительные шарики. Цена двух доп. шариков равна ставке на игру.";
    this.wta = "Выберите минимум 3 номера!";
    this.zkk = "Вы не можете выбирать больше номеров!";
    this.icp = "ЭКСТРО|ШАРИК";
    this.nqv = "УДАЛИТЬ";
    this.omc = "БЫСТРАЯ|СТАВКА";
    this.hzp = "Уберите номер, чтобы повышать ставку!";
    this.qvz = "Попадал";
    this.zho = "Отмеченные номера";
    this.pob = "ЭКСТРО ШАРИК";
    this.krc = "Купите дополнительные шарики или заберите выигрыш"
}
dhg.prototype = new usy;

function ftg() {
    this.eqn = "Aceptar apuestas!";
    this.yvs = "Apuestas rechazadas!";
    this.pyj = "El juego no ha concluido, por favor espere!";
    this.ild = "El juega va a comenzar!";
    this.xnw = "Haga juego!";
    this.sow = "No más apuestas!";
    this.kcm = "Ha ganado!";
    this.upv = "Eliga entre 3 ó mas números dependiendo de la apuesta. Después de pulsar el botón de arranque, salen 20 bolas. Todos los números coincidentes se marcan en el cartón. Después de conseguir cierta cantidad de números acertados, tiene la posibilidad de comprar 2 bolas extra para aumentar el premio otra vez.";
    this.bng = "En el cuadro arriba representado pueden ver cuándo se puede comprar pelotas extra. El precio para las dos pelotas extra corresponde a la apuesta del juego.";
    this.wta = "Tienes que elegir 3 números por lo menos!";
    this.zkk = "¡No se puede elegir más números!";
    this.icp = "BOLA|EXTRA";
    this.nqv = "ANULAR";
    this.omc = "PRONÓSTICO|RÁPIDO";
    this.hzp = "Quite un pronóstico para aumentar la apuesta otra vez!";
    this.qvz = "Exitazo";
    this.zho = "Números marcados";
    this.pob = "BOLA EXTRA";
    this.krc = "Comprar bolas extra o cobrar el premio"
}
ftg.prototype = new cud;

function vvt() {
    this.eqn = "Einsätze akzeptiert!";
    this.yvs = "Einsätze nicht akzeptiert!";
    this.pyj = "Spiel läuft, bitte warten!";
    this.ild = "Das Spiel beginnt gleich!";
    this.xnw = "Ihre Einsätze bitte!";
    this.sow = "Keine weiteren Einsätze!";
    this.kcm = "Sie haben gewonnen!";
    this.upv = "Wählen Sie 3 oder dem Einsatz entsprechend mehrere Nummern. Nach dem Drücken der Start-Taste werden 20 Zahlen gezogen. Jede übereinstimmende Zahl wird auf der Karte markiert. Bei Erreichen einer bestimmten Anzahl von Treffern haben Sie die Möglichkeit 2 Extrabälle zu kaufen um den Gewinn weiter zu erhöhen.";
    this.bng = "Auf der oben dargestellten Tabelle sehen Sie, wann Extrabälle gekauft werden können. Der Preis für die beiden Extrabälle entspricht dem Spieleinsatz.";
    this.wta = "Es müssen mindestens 3 Zahlen ausgewählt werden!";
    this.zkk = "Es können nicht mehr Zahlen ausgewählt werden!";
    this.icp = "EXTRA|BALL";
    this.nqv = "LÖSCHEN";
    this.omc = "QUICK|TIP";
    this.hzp = "Entfernen Sie einen Tip um den Einsatz weiter zu erhöhen!";
    this.qvz = "Treffer";
    this.zho = "Markierte Zahlen";
    this.pob = "EXTRA BALL";
    this.krc = "Extrabälle kaufen oder Gewinn nehmen"
}
vvt.prototype = new vtv;

function mfz() {
    this.eqn = "Bahisler kabul edildi!";
    this.yvs = "Bahisler kabul edilmedi!";
    this.pyj = "Oyun oynanmakta, lütfen bekleyin!";
    this.ild = "Oyun başlamak üzere!";
    this.xnw = "Bankolarınız lütfen!";
    this.sow = "Daha fazla banko mümkün değil!";
    this.kcm = "Kazandiniz!";
    this.upv = "3 veya bankonuza uygun daha fazla numara seçiniz. Start tuşuna bastıktan sonra 20 tane sayı çekilecektir. Bir birine uyan sayılar kartın üstünde işaret edilecektir. Berirli bir uygunluk miktarı tutturulduğunda, 2 tane ekstra top satın alarak kazancınızı daha fazla yükseltme şansınız oluyor.";
    this.bng = "Üstteki tabloda ekstra topların ne zaman satın alınabileceğini görüyorsunuz. İki ekstra topun fiyatı oyuna yatırılan banko kadardır";
    this.wta = "En az 3 tane sayı seçilmeli!";
    this.zkk = "Daha fazla sayı seçilemez!";
    this.icp = "EKSTRA|TOP";
    this.nqv = "SILMEK";
    this.omc = "HIZLI|IPUCU";
    this.hzp = "Bankoyu daha fazla arttırmak için bir tahmin kaldırın!";
    this.qvz = "İsabet";
    this.zho = "İşaretli sayılar";
    this.pob = "EKSTRA TOP";
    this.krc = "Ekstra toplar satın alınız veya Kazançı alınız"
}
mfz.prototype = new erm;

function tsj() {
    this.eqn = "Sázky byly akceptovány!";
    this.yvs = "Sázky nebyly akceptovány!";
    this.pyj = "Hra probíhá, počkejte prosím!";
    this.ild = "Hra Se Hned Spustí!";
    this.xnw = "Vaše sázky prosím!";
    this.sow = "Žádné další sázky.";
    this.kcm = "Vyhrali jste!";
    this.upv = "Vyberte 3 až 10 čísel. Po stisknutí tlačítka Start bude taženo 20 čísel. Každé shodné číslo bude označeno na kartě. Jestliže dosáhnete určitý počet shodných čísel, máte možnost koupit si 2 extra míčky a zvýšit tak svou výhru.";
    this.bng = "Nahoře uvedená tabulka obsahuje informace, kdy si můžete zakoupit extra míčky. Za extra míčky zaplatíte stejnou sázku, jako za celou hru.";
    this.wta = "Vyberte nejméně 3 čísla!";
    this.zkk = "Nemůžete vybrat více než 10 čísel!";
    this.icp = "EXTRA|MÍCEK";
    this.nqv = "SMAZAT";
    this.omc = "QUICK|TIP";
    this.hzp = "Uberte číslo,aby bylo možno zvýšit sázku!";
    this.qvz = "Trefa";
    this.zho = "Označená čísla";
    this.pob = "EXTRA MÍCEK";
    this.krc = "Koupit extra míčky nebo vybrat výhru"
}
tsj.prototype = new hxg;

function sgz() {
    this.eqn = "Panused aktsepteeritud!";
    this.yvs = "Panuseid ei aktsepteeritud!";
    this.pyj = "Mäng algab| palun oodake...";
    this.ild = "Lõpeta panuste tegemine!";
    this.xnw = "Asetage palun panused!";
    this.sow = "Panuste tegemine lõppenud";
    this.kcm = "Sa võitsid!";
    this.upv = "Vali ,sõltuvalt panusest, 3 või enam numbrit. Pärast start-nupu vajutamist tõmmatakse 20 kaarti. Kõik sobivad numbrid märgitakse kaardile. Kui oled saanud teatud arvu sobivaid kaarte, tekib sul võimalus osta 2 ekstrapalli, et oma võiduvõimalusi suurendada.";
    this.bng = "Ülalasetsevast tabelist näed, millal saad osta ekstrapalle. Ekstrapallide eest maksad sama suure panuse kui mängu eest.";
    this.wta = "Vali vähemalt 3 numbrit!";
    this.zkk = "Üle 10 numbri ei saa valida!";
    this.icp = "EKSTRA|PALL";
    this.nqv = "TÜHISTA";
    this.omc = "KIIRE|VIHJE";
    this.hzp = "Panuse suurendamiseks eemalda üks number!";
    this.qvz = "Löögid";
    this.zho = "Märgistatud numbrid";
    this.pob = "EKSTRA PALL";
    this.krc = "Osta ekstrapalle või võta võit"
}
sgz.prototype = new ihh;

function sro() {
    this.eqn = "Γίνονται αποδεκτά πονταρίσματα!";
    this.yvs = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.pyj = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.ild = "Το παιχνίδι ξεκινά σε λίγο!";
    this.xnw = "Το ποντάρισμα σας, παρακαλώ!";
    this.sow = "Ποντάρισμα τέλος!";
    this.kcm = "ΣΥΓΧΑΡΗΤHΡΙΑ, ΚΕΡΔIΣΑΤΕ!";
    this.upv = "Επιλέξτε 3 ή ανάλογα με την συμμετοχή περισσότερους αριθμούς. Αφού πατήσετε το πλήκτρο Start κληρώνονται 20 αριθμοί. Κάθε αριθμός που συμφωνεί με το δικό σας σημειώνεται στην κάρτα. Αν καταφέρετε ένα συγκεκριμένο αριθμό επιτυχιών, τότε έχετε τη δυνατότητα να αγοράσετε δύο επιπλέον μπάλες για να αυξήσετε περισσότερο το κέρδος.";
    this.bng = "Στον πάνω πίνακα μπορείτε να δείτε, πότε μπορούν ν΄αγορασθούν εξτρά μπάλλες. Η τιμή για τις δύο εξτρά μπάλλες ανταποκρίνεται στο στοίχημα.";
    this.wta = "Πρέπει να επιλεχθούν τουλάχιστον 3 αριθμοί!";
    this.zkk = "Δεν μπορούν να επιλεχθούν περισσότεροι αριθμοί!";
    this.icp = "ΕΞΤΡΑ|ΜΠΑΛΛΑ";
    this.nqv = "ΔΙΑΓΡΑΦH";
    this.omc = "QUICK|TIP";
    this.hzp = "Αφαιρέστε έναν αριθμό για να συνεχίσετε ν΄αυξάνετε το στοίχημά σας!";
    this.qvz = "Επιτυχίες";
    this.zho = "Μαρκαρισμένοι αριθμοί";
    this.pob = "ΕΞΤΡΑ ΜΠΑΛΛΑ";
    this.krc = "Αγοράστε εξτρά μπάλλες ή Πάρτε το κέρδος"
}
sro.prototype = new lmg;

function uqh() {
    this.eqn = "Залозите са приети!";
    this.yvs = "Залозите не са приети!";
    this.pyj = "Затворено за залози!";
    this.ild = "Приключете със залозите!";
    this.xnw = "Поставете своите залози!";
    this.sow = "Край на залозите!";
    this.kcm = "Печелиш!";
    this.upv = "Изберете 3 числа или повече в зависимост от залога. След натискане на старт бутона 20 числа ще се изтеглят. Всяко съвпадение ще се маркира върху талона. Ако достигнете определен брой съвпадения, вие имате възможност да купите 2 допълнителни топки, които биха увеличили шансовете за печалба.";
    this.bng = "Погледнете таблицата когато имате възможността да купите дпъл. топки. Допълнителните топки се заплащат със стойността на залога от играта.";
    this.wta = "Изберете поне 3 числа!";
    this.zkk = "Вие не можете да изберете повече числа!";
    this.icp = "ДОПЪЛ.|ТОПКА";
    this.nqv = "ИЗЧИСТВАНЕ";
    this.omc = "БЪРЗ|СЪВЕТ";
    this.hzp = "Откажете се от едно число, за да може да увеличите залога си!";
    this.qvz = "Попадения";
    this.zho = "Маркирани числа";
    this.pob = "ДОПЪЛ. ТОПКА";
    this.krc = "Купува допълнителни топки или прибира печалбата"
}
uqh.prototype = new ycc;

function hod() {
    this.ild = "დაასრულე ფსონის დადება!";
    this.xnw = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.sow = "ფსონები აღარ მიიღება!";
    this.kcm = "თქვენ გაიმარჯვეთ!";
    this.nqv = "გასუფთავება";
    this.icp = "დამატებითი|ბურთი";
    this.omc = "მოკლე|რჩევა";
    this.pob = "დამატებითი ბურთი";
    this.eqn = "ფსონები მიღებულ იქნა!";
    this.yvs = "ფსონები არ იქნა მიღებული!";
    this.pyj = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.upv = "აირჩიეთ 3-სა და 10 ნომრებს შორის. დაწყების ღილაკზე დაჭერის შემდეგ გამოვა 20 ნომერი. თითოეული ნომერი რომელიც დაემთხვევა იქნება აღნიშნული კარტზე. თუ თქვენ მიაღწიეთ დამთხვევათა გარკვეულ რაოდენობას თქვენ გექნებათ შესაძლებლობა შეიძინოთ 2 დამატებითი ბურთი რომ გაზარდოთ მოგება.";
    this.bng = "იხილეთ ზემოთ მოცემული მაგიდა როდესაც შეძლებთ შეიძინოთ დამატებითი ბურთები. თქვენ იხდით იგივე ოდენობის ფსონს დამატებითი ბურთებისათვის რამდენიც თამაშისთვის გადაიხადეთ.";
    this.wta = "აირჩიეთ მინიმუმ 3 ნომერი!";
    this.zkk = "თქვენ არ შეგიძლიათ აირჩიოთ მეტი ნომერი!";
    this.hzp = "მოიშორეთ ერთი რიცხვი რომ კიდევ უფრო გაზარდოთ თქვენი ფსონი!";
    this.qvz = "სწორი თამაშები";
    this.zho = "მონიშნული ნომრები";
    this.krc = "იყიდეთ დამატებითი ბურთები ან აიღეთ მოგება"
}
hod.prototype = new cqv;

function yhf() {
    this.ild = "Tétek lezárva!";
    this.xnw = "Kérem tegyék meg tétjeiket!";
    this.sow = "A játék elkezdődött, kérem várjon!";
    this.kcm = "Ön nyert!";
    this.icp = "EXTRA|GOLYÓ";
    this.nqv = "TÖRLÉS";
    this.omc = "GYORS|SÚGÓ";
    this.pob = "EXTRA GOLYÓ";
    this.eqn = "Tétek elfogadva!";
    this.yvs = "Nem lehet tétet rakni!";
    this.pyj = "Játék folyamatban, kérem várjon!";
    this.upv = "Jelöljön meg 3 vagy több számot, maximum 10-et. A Start gomb megnyomása után a játék kisorsol 20 számot. Az egyező számok megjelölésre kerülnek. Egy bizonyos számú egyezés után lehetősége van vásárolni 2 extra golyót, mellyel növelheti a nyereményét.";
    this.bng = "A fenti táblázatban látható, hogy mikor vásárolhat extra golyót. A két extra golyó ára az éppen játszott tétnek megfelelő összeg.";
    this.wta = "Legalább 3 számot ki kell választani!";
    this.zkk = "Nem lehet kiválasztani több számot!";
    this.hzp = "A tét növelése érdekében csökkentse a kiválasztott számokat!";
    this.qvz = "Találatok";
    this.zho = "Megjelölt számok";
    this.krc = "Vásároljon extra golyót vagy írja fel a nyereményt"
}
yhf.prototype = new ybq;

function qsr() {
    this.ild = "Jocul începe imediat!";
    this.xnw = "Rugăm mizele dv.!";
    this.sow = "Nu alte mize!";
    this.kcm = "Aţi câştigat!";
    this.icp = "EXTRA|MINGE";
    this.nqv = "ŞTERGERE";
    this.omc = "QUICK|TIP";
    this.pob = "EXTRA MINGE";
    this.eqn = "Pariuri acceptate!";
    this.yvs = "Pariuri neacceptate!";
    this.pyj = "Joc în derulare, vă rugăm așteptați!";
    this.upv = "Selectaţi între 3 şi 10 numere. După apăsarea butonului de start sunt trase 20 numere. Se va marca fiecare număr care se potriveşte pe carte. Dacă ajungeți la un anumit număr de reușite aveți posibilitatea să cumpărați 2 extra mingi pentru a vă crește câștigurile.";
    this.bng = "Vezi pe tabelul de mai sus când puteți cumpăra extra mingi. Prețul pentru ambele extra mingi corespunde mizei de joc.";
    this.wta = "Selectați cel puțin 3 numere!";
    this.zkk = "Nu puteți selecta mai multe numere!";
    this.hzp = "Ștergeți un număr pentru a crește mai departe pariul!";
    this.qvz = "Hits";
    this.zho = "Numere marcate";
    this.krc = "Cumpără extra mingi sau preia câștigul"
}
qsr.prototype = new xsb;

function csy() {
    this.ild = "O jogo começa em breve!";
    this.xnw = "Suas apostas por favor!";
    this.sow = "Nenhuma aposta mais!";
    this.kcm = "Ganhou!";
    this.icp = "BOLA|EXTRA";
    this.nqv = "APAGAR";
    this.omc = "JOGO|RÁPIDO";
    this.pob = "BOLA EXTRA";
    this.eqn = "Apostas aceitas!";
    this.yvs = "Apostas não aceitas!";
    this.pyj = "Jogo em andamento, aguarde por favor!";
    this.upv = "Selecionar entre 3 e 10 números. Após pressionar a tecla Start são puxados 20 números. Cada número que coincidir é marcada na carta. Ao ser alcançado um determinado número de acertos terá a possibilidade de comprar 2 bolas extras para aumentar os seus ganhos.";
    this.bng = "Na tabela acima poderá ver quando estão disponíveis bolas extras. O preço para as duas bolas extras corresponde à quantia da aposta.";
    this.wta = "Devem ser selecionados no mínimo 3 números!";
    this.zkk = "Não podem ser selecionados mais números!";
    this.hzp = "Remova um número para aumentar a sua aposta!";
    this.qvz = "Acertos";
    this.zho = "Números marcados";
    this.krc = "Comprar bolas extras ou pegar o que ganhou"
}
csy.prototype = new rcw;

function qkb() {
    this.ehy = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.zbt = {
        backgroundColor: "rgb(0,0,0)",
        jvx: "rgba(0,0,0,0.3)"
    };
    this.hdv = {
        font: "arial",
        oav: "bold",
        backgroundColor: "black",
        dyb: "rgb(0,100,10)",
        hlc: "rgb(80,255,100)",
        lpj: "rgb(120,120,120)",
        zec: "red",
        hxy: "white",
        csa: null
    };
    this.qwn = {
        font: "arial",
        oav: "bold",
        backgroundColor: "rgb(0,0,0)",
        bqc: null,
        mcm: "rgb(255,255,255)",
        ntj: "rgb(30,30,30)",
        wrh: "rgb(80,80,80)"
    };
    this.mps = {
        font: "arial",
        oav: "bold",
        backgroundColor: "black",
        ths: "rgb(50,50,50)",
        agy: "rgb(255,255,255)",
        mcm: "white",
        otf: 0.8,
        yiz: {
            ggy: {
                font: "sanf-serif",
                oav: "",
                textAlign: "center",
                otl: "round",
                backgroundColor: "black",
                mcm: "white",
                wrh: null,
                ntj: null,
                tmj: 1
            }
        }
    };
    this.exe = {
        font: "arial",
        oav: "bold",
        backgroundColor: "rgb(20,20,30)",
        wrh: "rgb(0,0,0)",
        etq: "rgba(255,255,255,0.2)",
        mcm: "rgb(255,255,255)",
        ddv: "rgba(0,0,0,0.3)",
        display: {
            yte: "arial",
            jqk: "arial",
            oav: "bold",
            mcm: "rgb(255,255,255)",
            fud: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            wrh: "rgba(255,255,255,0.5)"
        },
        ggy: {
            font: "arial",
            oav: "bold",
            mcm: "rgb(0,0,0)",
            zyf: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            bqc: "rgba(255,255,255,1)",
            ppg: "rgba(255,255,255,0.8)",
            rtb: "rgba(255,255,255,1)",
            wrh: "rgba(200,200,200,0.5)",
            otl: "rect",
            xkx: -1
        }
    };
    this.otg = {
        font: "arial",
        oav: "bold",
        xrj: "rgb(0,0,200)",
        jqo: "rgb(255,255,255)",
        cdn: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        eng: "rgb(180,220,255)",
        bmp: "rgb(10,20,25)",
        wae: "rgb(130,220,255)",
        tfu: "rgb(130,190,255)",
        mcm: "rgb(255,255,255)",
        fzx: "rgb(130,190,255)",
        mcw: "rgb(100,160,255)",
        isi: "rgb(255,255,255)",
        ggy: {
            otl: "rect",
            font: "arial",
            oav: "bold",
            mcm: "rgb(255,255,255)",
            nst: null,
            backgroundColor: "rgb(90,160,255)",
            jna: "rgb(90,160,255)",
            wrh: "rgb(60,120,200)",
            ntj: "rgb(40,80,140)"
        },
        gfv: {
            otl: "round",
            font: "arial",
            oav: "bold",
            mcm: "rgb(255,255,255)",
            nst: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            jna: "rgba(150,150,255,0.5)",
            wrh: "rgb(90,170,255)",
            ntj: "rgb(40,80,140)"
        }
    };
    this.avq = {
        font: "arial",
        oav: "bold",
        backgroundColor: "rgb(30,30,30)",
        bqc: "rgb(0,0,0)",
        wrh: "rgb(50,50,50)",
        fud: "rgb(0,255,255)",
        mcm: "rgb(240,240,240)",
        vpt: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)"],
        ggy: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(60,60,60)",
            bqc: "rgb(40,40,40)",
            ppg: "rgb(20,20,20)",
            rtb: "rgb(0,0,0)",
            wrh: "rgb(80,80,80)",
            mcm: "rgb(240,240,240)",
            zyf: "rgb(140,140,140)",
            otl: "rect",
            xkx: -1
        }
    };
    this.ugp = {
        type: "left",
        font: "arial",
        oav: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        bqc: null,
        wrh: "rgb(0,0,0)",
        ntj: "rgb(180,180,180)",
        eng: "rgba(0,0,0,0.6)",
        txi: null,
        fud: "rgb(255,200,0)",
        mcm: "white",
        swo: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(100,100,100)",
            bqc: "rgb(100,100,100)",
            ppg: null,
            rtb: null,
            wrh: "rgb(100,100,100)",
            mcm: "rgb(255,255,255)",
            zyf: "rgb(255,200,0)",
            otl: "triangle",
            xkx: 1
        },
        acg: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(100,100,100)",
            bqc: "rgb(100,100,100)",
            ppg: null,
            rtb: null,
            wrh: "rgb(100,100,100)",
            mcm: "rgb(255,255,255)",
            zyf: "rgb(255,200,0)",
            otl: "triangle",
            xkx: 0
        },
        bpi: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(100,100,100)",
            bqc: "rgb(15,15,15)",
            ppg: "rgb(100,100,100)",
            rtb: "rgb(15,15,15)",
            wrh: "rgb(150,150,150)",
            mcm: "rgb(255,255,255)",
            zyf: "rgb(255,200,0)",
            otl: "rect",
            xkx: -1
        },
        display: {
            jqk: "sans-serif",
            yte: "sans-serif",
            oav: "bold",
            fud: null,
            mcm: "yellow",
            wrh: "rgb(100,100,100)",
            ntj: null,
            backgroundColor: "black"
        },
        oga: {
            font: "arial",
            oav: "bold",
            backgroundColor: null,
            bqc: null,
            mcm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.mkb = {
        font: "arial",
        oav: "bold",
        backgroundColor: "rgb(180,180,180)",
        bqc: "rgb(120,120,120)",
        wrh: "rgb(80,80,80)",
        ntj: "rgb(30,30,30)",
        mcm: "white",
        vbh: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            bqc: null,
            ppg: "rgba(100,100,100,0.5)",
            rtb: null,
            wrh: null,
            mcm: "white",
            otl: "rect",
            xkx: -1
        },
        swo: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(255,255,255)",
            bqc: "rgb(255,255,255)",
            ppg: null,
            rtb: null,
            wrh: "rgb(255,255,255)",
            mcm: "rgb(0,0,0)",
            zyf: "rgb(0,0,0)",
            otl: "triangle",
            xkx: 1
        },
        acg: {
            font: "arial",
            oav: "bold",
            backgroundColor: "rgb(255,255,255)",
            bqc: "rgb(255,255,255)",
            ppg: null,
            rtb: null,
            wrh: "rgb(255,255,255)",
            mcm: "rgb(0,0,0)",
            zyf: "rgb(0,0,0)",
            otl: "triangle",
            xkx: 0
        },
        fgv: {
            otl: "rect",
            font: "arial",
            oav: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            mcm: "white",
            tmj: 1,
            wrh: "rgb(255,255,255)",
            ntj: "rgb(220,220,220)"
        },
        display: {
            jqk: "sans-serif",
            yte: "sans-serif",
            oav: "bold",
            fud: null,
            mcm: "white",
            wrh: "white",
            ntj: null,
            backgroundColor: "rgb(0,0,0)"
        },
        oga: {
            font: "arial",
            oav: "bold",
            backgroundColor: null,
            bqc: null,
            mcm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.ykv = {
        rdg: [{
            jqk: "sans-serif",
            nkw: "sans-serif",
            oav: "bold",
            fud: "rgb(236,225,207)",
            bzv: "rgb(214,170,102)",
            nst: "rgb(245,220,148)",
            moq: "rgb(190,137,40)",
            jyb: "rgba(150,120,30,0.3)",
            wrh: "rgb(150,110,30)",
            ntj: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            bqc: "rgb(0,0,0)",
            mck: "rgb(0,0,0)"
        }, {
            jqk: "sans-serif",
            nkw: "sans-serif",
            oav: "bold",
            fud: "rgb(230,230,230)",
            bzv: "rgb(190,190,190)",
            nst: "rgb(240,240,240)",
            moq: "rgb(160,160,160)",
            jyb: "rgba(120,120,120,0.3)",
            wrh: "rgb(120,120,120)",
            ntj: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            bqc: "rgb(0,0,0)",
            mck: "rgb(0,0,0)"
        }],
        sda: {
            jqk: "sans-serif",
            nkw: "sans-serif",
            oav: "bold",
            fud: "rgb(236,225,207)",
            bzv: "rgb(214,170,102)",
            nst: "rgb(245,220,148)",
            moq: "rgb(190,137,40)",
            jyb: null,
            wrh: null,
            ntj: null,
            backgroundColor: null,
            bqc: null,
            mck: null
        }
    };
    this.rpz = {
        hcf: "rgb(240,240,240)",
        wzs: "rgb(255,255,255)",
        wrh: "rgb(200,200,200)",
        ddv: "rgba(0,80,150,0.6)",
        display: {
            yte: "arial",
            jqk: "arial",
            oav: "bold",
            mcm: "rgb(0,80,151)",
            fud: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            wrh: "rgb(200,200,200)"
        }
    }
}

function bza() {
    this.zbt.abg = "rgb(2,90,190)";
    this.mps.yiz.ggy.backgroundColor = "rgb(0,50,150)";
    this.kqq = {
        backgroundColor: "rgb(0,32,115)",
        wrh: "rgb(98,162,234)",
        mcm: "rgb(38,58,109)",
        font: "sans-serif",
        oav: "bold"
    };
    this.vqz = {
        backgroundColor: "rgb(0,32,115)",
        wrh: "rgb(255,244,0)",
        szt: "black",
        emu: "white",
        hzu: "rgb(255,244,0)",
        mcm: "rgb(38,58,109)",
        font: "sans-serif",
        oav: "bold"
    };
    this.zck = {
        ixf: {
            otl: "rect",
            font: "verdana",
            oav: "bold",
            backgroundColor: "rgb(0,50,150)",
            jna: "rgb(50,112,204)",
            mcm: "white",
            nst: "rgb(255,255,0)",
            wrh: "rgb(0,70,210)",
            ntj: "rgb(0,30,90)"
        },
        omm: {
            backgroundColor: "rgb(0,32,115)",
            wrh: "rgb(98,162,234)",
            mcm: "rgb(200,255,255)",
            font: "sans-serif",
            oav: "bold"
        }
    };
    this.vrn = {
        backgroundColor: "rgb(0,32,115)",
        wrh: "rgb(98,162,234)",
        mcm: "white",
        yaz: "rgb(241,229,0)",
        zid: "rgb(0,0,0)",
        vkr: "rgb(0,0,0)",
        fud: "rgb(157,205,253)",
        font: "sans-serif",
        oav: "bold",
        display: {
            yte: "sans-serif",
            jqk: "sans-serif",
            oav: "bold",
            backgroundColor: "rgb(0,32,115)",
            mcm: "white",
            fud: "rgb(157,205,253)",
            wrh: "rgb(98,162,234)",
            ntj: null
        }
    };
    this.uvl = {
        backgroundColor: null,
        ggy: {
            otl: "rect",
            font: "verdana",
            oav: "bold",
            backgroundColor: "rgb(0,50,150)",
            jna: "rgb(50,112,204)",
            mcm: "white",
            nst: "rgb(255,255,0)",
            wrh: "rgb(0,70,210)",
            ntj: "rgb(0,30,90)"
        },
        itl: {
            font: "sans-serif",
            oav: "bold",
            backgroundColor: "rgb(0,32,115)",
            wrh: "rgb(98,162,234)",
            mcm: "white",
            ktw: "rgb(97,177,255)",
            qpk: "rgb(255,146,46)",
            okk: "rgb(255,222,0)",
            gry: "rgb(153,175,199)",
            icw: "rgb(1,29,112)",
            drs: "verdana",
            lvm: "bold italic",
            xmv: "white"
        },
    };
    this.noi = {
        backgroundColor: "rgb(0,32,115)",
        wrh: "rgb(98,162,234)",
        pxy: {
            mcm: "black",
            font: "sans-serif",
            oav: "bold"
        }
    }
}
bza.prototype = new qkb;

function ktt() {
    this.type = "800_600";
    this.jur = true;
    this.pyl = false;
    this.orb = false;
    this.qsm = true;
    this.dur = false;
    this.dme = false;
    this.zpk = false;
    this.hnx = false
}

function wys() {
    this.jur = false;
    this.canvas = {
        hnh: new hla(0, 0, 800, 620)
    };
    this.lor = {
        hnh: new hla(),
        xus: 0
    };
    this.zbt = {
        hnh: new hla(0, 20, 800, 600),
        ssz: 0
    };
    this.hdv = {
        zbt: {
            hnh: new hla(0, 0, 500, 360),
            tyy: new hla(0, 0, 500, 360),
            wtn: new hla(5, 325, 490, 30),
            xgo: new hla(50, 329, 400, 14),
            opv: new hla(50, 345, 400, 6),
            zwy: new hla(5, 285, 490, 70),
            xwr: 14,
            szw: 18,
            lrh: 5,
            vvx: 12,
            grq: 5,
            hnw: 2,
            lxu: 0,
            tca: {
                hnh: new hla(),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(),
                xgo: new hla(),
                zvz: new hla()
            }
        },
        kej: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(140, 105, 520, 390),
            wtn: new hla(),
            xgo: new hla(192, 295, 416, 21),
            opv: new hla(192, 320, 416, 3),
            zwy: new hla(140, 275, 520, 95),
            xwr: 18,
            szw: 24,
            lrh: 0,
            vvx: 12,
            grq: 7,
            hnw: 3,
            lxu: 9,
            tca: {
                hnh: new hla(400, 459, 0, 3),
                x: 33,
                tbj: 15,
                uit: 20
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        },
        iyh: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(0, 0, 800, 600),
            wtn: new hla(),
            xgo: new hla(250, 420, 300, 21),
            opv: new hla(),
            zwy: new hla(50, 410, 700, 80),
            xwr: 18,
            szw: 24,
            lrh: 0,
            vvx: 12,
            grq: 7,
            hnw: 0,
            lxu: 0,
            tca: {
                hnh: new hla(260, 119, 280, 280),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        }
    };
    this.qwn = {
        hnh: new hla(0, 0, 800, 20),
        xwr: 12,
        ucj: 19,
        poc: 15,
        lmt: 120,
        vvx: 2,
        grq: 2,
        zwb: 2,
        lnc: 40
    };
    this.mps = {
        hnh: new hla(0, 20, 800, 70),
        xwr: 10,
        dia: 10,
        ugy: 20,
        arw: 40,
        ssz: 4,
        vvx: 10,
        grq: 5,
        lrh: 10,
        ixf: {
            xwr: 17,
            lrh: 2
        }
    };
    this.otg = {
        hnh: new hla(0, 20, 800, 600),
        yry: new hla(),
        ixf: {
            ufc: 20,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 8,
            fev: 8,
            ssz: 0
        },
        owf: new hla(0, 20, 800, 40),
        gpl: new hla(0, 100, 800, 40),
        gyu: new hla(0, 140, 800, 40),
        mov: new hla(0, 180, 800, 40),
        tla: new hla(225, 275, 350, 100),
        ioj: new hla(200, 480, 400, 40),
        owi: {
            jvd: new hla(340, 540, 120, 55)
        },
        xsc: {
            jvd: new hla(250, 540, 120, 55),
            xnb: new hla(430, 540, 120, 55)
        },
        vmu: 36,
        xwr: 30,
        fuk: 22,
        grq: 3,
        vvx: 5,
        ssz: 2,
        ksq: 3,
        jfd: 10
    };
    this.avq = {
        hnh: new hla(200, 175, 400, 250),
        egt: 26,
        xwr: 20,
        mdq: 14,
        owf: new hla(20, 15, 360, 30),
        ioj: new hla(20, 55, 360, 105),
        wtn: new hla(20, 165, 360, 20),
        agm: new hla(165, 190, 70, 50),
        irs: 5,
        ssz: 3,
        ixf: {
            xwr: 20,
            hco: 3,
            vvx: 0,
            grq: 0,
            fev: 6,
            ssz: 2
        }
    };
    this.ugp = {
        hnh: new hla(0, 55, 560, 430),
        ssz: 2,
        ljy: 0,
        ubb: 5,
        lfy: 10,
        egt: 26,
        mdq: 20,
        owf: new hla(30, 15, 500, 30),
        hpt: new hla(20, 50, 520, 60),
        ifs: new hla(40, 60, 220, 40),
        ixd: new hla(328, 60, 30, 40),
        zkr: new hla(360, 60, 120, 40),
        dlt: new hla(482, 60, 30, 40),
        box: new hla(20, 120, 520, 200),
        dge: new hla(40, 120, 480, 40),
        lfi: new hla(30, 160, 280, 40),
        bqz: new hla(328, 160, 30, 40),
        phj: new hla(360, 160, 120, 40),
        jja: new hla(482, 160, 30, 40),
        euv: new hla(30, 215, 280, 40),
        obd: new hla(328, 215, 30, 40),
        aqi: new hla(360, 215, 120, 40),
        api: new hla(482, 215, 30, 40),
        paz: new hla(30, 270, 280, 40),
        rbk: new hla(328, 270, 30, 40),
        ybj: new hla(360, 270, 120, 40),
        oyt: new hla(482, 270, 30, 40),
        wtn: new hla(30, 330, 500, 30),
        jbj: new hla(210, 370, 140, 50),
        sbo: new hla(),
        oga: {
            xgo: new hla(40, 0, 240, 40),
            dmk: new hla(7, 12, 16, 16),
            xwr: 20,
            hco: 0,
            ssz: 2
        },
        acg: {
            hco: 3,
            vvx: -5,
            grq: -1,
            fev: 6,
            xwr: 20,
            ssz: 0
        },
        swo: {
            hco: 3,
            vvx: 5,
            grq: 0,
            fev: 6,
            xwr: 20,
            ssz: 0
        },
        bpi: {
            hco: 6,
            vvx: 0,
            grq: 0,
            fev: 6,
            xwr: 26,
            ssz: 2,
        },
        display: {
            egt: 16,
            ufc: 24,
            jeg: 0,
            jun: 0,
            ssz: 2,
            hho: 3,
            xow: 3,
            cch: 3,
            tar: 3
        }
    };
    this.ykv = {
        hnh: [new hla(2, 20, 130, 46), new hla(668, 20, 130, 46)],
        display: {
            ylq: new hla(6, 16, 118, 22),
            egt: 14,
            emc: 20,
            jeg: -11,
            bgb: 10,
            lrh: 8,
            ssz: 3,
            neb: 0,
            rkk: 4
        },
        sda: {
            hnh: new hla(50, 130, 700, 300),
            ylq: new hla(),
            egt: 66,
            emc: 150,
            jeg: -90,
            bgb: 60,
            lrh: 10,
            ssz: 0,
            neb: 0,
            rkk: 0
        }
    }
}
wys.prototype = new ktt;

function apz() {
    this.pyl = true
}
apz.prototype = new wys;

function omt() {
    this.dur = true;
    this.orb = true;
    this.jur = false;
    this.pyl = true;
    this.canvas = {
        hnh: new hla(0, 0, 800, 1165)
    };
    this.lor = {
        hnh: new hla(),
        xus: 0
    };
    this.zbt = {
        hnh: new hla(0, 550, 800, 615),
        ssz: 10
    };
    this.hdv = {
        zbt: {
            hnh: new hla(0, 0, 500, 360),
            tyy: new hla(0, 0, 500, 360),
            wtn: new hla(5, 325, 490, 30),
            xgo: new hla(50, 329, 400, 14),
            opv: new hla(50, 345, 400, 6),
            zwy: new hla(5, 285, 490, 70),
            xwr: 14,
            szw: 18,
            lrh: 5,
            vvx: 12,
            grq: 5,
            hnw: 2,
            lxu: 0,
            tca: {
                hnh: new hla(),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(),
                xgo: new hla(),
                zvz: new hla()
            }
        },
        kej: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(100, 75, 600, 450),
            wtn: new hla(),
            xgo: new hla(160, 295, 480, 24),
            opv: new hla(160, 325, 480, 3),
            zwy: new hla(100, 265, 600, 115),
            xwr: 21,
            szw: 26,
            lrh: 0,
            vvx: 12,
            grq: 8,
            hnw: 3,
            lxu: 10,
            tca: {
                hnh: new hla(400, 484, 0, 3),
                x: 38,
                tbj: 17,
                uit: 23
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        },
        iyh: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(0, 0, 800, 600),
            wtn: new hla(),
            xgo: new hla(250, 420, 300, 21),
            opv: new hla(),
            zwy: new hla(50, 410, 700, 80),
            xwr: 18,
            szw: 24,
            lrh: 0,
            vvx: 12,
            grq: 7,
            hnw: 0,
            lxu: 0,
            tca: {
                hnh: new hla(260, 119, 280, 280),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        hnh: new hla(0, 20, 800, 520)
    };
    this.qwn = {
        hnh: new hla(0, 0, 800, 20),
        xwr: 12,
        ucj: 19,
        poc: 15,
        lmt: 120,
        vvx: 2,
        grq: 2,
        zwb: 2,
        lnc: 60
    };
    this.mps = {
        hnh: new hla(0, 20, 800, 70),
        xwr: 10,
        dia: 10,
        ugy: 20,
        arw: 40,
        ssz: 4,
        vvx: 10,
        grq: 5,
        lrh: 10,
        ixf: {
            xwr: 17,
            lrh: 2
        }
    };
    this.otg = {
        hnh: new hla(0, 550, 800, 615),
        yry: new hla(),
        ixf: {
            ufc: 26,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 10,
            fev: 10,
            ssz: 2
        },
        owf: new hla(0, 20, 800, 40),
        gpl: new hla(0, 100, 800, 40),
        gyu: new hla(0, 140, 800, 40),
        mov: new hla(0, 180, 800, 40),
        tla: new hla(225, 275, 350, 100),
        ioj: new hla(200, 480, 400, 40),
        owi: {
            jvd: new hla(340, 540, 120, 68)
        },
        xsc: {
            jvd: new hla(250, 540, 120, 68),
            xnb: new hla(430, 540, 120, 68)
        },
        vmu: 36,
        xwr: 30,
        fuk: 22,
        grq: 3,
        vvx: 5,
        ssz: 2,
        ksq: 3,
        jfd: 10,
    };
    this.avq = {
        hnh: new hla(200, 705, 400, 250),
        egt: 26,
        xwr: 20,
        mdq: 14,
        owf: new hla(20, 15, 360, 30),
        ioj: new hla(20, 55, 360, 105),
        wtn: new hla(20, 165, 360, 20),
        agm: new hla(165, 190, 70, 50),
        irs: 5,
        ssz: 3,
        ixf: {
            xwr: 20,
            hco: 3,
            vvx: 0,
            grq: 0,
            fev: 6,
            ssz: 2
        }
    };
    this.ugp = {
        hnh: new hla(0, 585, 560, 430),
        ssz: 2,
        ljy: 0,
        ubb: 5,
        lfy: 10,
        egt: 26,
        mdq: 20,
        owf: new hla(30, 15, 500, 30),
        hpt: new hla(20, 50, 520, 60),
        ifs: new hla(40, 60, 220, 40),
        ixd: new hla(328, 60, 30, 40),
        zkr: new hla(360, 60, 120, 40),
        dlt: new hla(482, 60, 30, 40),
        box: new hla(20, 120, 520, 200),
        dge: new hla(40, 120, 480, 40),
        lfi: new hla(30, 160, 280, 40),
        bqz: new hla(328, 160, 30, 40),
        phj: new hla(360, 160, 120, 40),
        jja: new hla(482, 160, 30, 40),
        euv: new hla(30, 215, 280, 40),
        obd: new hla(328, 215, 30, 40),
        aqi: new hla(360, 215, 120, 40),
        api: new hla(482, 215, 30, 40),
        paz: new hla(30, 270, 280, 40),
        rbk: new hla(328, 270, 30, 40),
        ybj: new hla(360, 270, 120, 40),
        oyt: new hla(482, 270, 30, 40),
        wtn: new hla(30, 330, 500, 30),
        jbj: new hla(210, 370, 140, 50),
        sbo: new hla(),
        oga: {
            xgo: new hla(40, 0, 240, 40),
            dmk: new hla(7, 12, 16, 16),
            xwr: 20,
            hco: 0,
            ssz: 2
        },
        acg: {
            hco: 3,
            vvx: -5,
            grq: -1,
            fev: 6,
            xwr: 20,
            ssz: 0
        },
        swo: {
            hco: 3,
            vvx: 5,
            grq: 0,
            fev: 6,
            xwr: 20,
            ssz: 0
        },
        bpi: {
            hco: 6,
            vvx: 0,
            grq: 0,
            fev: 6,
            xwr: 26,
            ssz: 2,
        },
        display: {
            egt: 16,
            ufc: 24,
            jeg: 0,
            jun: 0,
            ssz: 2,
            hho: 3,
            xow: 3,
            cch: 3,
            tar: 3
        }
    };
    this.ykv = {
        hnh: [new hla(2, 550, 130, 46), new hla(668, 550, 130, 46)],
        display: {
            ylq: new hla(6, 16, 118, 23),
            egt: 14,
            emc: 20,
            jeg: -11,
            bgb: 10,
            lrh: 8,
            ssz: 3,
            neb: 0,
            rkk: 4
        },
        sda: {
            hnh: new hla(50, 660, 700, 300),
            ylq: new hla(),
            egt: 66,
            emc: 150,
            jeg: -90,
            bgb: 60,
            lrh: 10,
            ssz: 0,
            neb: 0,
            rkk: 0
        }
    }
}
omt.prototype = new ktt;

function hcm() {
    this.jur = false;
    this.dme = true;
    this.zpk = true;
    this.canvas = {
        hnh: new hla(0, 0, 960, 630)
    };
    this.lor = {
        hnh: new hla(),
        xus: 0,
        ohg: 0
    };
    this.zbt = {
        hnh: new hla(160, 30, 800, 600),
        ssz: 0
    };
    this.hdv = {
        zbt: {
            hnh: new hla(0, 0, 640, 460),
            tyy: new hla(0, 0, 640, 460),
            wtn: new hla(6, 416, 628, 38),
            xgo: new hla(64, 420, 512, 17),
            opv: new hla(64, 442, 512, 7),
            zwy: new hla(6, 364, 628, 90),
            xwr: 18,
            szw: 20,
            lrh: 6,
            vvx: 12,
            grq: 6,
            hnw: 3,
            lxu: 0,
            tca: {
                hnh: new hla(),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(),
                xgo: new hla(),
                zvz: new hla()
            }
        },
        kej: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(100, 75, 600, 450),
            wtn: new hla(),
            xgo: new hla(160, 295, 480, 24),
            opv: new hla(160, 325, 480, 3),
            zwy: new hla(100, 265, 600, 115),
            xwr: 21,
            szw: 26,
            lrh: 0,
            vvx: 12,
            grq: 8,
            hnw: 3,
            lxu: 10,
            tca: {
                hnh: new hla(400, 484, 0, 3),
                x: 38,
                tbj: 17,
                uit: 23
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 430, 600, 60),
                zvz: new hla(200, 510, 400, 40)
            }
        },
        iyh: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(0, 0, 800, 600),
            wtn: new hla(),
            xgo: new hla(250, 420, 300, 21),
            opv: new hla(),
            zwy: new hla(50, 410, 700, 80),
            xwr: 18,
            szw: 24,
            lrh: 0,
            vvx: 12,
            grq: 7,
            hnw: 0,
            lxu: 0,
            tca: {
                hnh: new hla(260, 119, 280, 280),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        }
    };
    this.qwn = {
        hnh: new hla(160, 0, 800, 30),
        xwr: 16,
        ucj: 26,
        poc: 15,
        lmt: 160,
        vvx: 2,
        grq: 2,
        zwb: 2,
        lnc: 0
    };
    this.mps = {};
    this.otg = {
        hnh: new hla(0, 0, 960, 630),
        yry: new hla(0, 0, 160, 630),
        ixf: {
            ufc: 0,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            fev: 8,
            hco: 16,
            ssz: 4
        },
        owf: new hla(160, 50, 800, 40),
        gpl: new hla(160, 130, 800, 40),
        gyu: new hla(160, 170, 800, 40),
        mov: new hla(160, 210, 800, 40),
        tla: new hla(385, 305, 350, 100),
        ioj: new hla(360, 510, 400, 40),
        owi: {
            jvd: new hla(10, 455, 140, 100),
        },
        xsc: {
            jvd: new hla(10, 355, 140, 100),
            xnb: new hla(10, 165, 140, 100)
        },
        vmu: 36,
        xwr: 30,
        fuk: 22,
        grq: 3,
        vvx: 5,
        ssz: 2,
        ksq: 3,
        jfd: 10
    };
    this.mkb = {
        hnh: new hla(160, 30, 800, 600),
        ssz: 0,
        hco: 0,
        wwt: 50,
        ypf: 30,
        mdq: 30,
        rvd: new hla(30, 180, 410, 60),
        tor: new hla(460, 180, 50, 60),
        kjq: new hla(512, 180, 210, 60),
        bnb: new hla(724, 180, 50, 60),
        wkr: new hla(30, 310, 410, 60),
        mis: new hla(460, 310, 50, 60),
        bka: new hla(512, 310, 210, 60),
        ekd: new hla(724, 310, 50, 60),
        jah: new hla(30, 440, 410, 60),
        ndh: new hla(512, 440, 210, 60),
        xwj: new hla(40, 530, 720, 50),
        ifs: new hla(30, 120, 360, 60),
        ixd: new hla(460, 120, 50, 60),
        zkr: new hla(512, 120, 210, 60),
        dlt: new hla(724, 120, 50, 60),
        qtk: new hla(40, 200, 760, 70),
        lfi: new hla(30, 280, 410, 60),
        bqz: new hla(460, 280, 50, 60),
        phj: new hla(512, 280, 210, 60),
        jja: new hla(724, 280, 50, 60),
        euv: new hla(30, 360, 410, 60),
        obd: new hla(460, 360, 50, 60),
        aqi: new hla(512, 360, 210, 60),
        api: new hla(724, 360, 50, 60),
        paz: new hla(30, 440, 410, 60),
        rbk: new hla(460, 440, 50, 60),
        ybj: new hla(512, 440, 210, 60),
        oyt: new hla(724, 440, 50, 60),
        wtn: new hla(40, 530, 720, 50),
        qra: {
            ucz: new hla(0, 0, 267, 90),
            uqm: new hla(267, 0, 266, 90),
            qbi: new hla(533, 0, 267, 90),
            sab: new hla()
        },
        jtv: {
            ucz: new hla(0, 0, 200, 90),
            nfc: new hla(200, 0, 200, 90),
            uqm: new hla(400, 0, 200, 90),
            qbi: new hla(600, 0, 200, 90),
            sab: new hla()
        },
        bxx: [new hla(132, 205, 200, 160), new hla(464, 205, 200, 160)],
        wxe: [new hla(50, 205, 200, 160), new hla(300, 205, 200, 160), new hla(550, 205, 200, 160)],
        zzz: [new hla(132, 130, 200, 160), new hla(464, 130, 200, 160), new hla(132, 360, 200, 160), new hla(464, 360, 200, 160)],
        sig: [new hla(50, 130, 200, 160), new hla(300, 130, 200, 160), new hla(550, 130, 200, 160), new hla(50, 360, 200, 160), new hla(300, 360, 200, 160), new hla(550, 360, 200, 160)],
        acg: {
            hco: 3,
            vvx: -10,
            grq: -1,
            fev: 6,
            xwr: 36,
            ssz: 0
        },
        swo: {
            hco: 3,
            vvx: 10,
            grq: -1,
            fev: 6,
            xwr: 36,
            ssz: 0
        },
        vbh: {
            xwr: 36,
            vvx: 0,
            grq: 0,
            fev: 10,
            hco: 0,
            ssz: 0
        },
        fgv: {
            xwr: 26,
            lrh: 5,
            hco: 26,
            ssz: 4,
            jgb: 40
        },
        drt: {
            egt: 16,
            ufc: 40,
            jeg: 0,
            jun: 0,
            ssz: 2,
            lrh: 3
        },
        giz: {
            egt: 16,
            ufc: 40,
            jeg: 0,
            jun: 0,
            ssz: 2,
            lrh: 3
        },
        oga: {
            xgo: new hla(50, 0, 360, 60),
            dmk: new hla(0, 13, 30, 30),
            xwr: 30,
            hco: 0,
            ssz: 2
        }
    };
    this.avq = {
        hnh: new hla(310, 155, 500, 320),
        egt: 36,
        xwr: 30,
        mdq: 18,
        owf: new hla(20, 20, 460, 40),
        ioj: new hla(20, 80, 460, 120),
        wtn: new hla(20, 210, 460, 20),
        agm: new hla(200, 245, 100, 60),
        irs: 5,
        ssz: 3,
        ixf: {
            xwr: 32,
            hco: 3,
            vvx: 0,
            grq: 0,
            fev: 6,
            ssz: 2
        }
    };
    this.ykv = {
        hnh: [new hla(162, 30, 130, 46), new hla(828, 30, 130, 46)],
        display: {
            ylq: new hla(6, 16, 118, 23),
            egt: 14,
            emc: 20,
            jeg: -11,
            bgb: 10,
            lrh: 8,
            ssz: 3,
            neb: 0,
            rkk: 4
        },
        sda: {
            hnh: new hla(210, 140, 700, 300),
            ylq: new hla(),
            egt: 66,
            emc: 150,
            jeg: -90,
            bgb: 60,
            lrh: 10,
            ssz: 0,
            neb: 0,
            rkk: 0
        }
    }
}
hcm.prototype = new ktt;

function ejl() {
    this.jur = false;
    this.dme = true;
    this.zpk = true;
    this.canvas = {
        hnh: new hla(0, 0, 960, 630)
    };
    this.lor = {
        hnh: new hla(),
        xus: 0,
        ohg: 0
    };
    this.zbt = {
        hnh: new hla(0, 30, 800, 600),
        ssz: 0
    };
    this.hdv = {
        zbt: {
            hnh: new hla(0, 0, 640, 460),
            tyy: new hla(0, 0, 640, 460),
            wtn: new hla(6, 416, 628, 38),
            xgo: new hla(64, 420, 512, 17),
            opv: new hla(64, 442, 512, 7),
            zwy: new hla(6, 364, 628, 90),
            xwr: 18,
            szw: 20,
            lrh: 6,
            vvx: 12,
            grq: 6,
            hnw: 3,
            lxu: 0,
            tca: {
                hnh: new hla(),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(),
                xgo: new hla(),
                zvz: new hla()
            }
        },
        kej: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(100, 75, 600, 450),
            wtn: new hla(),
            xgo: new hla(160, 295, 480, 24),
            opv: new hla(160, 325, 480, 3),
            zwy: new hla(100, 265, 600, 115),
            xwr: 21,
            szw: 26,
            lrh: 0,
            vvx: 12,
            grq: 8,
            hnw: 3,
            lxu: 10,
            tca: {
                hnh: new hla(400, 484, 0, 3),
                x: 38,
                tbj: 17,
                uit: 23
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 430, 600, 60),
                zvz: new hla(200, 510, 400, 40)
            }
        },
        iyh: {
            hnh: new hla(0, 0, 800, 600),
            tyy: new hla(0, 0, 800, 600),
            wtn: new hla(),
            xgo: new hla(250, 420, 300, 21),
            opv: new hla(),
            zwy: new hla(50, 410, 700, 80),
            xwr: 18,
            szw: 24,
            lrh: 0,
            vvx: 12,
            grq: 7,
            hnw: 0,
            lxu: 0,
            tca: {
                hnh: new hla(260, 119, 280, 280),
                x: 0,
                tbj: 0,
                uit: 0
            },
            cul: {
                tyy: new hla(50, 0, 700, 450),
                xgo: new hla(100, 460, 600, 60),
                zvz: new hla(200, 540, 400, 40)
            }
        }
    };
    this.qwn = {
        hnh: new hla(0, 0, 800, 30),
        xwr: 16,
        ucj: 26,
        poc: 15,
        lmt: 160,
        vvx: 2,
        grq: 2,
        zwb: 2,
        lnc: 0
    };
    this.mps = {};
    this.otg = {
        hnh: new hla(0, 0, 960, 630),
        yry: new hla(800, 0, 160, 630),
        ixf: {
            ufc: 0,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            fev: 8,
            hco: 16,
            ssz: 4
        },
        owf: new hla(0, 50, 800, 40),
        gpl: new hla(0, 130, 800, 40),
        gyu: new hla(0, 170, 800, 40),
        mov: new hla(0, 210, 800, 40),
        tla: new hla(225, 305, 350, 100),
        ioj: new hla(200, 510, 400, 40),
        owi: {
            jvd: new hla(810, 455, 140, 100),
        },
        xsc: {
            jvd: new hla(810, 355, 140, 100),
            xnb: new hla(810, 165, 140, 100)
        },
        vmu: 36,
        xwr: 30,
        fuk: 22,
        grq: 3,
        vvx: 5,
        ssz: 2,
        ksq: 3,
        jfd: 10
    };
    this.mkb = {
        hnh: new hla(0, 30, 800, 600),
        ssz: 0,
        hco: 0,
        wwt: 50,
        ypf: 30,
        mdq: 30,
        rvd: new hla(30, 180, 410, 60),
        tor: new hla(460, 180, 50, 60),
        kjq: new hla(512, 180, 210, 60),
        bnb: new hla(724, 180, 50, 60),
        wkr: new hla(30, 310, 410, 60),
        mis: new hla(460, 310, 50, 60),
        bka: new hla(512, 310, 210, 60),
        ekd: new hla(724, 310, 50, 60),
        jah: new hla(30, 440, 410, 60),
        ndh: new hla(512, 440, 210, 60),
        xwj: new hla(40, 530, 720, 50),
        ifs: new hla(30, 120, 360, 60),
        ixd: new hla(460, 120, 50, 60),
        zkr: new hla(512, 120, 210, 60),
        dlt: new hla(724, 120, 50, 60),
        qtk: new hla(40, 200, 760, 70),
        lfi: new hla(30, 280, 410, 60),
        bqz: new hla(460, 280, 50, 60),
        phj: new hla(512, 280, 210, 60),
        jja: new hla(724, 280, 50, 60),
        euv: new hla(30, 360, 410, 60),
        obd: new hla(460, 360, 50, 60),
        aqi: new hla(512, 360, 210, 60),
        api: new hla(724, 360, 50, 60),
        paz: new hla(30, 440, 410, 60),
        rbk: new hla(460, 440, 50, 60),
        ybj: new hla(512, 440, 210, 60),
        oyt: new hla(724, 440, 50, 60),
        wtn: new hla(40, 530, 720, 50),
        qra: {
            ucz: new hla(0, 0, 267, 90),
            uqm: new hla(267, 0, 266, 90),
            qbi: new hla(533, 0, 267, 90),
            sab: new hla()
        },
        jtv: {
            ucz: new hla(0, 0, 200, 90),
            nfc: new hla(200, 0, 200, 90),
            uqm: new hla(400, 0, 200, 90),
            qbi: new hla(600, 0, 200, 90),
            sab: new hla()
        },
        bxx: [new hla(132, 205, 200, 160), new hla(464, 205, 200, 160)],
        wxe: [new hla(50, 205, 200, 160), new hla(300, 205, 200, 160), new hla(550, 205, 200, 160)],
        zzz: [new hla(132, 130, 200, 160), new hla(464, 130, 200, 160), new hla(132, 360, 200, 160), new hla(464, 360, 200, 160)],
        sig: [new hla(50, 130, 200, 160), new hla(300, 130, 200, 160), new hla(550, 130, 200, 160), new hla(50, 360, 200, 160), new hla(300, 360, 200, 160), new hla(550, 360, 200, 160)],
        acg: {
            hco: 3,
            vvx: -10,
            grq: -1,
            fev: 6,
            xwr: 36,
            ssz: 0
        },
        swo: {
            hco: 3,
            vvx: 10,
            grq: -1,
            fev: 6,
            xwr: 36,
            ssz: 0
        },
        vbh: {
            xwr: 36,
            vvx: 0,
            grq: 0,
            fev: 10,
            hco: 0,
            ssz: 0
        },
        fgv: {
            xwr: 26,
            lrh: 5,
            hco: 26,
            ssz: 4,
            jgb: 40
        },
        drt: {
            egt: 16,
            ufc: 40,
            jeg: 0,
            jun: 0,
            ssz: 2,
            lrh: 3
        },
        giz: {
            egt: 16,
            ufc: 40,
            jeg: 0,
            jun: 0,
            ssz: 2,
            lrh: 3
        },
        oga: {
            xgo: new hla(50, 0, 360, 60),
            dmk: new hla(0, 13, 30, 30),
            xwr: 30,
            hco: 0,
            ssz: 2
        }
    };
    this.avq = {
        hnh: new hla(150, 155, 500, 320),
        egt: 36,
        xwr: 30,
        mdq: 18,
        owf: new hla(20, 20, 460, 40),
        ioj: new hla(20, 80, 460, 120),
        wtn: new hla(20, 210, 460, 20),
        agm: new hla(200, 245, 100, 60),
        irs: 5,
        ssz: 3,
        ixf: {
            xwr: 32,
            hco: 3,
            vvx: 0,
            grq: 0,
            fev: 6,
            ssz: 2
        }
    };
    this.ykv = {
        hnh: [new hla(2, 30, 130, 46), new hla(668, 30, 130, 46)],
        display: {
            ylq: new hla(6, 16, 118, 23),
            egt: 14,
            emc: 20,
            jeg: -11,
            bgb: 10,
            lrh: 8,
            ssz: 3,
            neb: 0,
            rkk: 4
        },
        sda: {
            hnh: new hla(50, 140, 700, 300),
            ylq: new hla(),
            egt: 66,
            emc: 150,
            jeg: -90,
            bgb: 60,
            lrh: 10,
            ssz: 0,
            neb: 0,
            rkk: 0
        }
    }
}
ejl.prototype = new ktt;

function tnb() {
    this.kqq = {
        hnh: new hla(5, 21, 460, 137),
        xwr: 21,
        foz: 45,
        qzw: 2,
        jqq: 5,
        tdj: -4,
        cgn: -10,
        hsv: -60,
        rdi: 6,
        kof: 12,
        law: 4,
        irs: 4,
        ssz: 2
    };
    this.vqz = {
        hnh: new hla(470, 21, 130, 137),
        xwr: 20,
        foz: 45,
        xip: 2,
        uta: 6,
        irs: 4,
        ssz: 4
    };
    this.zck = {
        hnh: new hla(5, 535, 795, 85),
        xnb: new hla(0, 33, 100, 50),
        spk: new hla(237, 33, 100, 50),
        tyv: new hla(347, 33, 100, 50),
        isg: new hla(457, 33, 100, 50),
        zvz: new hla(670, 33, 120, 50),
        ixf: {
            ufc: 16,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 8,
            fev: 6,
            ssz: 2
        },
        tqw: {
            ufc: 24,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 12,
            fev: 8,
            ssz: 2
        },
        omm: {
            hnh: new hla(1, 2, 790, 28),
            grq: 10,
            xwr: 17,
            hco: 4,
            gfh: 2,
            fev: 6,
            ssz: 2
        }
    };
    this.uvl = {
        hnh: new hla(0, 20, 800, 600),
        yry: new hla(0, 540, 800, 60),
        xnb: new hla(711, 544, 73, 53),
        zeo: new hla(11, 544, 73, 53),
        ehm: new hla(),
        vzc: new hla(),
        ixf: {
            ufc: 16,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            fev: 6,
            hco: 8,
            ssz: 2
        },
        itl: {
            hnh: new hla(0, 0, 800, 600),
            xwr: 18,
            egt: 26,
            txw: 19,
            jzl: 16,
            hbw: new hla(60, 0, 680, 40),
            xap: new hla(20, 40, 40, 300),
            ihy: new hla(60, 40, 680, 300),
            ezd: 80,
            zhu: 30,
            kst: 2,
            vmi: 2,
            tjn: new hla(60, 430, 680, 100),
            ooo: new hla(60, 350, 680, 60),
            irs: 4,
            ssz: 2,
            mdq: 12,
            wtn: new hla(0, 540, 800, 20)
        }
    };
    this.vrn = {
        hnh: new hla(606, 20, 190, 515),
        yay: new hla(15, 0, 160, 100),
        vzj: new hla(0, 100, 190, 50),
        isg: new hla(0, 155, 190, 50),
        tjn: new hla(0, 210, 190, 50),
        cju: {
            hnh: new hla(0, 274, 190, 244),
            egt: 16,
            xwr: 18,
            ioe: 8,
            udg: 30,
            irs: 4,
            ssz: 2
        },
        display: {
            egt: 14,
            ufc: 26,
            jeg: -14,
            jun: 10,
            ssz: 2,
            hho: 3,
            xow: 3,
            cch: 3,
            tar: 3
        }
    };
    this.noi = {
        hnh: new hla(5, 160, 597, 375),
        lrh: 4,
        gfh: 1,
        irs: 4,
        ssz: 2,
        pxy: {
            hnh: new hla(0, 0, 58, 45),
            xwr: 21
        }
    }
}
tnb.prototype = new wys;

function hcr() {
    this.pyl = true
}
hcr.prototype = new tnb;

function lpu() {
    this.kqq = {
        hnh: new hla(5, 551, 460, 137),
        xwr: 21,
        foz: 45,
        qzw: 2,
        jqq: 5,
        tdj: -4,
        cgn: -10,
        hsv: -60,
        rdi: 6,
        kof: 12,
        law: 4,
        irs: 4,
        ssz: 2
    };
    this.vqz = {
        hnh: new hla(470, 551, 130, 137),
        xwr: 20,
        foz: 45,
        xip: 2,
        uta: 6,
        irs: 4,
        ssz: 4
    };
    this.zck = {
        hnh: new hla(5, 1065, 795, 100),
        xnb: new hla(0, 35, 100, 60),
        spk: new hla(237, 35, 100, 60),
        tyv: new hla(347, 35, 100, 60),
        isg: new hla(457, 35, 100, 60),
        zvz: new hla(670, 35, 120, 60),
        ixf: {
            ufc: 16,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 8,
            fev: 6,
            ssz: 2
        },
        tqw: {
            ufc: 24,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            hco: 12,
            fev: 8,
            ssz: 2
        },
        omm: {
            hnh: new hla(1, 2, 790, 28),
            grq: 10,
            xwr: 17,
            hco: 4,
            gfh: 2,
            fev: 6,
            ssz: 2
        }
    };
    this.uvl = {
        hnh: new hla(0, 550, 800, 600),
        yry: new hla(0, 540, 800, 60),
        xnb: new hla(711, 544, 73, 53),
        zeo: new hla(11, 544, 73, 53),
        ehm: new hla(),
        vzc: new hla(),
        ixf: {
            ufc: 16,
            emc: 0,
            vvx: 0,
            jun: 0,
            bgb: 0,
            fev: 6,
            hco: 8,
            ssz: 2
        },
        itl: {
            hnh: new hla(0, 0, 800, 600),
            xwr: 18,
            egt: 26,
            txw: 19,
            jzl: 16,
            hbw: new hla(60, 0, 680, 40),
            xap: new hla(20, 40, 40, 300),
            ihy: new hla(60, 40, 680, 300),
            ezd: 80,
            zhu: 30,
            kst: 2,
            vmi: 2,
            tjn: new hla(60, 430, 680, 100),
            ooo: new hla(60, 350, 680, 60),
            irs: 4,
            ssz: 2,
            mdq: 12,
            wtn: new hla(0, 540, 800, 20)
        }
    };
    this.vrn = {
        hnh: new hla(606, 550, 190, 515),
        yay: new hla(15, 0, 160, 100),
        vzj: new hla(0, 100, 190, 50),
        isg: new hla(0, 155, 190, 50),
        tjn: new hla(0, 210, 190, 50),
        cju: {
            hnh: new hla(0, 274, 190, 244),
            egt: 16,
            xwr: 18,
            ioe: 8,
            udg: 30,
            irs: 4,
            ssz: 2
        },
        display: {
            egt: 14,
            ufc: 26,
            jeg: -14,
            jun: 10,
            ssz: 2,
            hho: 3,
            xow: 3,
            cch: 3,
            tar: 3
        }
    };
    this.noi = {
        hnh: new hla(5, 690, 597, 375),
        lrh: 4,
        gfh: 1,
        irs: 4,
        ssz: 2,
        pxy: {
            hnh: new hla(0, 0, 58, 45),
            xwr: 21
        }
    };
    this.top = {
        hnh: new hla(0, 20, 800, 520),
        dak: {
            hnh: new hla(0, 0, 800, 520),
            xwr: 18,
            egt: 26,
            txw: 19,
            jzl: 16,
            hbw: new hla(60, 2, 680, 30),
            xap: new hla(20, 32, 40, 300),
            ihy: new hla(60, 32, 680, 300),
            ezd: 80,
            zhu: 30,
            kst: 2,
            vmi: 2,
            tjn: new hla(60, 395, 680, 100),
            ooo: new hla(60, 340, 680, 50),
            irs: 4,
            ssz: 2,
            mdq: 12,
            wtn: new hla(0, 500, 800, 20)
        }
    }
}
lpu.prototype = new omt;
var nbt = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "ee",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cz",
        GR: "gr",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ge",
        HU: "hu",
        RO: "ro",
        PT: "pt"
    },
    ynh: {
        vvp: 0,
        ccq: 1,
        wtg: 2,
        mhv: 3,
        fjs: 4,
        pqw: 5,
        rwf: 10,
        hvp: 11,
        fks: 12,
        kzm: 13,
        nqw: 14,
        vra: 15,
        igq: 16
    },
    os: {
        zfd: 0,
        oxg: 1,
        swn: 2,
        ghj: 3,
        nuu: 4
    },
    jpo: {
        bal: 1,
        gjg: 3,
        qxs: 4,
        edt: 5,
        ymb: 7,
        jzi: 8,
        mon: 11,
        ujh: 13,
        afo: 14,
        toy: 6,
        gut: 9,
        fbn: 10
    },
    zgd: {
        dgk: 1,
        nbg: 2,
        ioa: 4,
        pol: 8,
        uhm: 16,
        but: 32
    },
    opg: {
        zvp: 1,
        mzr: 2,
        php: 3,
        wag: 4,
        cwa: 5,
        cgt: 6,
        vti: 7,
        bum: 95,
        qdd: 96,
        uwb: 97,
        tgt: 98,
        vld: 99,
        roulette: {
            oab: 2,
            vyb: 9,
            zrv: 10
        }
    },
    ui: {
        tci: "minimal",
        ouh: "modern",
        qxs: "classic"
    },
    gtv: {
        ayf: "auto",
        gpm: "left",
        kld: "right"
    },
    hdv: {
        ouq: 0,
        lig: 1,
        xam: 2,
        tav: 3,
        owg: 4
    },
    ykv: {
        tks: {
            rtu: "ji",
            zzw: "jv",
            yeh: "jh"
        }
    }
};
nbt.nxs = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += nbt.zgd.dgk
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += nbt.zgd.nbg
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += nbt.zgd.ioa
        } else {
            sessionStorage.pnf = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += nbt.zgd.ioa
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += nbt.zgd.pol
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.iex = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.iex();
                if (!e.start) {
                    e.start = e.noteOn
                }
                if (!e.stop) {
                    e.stop = e.noteOff
                }
                return e
            }
        }
        if (window.requestAnimationFrame) {
            window.uwy = window.requestAnimationFrame;
            window.cwi = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.uwy; ++a) {
            window.uwy = window[g[a] + "RequestAnimationFrame"];
            window.cwi = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.uwy || !window.cwi) {
            window.uwy = function(k, h) {
                var e = new Date().getTime();
                var i = Math.max(0, 16 - (e - d));
                var j = window.setTimeout(function() {
                    k(e + i)
                }, i);
                d = e + i;
                return j
            }
        }
        if (!window.cwi) {
            window.cwi = function(e) {
                clearTimeout(e)
            }
        }
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket
        }
        if (navigator.browserLanguage) {
            navigator.language = navigator.browserLanguage
        }
    } catch (c) {
        console.error(c.opg)
    }
    return f
})();

function ycu() {
    var a = {};
    this.eqh = 1;
    this.wwh = 1;
    this.xep = 0.6;
    this.kmd = 0.4;
    this.kji = function() {};
    this.ruf = function(b, c) {
        a[b] = c
    };
    this.kzi = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.eqh
        }
    }
}

function rzv() {
    this.audio = {
        urj: 65,
        gfb: -1,
        value: "A",
        vcb: null
    };
    this.etp = {
        urj: 70,
        gfb: 122,
        value: "F",
        vcb: "F11"
    };
    this.exe = {
        urj: 72,
        gfb: -1,
        value: "H",
        vcb: null
    };
    this.otg = {
        urj: 83,
        gfb: -1,
        value: "S",
        vcb: null
    };
    this.llh = {
        urj: 68,
        gfb: -1,
        value: "D",
        vcb: null
    };
    this.ok = {
        urj: 13,
        gfb: -1,
        value: "OK",
        vcb: null
    };
    this.avk = [this.audio, this.etp, this.exe, this.otg, this.llh, this.ok]
}

function pde() {
    var o = this;
    this.dmu = false;
    this.rjd = null;
    this.fsx = false;
    this.nfo = false;
    var f = {};
    var h = {};
    var d = [];
    var a = [];
    var j = [];
    var i = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var l = [];
    var k = null;
    var c = false;
    var m = false;
    var n = false;
    this.kji = function() {
        this.rft();
        this.qbv();
        this.fsx = false;
        this.nfo = false
    };
    this.rft = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.rjd = webAudioEngine.createGain();
            this.rjd.connect(webAudioEngine.destination);
            this.dmu = true
        } catch (p) {
            this.dmu = false
        }
    };
    this.qbv = function() {
        l = nbt.eea.hhj()
    };
    this.nof = function(p) {
        k = p
    };
    this.lfj = function(p) {
        c = p
    };
    this.yhr = function(p) {
        m = p
    };
    this.wwd = function(t, s, p, q) {
        var r = new rgk(t);
        r.kji(this.dmu, s, p, k.kzi(t));
        h[t] = r;
        j.push(r);
        d.push({
            uwj: r,
            axk: q,
            thm: o.siw,
            sub: l
        })
    };
    this.spr = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            uwj: p,
            axk: q,
            thm: null
        })
    };
    this.gzw = function(q, p) {
        d.unshift({
            uwj: null,
            axk: q,
            thm: o.mfb,
            wai: p
        })
    };
    this.toc = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.vpu(d.shift())
        }
    };
    this.start = function() {
        if (!o.fsx) {
            return
        }
        o.fsx = false;
        n = false;
        g = d.length;
        b = 0;
        i = 1;
        for (var q = 0; q < i && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.vpu(a.shift())
        }
    };
    this.hwy = function() {
        b++;
        if (o.axv()) {
            o.fsx = true;
            nbt.zbt.cct()
        }
    };
    this.klm = function() {
        o.fpg()
    };
    this.utv = function() {
        o.nfo = true;
        o.fpg()
    };
    this.fpg = function() {
        b++;
        o.gxp();
        if (o.axv()) {
            o.etl()
        } else {
            o.eaf()
        }
    };
    this.gxp = function() {
        var p = nbt.zbt.com.ljc("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.jsb(e)
            }
        }
    };
    this.etl = function() {
        var q = nbt.zbt.com.ljc("loading");
        if (o.nfo) {
            nbt.zbt.vwy(nbt.zbt.language.ape);
            var p = confirm(nbt.zbt.language.nzm);
            if (p == true) {
                nbt.zbt.ejt = false;
                o.wxi();
                nbt.zbt.xnv()
            } else {
                setTimeout(nbt.zbt.tog, 1000)
            }
        } else {
            if (!nbt.zbt.xkm) {
                e = 100;
                if (q) {
                    q.jsb(e)
                }
                if (c === true) {
                    if (m === true) {
                        q.tyl((nbt.zbt.auw() === true) ? nbt.zbt.language.gcr : nbt.zbt.language.ztr, nbt.zbt.uck.cft("device_info"))
                    } else {
                        q.tyl(nbt.zbt.language.kdq, null)
                    }
                } else {
                    setTimeout(nbt.zbt.xnv, 200)
                }
            }
        }
    };
    this.aoh = function() {
        return e
    };
    this.eaf = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (i === 1 && (a[0].uwj instanceof Image || a[0].uwj instanceof rgk)) {
                i = 30;
                for (var p = 0; p < i && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.vpu(a.shift())
        }
    };
    this.axv = function() {
        return (g > 0 && b == g)
    };
    this.vpu = function(p) {
        if (p.uwj instanceof Image) {
            if (n === true) {
                this.qzg(p.uwj, p.axk)
            } else {
                this.jol(p.uwj, p.axk)
            }
        } else {
            if (p.uwj instanceof rgk) {
                this.hid(p.uwj, p.axk, p.thm, p.sub)
            } else {
                this.pak(p.axk, p.wai, p.thm)
            }
        }
    };
    this.qzg = function(q, p) {
        q.onload = function() {
            nbt.zbt.uck.hwy()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + nbt.zbt.bor
    };
    this.jol = function(q, p) {
        q.onload = function() {
            nbt.zbt.uck.klm()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            nbt.zbt.vwy(nbt.zbt.language.dqa);
            setTimeout(nbt.zbt.tog, 3000)
        };
        q.src = p + "?v=" + nbt.zbt.bor
    };
    this.hid = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.pak = function(s, p, t) {
        var q = new XMLHttpRequest();
        q.open("GET", s + p, true);
        q.responseType = "text";
        q.onreadystatechange = function() {
            if (q.readyState == 4 && q.status == 200) {
                var u = JSON.parse(q.responseText);
                t(s, u)
            }
        };
        q.onerror = function() {
            console.error("can not load " + s + p);
            nbt.zbt.vwy(nbt.zbt.language.dqa);
            setTimeout(nbt.zbt.tog, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            nbt.zbt.vwy(nbt.zbt.language.dqa);
            setTimeout(nbt.zbt.tog, 3000)
        }
    };
    this.siw = function(q, p) {
        h[q].ugu = p
    };
    this.mfb = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.uug(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            nbt.zbt.vwy(nbt.zbt.language.dqa);
            setTimeout(nbt.zbt.tog, 3000)
        };
        p.src = r + q.src + "?v=" + nbt.zbt.bor
    };
    this.uug = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.hfu(u[t].id, s)
        }
        nbt.zbt.uck.klm()
    };
    this.imj = function(p) {
        if (h && h[p]) {
            return h[p]
        } else {}
        return null
    };
    this.hfu = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.cft = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.tpo = function(p) {
        if (!h) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (h[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.bmz = function(p) {
        if (!f) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (f[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.gyl = function(r, q, p) {
        if (h && h[r]) {
            h[r].play(q, p)
        } else {}
    };
    this.aqn = function(p) {
        if (h && h[p]) {
            h[p].stop()
        } else {}
    };
    this.phu = function(q, p) {
        if (h && h[q]) {
            h[q].meg(p)
        } else {}
    };
    this.ryk = function(s, q, r, p) {
        p = (p != null && p === true);
        if (h && h[s]) {
            h[s].pfc(k.kzi(s) * q, r, p)
        }
    };
    this.ith = function(q, p) {
        if (h && h[q]) {
            h[q].ith(p)
        }
    };
    this.yjl = function(p) {
        if (h && h[p]) {
            return h[p].tnp()
        }
        return 0
    };
    this.ucx = function(p) {
        if (this.dmu) {
            this.rjd.gain.value = p
        }
    };
    this.npg = function(q) {
        if (this.dmu) {
            this.rjd.gain.value = (q) ? 0 : 1
        } else {
            if (j) {
                for (var p = 0; p < j.length; p++) {
                    j[p].meg(q)
                }
            }
        }
    };
    this.wxi = function() {
        if (j) {
            for (var p = 0; p < j.length; p++) {
                j[p].nqv()
            }
        }
        j = null;
        h = null
    }
}

function unx() {
    this.rex = {};
    this.drm = {};
    this.tvm = [];
    this.kji = function() {
        this.rex = {};
        this.drm = {};
        this.tvm = []
    };
    this.ptx = function(b) {
        this.rex[b] = b
    };
    this.xih = function(f, e, d) {
        this.drm[f] = e;
        this.drm[f].vla = [];
        if (d && this.rex) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.rex[d[c]]) {
                    this.drm[f].vla.push(d[c])
                } else {}
            }
        }
        this.tvm.push(this.drm[f])
    };
    this.eej = function() {
        var c = [];
        for (var d = 0, b = this.tvm.length; d < b; d++) {
            if (this.tvm[d] != null) {
                c.push(this.tvm[d])
            }
        }
        return c
    };
    this.ljc = function(b) {
        if (this.drm && this.drm[b]) {
            return this.drm[b]
        }
        return null
    };
    this.qbc = function(g) {
        if (this.rex && this.rex[g]) {
            var d = [];
            for (var f = 0, b = this.tvm.length; f < b; f++) {
                for (var e = 0, c = this.tvm[f].vla.length; e < c; e++) {
                    if (this.tvm[f].vla[e] == g) {
                        d.push(this.tvm[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.jlw = function() {
        return this.rex
    };
    this.spd = function(e) {
        var d = -1;
        if (this.drm && this.drm[e]) {
            for (var c = 0, b = this.tvm.length; c < b; c++) {
                if (this.tvm[c] == this.drm[e]) {
                    d = c;
                    this.drm[e] = null
                }
            }
        }
        if (d >= 0) {
            this.tvm.splice(d, 1)
        }
    };
    this.vxf = function(f) {
        if (this.rex && this.rex[f]) {
            this.rex[f] = null;
            for (var e = 0, b = this.tvm.length; e < b; e++) {
                for (var d = 0, c = this.tvm[e].vla.length; d < c; d++) {
                    if (this.tvm[e].vla[d] == f) {
                        this.tvm[e].vla.splice(d, 1)
                    }
                }
            }
        }
    };
    this.dse = function(e, d, c, b) {
        return a(this.ljc(e), d, c, b)
    };
    this.ibe = function(f, d, c) {
        for (var e = 0, b = this.tvm.length; e < b; e++) {
            a(this.tvm[e], f, d, c)
        }
    };
    this.lir = function(h, k, f, e) {
        if (this.rex && this.rex[h]) {
            for (var g = 0, b = this.tvm.length; g < b; g++) {
                for (var d = 0, c = this.tvm[g].vla.length; d < c; d++) {
                    if (this.tvm[g].vla[d] == h) {
                        a(this.tvm[g], k, f, e)
                    }
                }
            }
        }
    };

    function a(d, g, c, b) {
        if (!b) {
            b = Object
        }
        try {
            if ((d) && (d instanceof b) && (typeof g === "string" && g.indexOf("#") == 0)) {
                g = d[g.substring(1, g.length)];
                if (typeof g === "function") {
                    if (c) {
                        return g.apply(d, c)
                    } else {
                        return g.call(d)
                    }
                }
            }
        } catch (f) {
            console.error(f)
        }
    }
}

function rgk(b) {
    var a = this;
    this.rvj = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.ezg = false;
    this.ugu = null;
    this.zpw = null;
    this.efo = 0;
    this.bfd = 0;
    this.bjp = 0;
    this.srj = 0;
    this.lcq = 30000;
    this.bnl = "";
    this.tnl = "";
    this.tnu = "";
    this.xji = null;
    this.cow = 1;
    this.xeh = 0;
    this.msi = -1;
    this.sqz = 0;
    this.tgb = 0;
    this.uep = false;
    this.kji = function(c, f, d, e) {
        this.ezg = c;
        if (e) {
            this.cow = e;
            this.volume = e
        }
        if (f) {
            this.rvj = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(d, c) {
        if (typeof d == "undefined") {
            d = 0
        }
        if (typeof c == "undefined") {
            c = 1
        }
        if (this.ezg) {
            clearTimeout(this.msi);
            if (this.ugu) {
                this.volume = this.cow;
                this.uep = false;
                this.zpw = webAudioEngine.createBufferSource();
                this.zpw.buffer = this.ugu;
                this.zpw.loop = this.loop;
                this.zpw.playbackRate.value = c;
                this.efo = webAudioEngine.createGain();
                this.efo.gain.linearRampToValueAtTime((this.muted === true) ? 0 : nbt.zgl.value40 * this.volume, webAudioEngine.currentTime);
                this.zpw.connect(this.efo);
                this.efo.connect(nbt.zbt.uck.rjd);
                this.zpw.start(0, d);
                this.xeh = webAudioEngine.currentTime;
                if (this.rvj) {
                    this.bfd = setTimeout(a.rvj, a.ugu.duration * 1000)
                }
            }
        } else {
            if (this.zpw) {
                if (this.loop) {
                    if (nbt.eea.yoq != nbt.ynh.fjs && nbt.eea.yoq != nbt.ynh.nqw) {
                        this.bjp = setInterval(a.ffh, a.zpw.duration * 1000)
                    }
                }
                this.zpw.currentTime = 0;
                this.zpw.play()
            }
        }
    };
    this.ffh = function() {
        if (!a.zpw.paused || (nbt.eea.yoq != nbt.ynh.wtg && nbt.eea.yoq != nbt.ynh.fks)) {
            a.zpw.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.ezg) {
                a.xeh = 0;
                if (a.zpw) {
                    a.zpw.stop(0);
                    a.zpw = null
                }
                clearTimeout(a.bfd);
                if (a.msi >= 0) {
                    clearTimeout(a.msi);
                    a.msi = -1
                }
            } else {
                if (a.zpw) {
                    a.zpw.currentTime = 0;
                    a.zpw.pause();
                    clearInterval(a.bjp);
                    if (a.msi >= 0) {
                        clearTimeout(a.msi);
                        a.msi = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.bnl = d[0];
        if (d.length >= 2) {
            this.tnl = d[1];
            this.tnu = e;
            this.xji = c
        }
        e += this.bnl + "?v=" + nbt.zbt.bor;
        if (this.ezg) {
            this.gja(e, c)
        } else {
            this.lkb(e)
        }
    };
    this.lvi = function() {
        if (this.ezg) {
            this.gja(this.tnu + this.tnl + "?v=" + nbt.zbt.bor, this.xji)
        }
    };
    this.lkb = function(c) {
        this.zpw = new Audio();
        this.srj = setTimeout(function() {
            console.error("can not load audio " + c);
            nbt.zbt.uck.utv()
        }, this.lcq);
        this.zpw.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.srj);
            nbt.zbt.uck.klm();
            a.uwe()
        }, false);
        this.zpw.addEventListener("error", function() {
            clearTimeout(a.srj);
            console.error("can not load audio " + c);
            nbt.zbt.uck.utv()
        }, false);
        this.zpw.volume = nbt.zgl.value40 * this.volume;
        this.zpw.src = c;
        this.zpw.load()
    };
    this.gja = function(f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function() {
            webAudioEngine.decodeAudioData(c.response, function(e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                nbt.zbt.uck.klm()
            }, function() {
                a.wcu("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.wcu("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.wcu("can not load audio from ", f)
        }
    };
    this.wcu = function(d, c) {
        console.error(d + c);
        if (a.tnl != "" && c.indexOf(a.tnl) < 0) {
            a.lvi()
        } else {
            nbt.zbt.uck.utv()
        }
    };
    this.kpl = function(c) {
        this.rvj = c;
        this.uwe()
    };
    this.uwe = function() {
        if (!this.ezg) {
            if (this.rvj) {
                if (this.zpw) {
                    this.zpw.addEventListener("ended", function() {
                        a.rvj()
                    }, false)
                }
            }
            if (nbt.eea.yoq == nbt.ynh.fjs || nbt.eea.yoq == nbt.ynh.nqw) {
                if (this.loop) {
                    if (this.zpw) {
                        this.zpw.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.nry = function() {
        if (!this.dyg) {
            if (this.rvj) {
                if (this.zpw) {
                    this.zpw.removeEventListener("ended", function() {
                        a.rvj()
                    }, false)
                }
            }
            if (nbt.eea.yoq == nbt.ynh.fjs || nbt.eea.yoq == nbt.ynh.nqw) {
                if (this.loop) {
                    if (this.zpw) {
                        this.zpw.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.ith = function(c) {
        if (this.ezg && this.zpw && c) {
            this.zpw.playbackRate.value = c
        }
    };
    this.pfc = function(d, e, c) {
        if (this.ezg === true && this.efo) {
            this.volume = (this.muted === true) ? 0 : nbt.zgl.value40 * d;
            if (e > 0) {
                this.efo.gain.linearRampToValueAtTime(this.efo.gain.value, webAudioEngine.currentTime);
                this.efo.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.efo.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.msi = setTimeout(this.stop, e)
            }
        } else {
            if (!this.ezg && c === true) {
                this.msi = setTimeout(this.stop, e)
            }
        }
    };
    this.meg = function(c) {
        this.muted = c;
        if (!this.ezg) {
            if (this.zpw && this.zpw.readyState > 0) {
                this.zpw.muted = c
            }
        } else {
            if (this.efo) {
                this.efo.gain.linearRampToValueAtTime((this.muted === true) ? 0 : nbt.zgl.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.nqv = function() {
        if (this.ezg) {
            if (this.zpw) {
                this.zpw.stop(0);
                clearTimeout(this.bfd);
                this.zpw = null
            }
        } else {
            if (this.zpw && this.zpw.readyState > 0) {
                this.zpw.currentTime = 0;
                this.zpw.pause();
                if (this.rvj) {
                    this.nry(this.rvj)
                }
                this.zpw = null
            }
        }
    };
    this.tnp = function() {
        if (this.ezg && this.xeh > 0) {
            return (webAudioEngine.currentTime - this.xeh) % this.ugu.duration
        }
        return 0
    }
}

function hla(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.btn = function() {
        return this.x + this.width
    };
    this.cmo = function() {
        return this.y + this.height
    };
    this.grb = function() {
        return this.x + this.width / 2
    };
    this.yoa = function() {
        return this.y + this.height / 2
    };
    this.hkn = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.lkl = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function abn() {
    this.yoq = -1;
    this.fcc = -1;
    this.qai = false;
    this.tsu = false;
    this.ito = false;
    this.qhf = false;
    this.xhy = false;
    this.ett = false;
    this.jec = false;
    this.uzo = false;
    this.oia = false;
    this.eas = true;
    this.rrh = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.qai = true;
            this.ito = true;
            this.yoq = nbt.ynh.wtg
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.ito = true
                }
                this.yoq = nbt.ynh.pqw
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        if (a.indexOf("OPR") >= 0) {
                            this.yoq = nbt.ynh.kzm
                        } else {
                            this.yoq = nbt.ynh.fks
                        }
                        this.ito = true
                    } else {
                        this.yoq = nbt.ynh.wtg
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.yoq = nbt.ynh.igq;
                                this.ito = true
                            } else {
                                this.yoq = nbt.ynh.hvp;
                                this.ito = true;
                                if (a.indexOf("7.0 Mobile") >= 0) {
                                    if (a.indexOf("iPad") >= 0) {
                                        this.xhy = true
                                    }
                                } else {
                                    if (a.indexOf("8.0 Mobile") >= 0) {
                                        this.qhf = true;
                                        this.uut = true
                                    } else {
                                        if (a.indexOf("9.0 Mobile") >= 0) {
                                            this.qhf = true;
                                            this.kxc = true
                                        } else {
                                            if (a.indexOf("10.0 Mobile") >= 0) {
                                                this.qhf = true;
                                                this.sqp = true
                                            } else {
                                                if (a.indexOf("OS 9_") >= 0 || a.indexOf("OS 10_") >= 0) {
                                                    this.qhf = true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            this.yoq = nbt.ynh.ccq
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.yoq = nbt.ynh.mhv
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.yoq = nbt.ynh.vra;
                                    this.ito = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.yoq = nbt.ynh.nqw;
                                        this.ito = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.yoq = nbt.ynh.nqw;
                                            this.ito = true
                                        } else {
                                            this.yoq = nbt.ynh.fjs
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.yoq = nbt.ynh.hvp;
                                    this.tsu = true;
                                    this.ito = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.yoq = nbt.ynh.hvp;
                                        this.tsu = true;
                                        this.ito = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.yoq = nbt.ynh.rwf;
                                            this.ito = true
                                        } else {
                                            this.yoq = nbt.ynh.vvp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.tqj = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.oku = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.fcc = nbt.os.zfd;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.oia = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.fcc = nbt.os.ghj
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.fcc = nbt.os.swn
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.fcc = nbt.os.nuu;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.eas = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.fcc = nbt.os.oxg
                        }
                    }
                }
            }
        }
    };
    this.waw = function() {
        return this.xhy
    };
    this.tis = function() {
        return (this.uut || this.kxc || this.sqp)
    };
    this.eeq = function() {
        return this.qhf
    };
    this.qks = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.pfa = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.qyr = function() {
        try {
            var a = document.createElement("canvas");
            if (!!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))) {
                return true
            } else {
                return false
            }
        } catch (b) {
            return false
        }
    };
    this.boz = function() {
        return (this.upk() === true)
    };
    this.upk = function() {
        if (nbt.zgl.value73 > 0 && screen.width < nbt.zgl.value73 && screen.height < nbt.zgl.value73) {
            return true
        }
        return false
    };
    this.pao = function(h, i, j, m, e, b, f, k, l, a, d, g) {
        var c = "";
        if (!m) {
            m = 0
        }
        if (!e) {
            e = 0
        }
        if (!b) {
            b = 0
        }
        if (!f) {
            f = 0
        }
        c = "matrix(" + i + "," + b + "," + f + "," + j + "," + m + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (k) {
            c += " rotateX(+" + k + "deg)"
        }
        if (l) {
            c += " rotateY(+" + l + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (h.style.MozTransform != undefined) {
            h.style.MozTransform = c
        } else {
            if (h.style.WebkitTransform != undefined) {
                h.style.WebkitTransform = c
            } else {
                if (h.style.OTransform != undefined) {
                    h.style.OTransform = c
                } else {
                    if (h.style.msTransform != undefined) {
                        h.style.msTransform = c
                    }
                }
            }
        }
    };
    this.ojg = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.mww = function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else {
                    if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen()
                    } else {
                        if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen()
                        }
                    }
                }
            }
            return true
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullScreen) {
                            document.msExitFullScreen()
                        }
                    }
                }
            }
            return false
        }
    };
    this.jll = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.ctf = function(b) {
        try {
            if (this.jll() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.ite = function() {
        try {
            if (this.jll() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.dem = function() {
        return false
    };
    this.hhj = function() {
        var b = document.createElement("audio"),
            c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.fme = function(p, n, f, k, j, a, o, d, q, g, m, i) {
        try {
            var l = 0,
                b = q,
                c = 1;
            if (!g) {
                g = ""
            }
            p.save();
            p.textAlign = "center";
            p.textBaseline = "bottom";
            p.fillStyle = f;
            p.font = g + " " + b + "px " + d;
            l = p.measureText(n).width;
            if (l > a) {
                c = a / l;
                b = Math.round(b * c) - 1;
                p.font = g + " " + b + "px " + d;
                if (m && i) {
                    i = (i * c < 1) ? 1 : Math.round(i * c)
                }
            }
            p.fillText(n, k + a / 2, j + (o - (o - b) / 2));
            if (m && i) {
                p.strokeStyle = m;
                p.lineWidth = i;
                p.strokeText(n, k + a / 2, j + (o - (o - b) / 2))
            }
            p.restore()
        } catch (h) {
            console.error(h)
        }
    };
    this.xnj = function(p, n, f, k, j, a, o, d, r, g, q, m, i) {
        try {
            var l = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            p.save();
            if (q) {
                k += q;
                a -= q
            }
            p.textAlign = "left";
            p.textBaseline = "bottom";
            p.fillStyle = f;
            p.font = g + " " + b + "px " + d;
            l = p.measureText(n).width;
            if (l > a) {
                c = a / l;
                b = Math.round(b * c) - 1;
                p.font = g + " " + b + "px " + d;
                if (m && i) {
                    i = (i * c < 1) ? 1 : Math.round(i * c)
                }
            }
            p.fillText(n, k, j + (o - (o - b) / 2));
            if (m && i) {
                p.strokeStyle = m;
                p.lineWidth = i;
                p.strokeText(n, k, j + (o - (o - b) / 2))
            }
            p.restore()
        } catch (h) {
            console.error(h)
        }
    };
    this.pdk = function(p, n, f, k, j, a, o, d, r, g, q, m, i) {
        try {
            var l = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            p.save();
            if (q) {
                a -= q
            }
            p.textAlign = "right";
            p.textBaseline = "bottom";
            p.fillStyle = f;
            p.font = g + " " + b + "px " + d;
            l = p.measureText(n).width;
            if (l > a) {
                c = a / l;
                b = Math.round(b * c) - 1;
                p.font = g + " " + b + "px " + d;
                if (m && i) {
                    i = (i * c < 1) ? 1 : Math.round(i * c)
                }
            }
            p.fillText(n, k + a, j + (o - (o - b) / 2));
            if (m && i) {
                p.strokeStyle = m;
                p.lineWidth = i;
                p.strokeText(n, k + a, j + (o - (o - b) / 2))
            }
            p.restore()
        } catch (h) {
            console.error(h)
        }
    };
    this.ukd = function(q, l, s, j, h, p, o, m, c, d, t, b, v, r) {
        try {
            var k = 0,
                C = 0,
                D = 0,
                a = 0,
                g = [],
                f = "",
                B = 0,
                E = 0,
                z = 0,
                F = 1;
            var n = c;
            if (!d) {
                d = ""
            }
            if (!t) {
                t = "left"
            }
            q.save();
            q.textAlign = t;
            q.textBaseline = "bottom";
            q.fillStyle = s;
            q.font = d + " " + n + "px " + m;
            a = q.measureText(l).width / p;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (n * a > o) {
                F = o / (n * a);
                n = Math.round(F * n) - 1;
                q.font = d + " " + n + "px " + m;
                a = q.measureText(l).width / p;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var u = z; u < l.length; u++) {
                f += l.charAt(u);
                k = q.measureText(f).width;
                if (l.charAt(u) == " " || l.charAt(u) == "|") {
                    B = u
                }
                if (u == l.length - 1) {
                    g[E] = l.substring(z, l.length)
                } else {
                    if (l.charAt(u) == "|") {
                        g[E] = l.substring(z, u);
                        E++;
                        z = u + 1;
                        f = l.substring(B + 1, u)
                    } else {
                        if (k >= p) {
                            g[E] = l.substring(z, B);
                            E++;
                            z = B + 1;
                            f = l.substring(B + 1, u)
                        }
                    }
                }
            }
            for (var u = 0; u < g.length; u++) {
                D = (t == "left") ? j : (t == "center") ? (j + p / 2) : j + p;
                if (b) {
                    C = h + (o + n) / (g.length + 1) * (u + 1)
                } else {
                    C = h + Math.round(n * 1.5 * (u + 1))
                }
                q.fillText(g[u], D, C);
                if (v && r) {
                    q.strokeStyle = v;
                    q.lineWidth = r;
                    q.strokeText(g[u], D, C)
                }
            }
            q.restore()
        } catch (A) {
            console.error(A)
        }
    };
    this.cjr = function(l, g, d, a, i, b, j, k, f) {
        try {
            var h = 0;
            l.save();
            if (k && f) {
                h = Math.round(f / 2);
                l.beginPath();
                l.moveTo(g + b + h, d + h);
                l.arcTo(g + a - h, d + h, g + a - h, d + b + h, b);
                l.arcTo(g + a - h, d + i - h, g + a - b - h, d + i - h, b);
                l.arcTo(g + h, d + i - h, g + h, d + i - b - h, b);
                l.arcTo(g + h, d + h, g + b + h, d + h, b);
                l.closePath()
            } else {
                l.beginPath();
                l.moveTo(g + b, d);
                l.arcTo(g + a, d, g + a, d + b, b);
                l.arcTo(g + a, d + i, g + a - b, d + i, b);
                l.arcTo(g, d + i, g, d + i - b, b);
                l.arcTo(g, d, g + b, d, b);
                l.closePath()
            }
            if (j) {
                l.fillStyle = j;
                l.fill()
            }
            if (k && f) {
                l.strokeStyle = k;
                l.lineWidth = f;
                l.stroke()
            }
            l.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.xss = function(m, h, f, a, j, c, l, b, k, g, n) {
        try {
            var i = 0;
            m.save();
            if (k && g) {
                i = Math.round(g / 2);
                m.beginPath();
                m.moveTo(h + c + i, f + i);
                m.arcTo(h + a - i, f + i, h + a - i, f + c + i, c);
                m.arcTo(h + a - i, f + j - i, h + a - c - i, f + j - i, c);
                m.arcTo(h + i, f + j - i, h + i, f + j - c - i, c);
                m.arcTo(h + i, f + i, h + c + i, f + i, c);
                m.closePath()
            } else {
                m.beginPath();
                m.moveTo(h + c, f);
                m.arcTo(h + a, f, h + a, f + c, c);
                m.arcTo(h + a, f + j, h + a - c, f + j, c);
                m.arcTo(h, f + j, h, f + j - c, c);
                m.arcTo(h, f, h + c, f, c);
                m.closePath()
            }
            if (l) {
                if (b) {
                    m.globalAlpha = b
                }
                m.fillStyle = l;
                m.fill()
            }
            if (k && g) {
                if (n) {
                    m.globalAlpha = n
                }
                m.strokeStyle = k;
                m.lineWidth = g;
                m.stroke()
            }
            m.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.mmi = function(n, d, j, i, m, k, f, o, p, g, l, c) {
        try {
            var b = Math.round(f / 2),
                h = 0,
                q = 1,
                a = 2,
                s = 3;
            n.save();
            n.beginPath();
            if (d === h) {
                n.moveTo(j + f, i + b);
                n.lineTo(j + m - b, i + (k) / 2 - b);
                n.bezierCurveTo(j + m - b, i + (k) / 2 - b, j + m, i + (k) / 2 + b, j + m - b, i + (k) / 2 + b);
                n.lineTo(j + f, i + k - b);
                n.bezierCurveTo(j + f, i + k - b, j, i + k, j, i + k - b);
                n.lineTo(j, i + b);
                n.bezierCurveTo(j, i + b, j + f, i, j + f, i + b)
            } else {
                if (d === q) {
                    n.moveTo(j + m - f, i + b);
                    n.lineTo(j + b, i + (k) / 2 - b);
                    n.bezierCurveTo(j + b, i + (k) / 2 - b, j, i + (k) / 2 + b, j + b, i + (k) / 2 + b);
                    n.lineTo(j + m - f, i + k - b);
                    n.bezierCurveTo(j + m - f, i + k - b, j + m, i + k, j + m, i + k - b);
                    n.lineTo(j + m, i + b);
                    n.bezierCurveTo(j + m, i + b, j + m - f, i, j + m - f, i + b)
                } else {
                    if (d === a) {
                        n.moveTo(j + m - b, i + f);
                        n.lineTo(j + m / 2 + b, i + k - b);
                        n.bezierCurveTo(j + m / 2 + b, i + k - b, j + m / 2 - b, i + k, j + m / 2 - b, i + k - b);
                        n.lineTo(j + b, i + f);
                        n.bezierCurveTo(j + b, i + f, j, i, j + b, i);
                        n.lineTo(j + m - b, i);
                        n.bezierCurveTo(j + m - b, i, j + m, i + f, j + m - b, i + f)
                    } else {
                        if (d === s) {
                            n.moveTo(j + m - b, i + k - f);
                            n.lineTo(j + m / 2 + b, i + b);
                            n.bezierCurveTo(j + m / 2 + b, i + b, j + m / 2 - b, i, j + m / 2 - b, i + b);
                            n.lineTo(j + b, i + k - f);
                            n.bezierCurveTo(j + b, i + k - f, j, i + k, j + b, i + k);
                            n.lineTo(j + m - b, i + k);
                            n.bezierCurveTo(j + m - b, i + k, j + m, i + k - f, j + m - b, i + k - f)
                        }
                    }
                }
            }
            n.closePath();
            if (o) {
                if (p) {
                    n.globalAlpha = p
                }
                n.fillStyle = o;
                n.fill()
            }
            if (g && l) {
                if (c) {
                    n.globalAlpha = c
                }
                n.strokeStyle = g;
                n.lineWidth = l;
                n.stroke()
            }
            n.restore()
        } catch (r) {
            console.error(r)
        }
    };
    this.exs = function(p, i, g, b, l, o, k, d, f, n, a, m, h, q) {
        try {
            var j = 0;
            p.save();
            if (m && h) {
                j = Math.round(h / 2);
                p.beginPath();
                p.moveTo(i + o + j, g + j);
                if (k > 0) {
                    p.arcTo(i + b - j, g + j, i + b - j, g + k + j, k)
                } else {
                    p.lineTo(i + b - j, g + j)
                }
                if (d > 0) {
                    p.arcTo(i + b - j, g + l - j, i + b - d - j, g + l - j, d)
                } else {
                    p.lineTo(i + b - j, g + l - j)
                }
                if (f > 0) {
                    p.arcTo(i + j, g + l - j, i + j, g + l - f - j, f)
                } else {
                    p.lineTo(i + j, g + l - j)
                }
                if (o > 0) {
                    p.arcTo(i + j, g + j, i + o + j, g + j, o)
                } else {
                    p.lineTo(i + j, g + j)
                }
                p.closePath()
            } else {
                p.beginPath();
                p.moveTo(i + o, g);
                if (k > 0) {
                    p.arcTo(i + b, g, i + b, g + k, k)
                } else {
                    p.lineTo(i + b, g)
                }
                if (d > 0) {
                    p.arcTo(i + b, g + l, i + b - d, g + l, d)
                } else {
                    p.lineTo(i + b, g + l)
                }
                if (f > 0) {
                    p.arcTo(i, g + l, i, g + l - f, f)
                } else {
                    p.lineTo(i, g + l)
                }
                if (o > 0) {
                    p.arcTo(i, g, i + o, g, o)
                } else {
                    p.lineTo(i, g)
                }
                p.closePath()
            }
            if (n) {
                if (a) {
                    p.globalAlpha = a
                }
                p.fillStyle = n;
                p.fill()
            }
            if (m && h) {
                if (q) {
                    p.globalAlpha = q
                }
                p.strokeStyle = m;
                p.lineWidth = h;
                p.stroke()
            }
            p.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.sfx = function(l, g, d, a, i, j, b, k, f, m) {
        try {
            var h = 0;
            l.save();
            if (j) {
                l.fillStyle = j;
                if (b) {
                    l.globalAlpha = b
                }
                l.fillRect(g, d, a, i)
            }
            if (k && f) {
                h = Math.round(f / 2);
                l.strokeStyle = k;
                if (m) {
                    l.globalAlpha = m
                }
                l.lineWidth = f;
                l.strokeRect(g + h, d + h, a - 2 * h, i - 2 * h)
            }
            l.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.bxq = function(j, g, d, c, h, a, i, f, k) {
        try {
            j.save();
            j.beginPath();
            j.arc(g, d, c, 0, Math.PI * 2, false);
            j.closePath();
            if (h) {
                j.fillStyle = h;
                if (a) {
                    j.globalAlpha = a
                }
                j.fill()
            }
            if (i && f) {
                j.strokeStyle = i;
                if (k) {
                    j.globalAlpha = k
                }
                j.lineWidth = f;
                j.stroke()
            }
            j.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function sji() {
    var b = null;
    this.kkk = null;
    this.nxs = 0;
    this.dnp = -1;
    this.opg = -1;
    this.gac = -1;
    this.ogs = 0;
    this.frh = "";
    this.ydx = "";
    this.gvg = "";
    this.ecy = "";
    this.emy = "";
    this.bor = "";
    this.qjs = "";
    this.czx = "";
    this.bow = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.kji = function(h) {
        this.kkk = h;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.frh);
        c.onopen = function(i) {
            b.zdb(i)
        };
        c.onclose = function(i) {
            b.zvt(i)
        };
        c.onmessage = function(i) {
            b.ahs(i)
        };
        c.onerror = function(i) {
            b.cym(i)
        }
    };
    this.qpf = function(h) {
        var i = parseInt(h.charAt(this.ogs), 16);
        this.ogs++;
        return i
    };
    this.zku = function(h) {
        var j = 0;
        var i = h.charAt(this.ogs);
        i += h.charAt(this.ogs + 1);
        this.ogs += 2;
        j = parseInt(i, 16);
        return j
    };
    this.ycp = function(k) {
        var h = this.zwj(k);
        var m = [];
        for (var j = 0; j < h; j++) {
            m[j] = parseInt(k.charAt(this.ogs), 16);
            this.ogs += 1
        }
        return m
    };
    this.zwj = function(m) {
        var k = 0;
        var h = parseInt(m.charAt(this.ogs), 16);
        this.ogs++;
        var n = "";
        for (var j = 0; j < h; j++) {
            n += m.charAt(this.ogs);
            this.ogs += 1
        }
        k = parseInt(n, 16);
        return k
    };
    this.row = function(h) {
        var i = "";
        if (this.ogs < h.length) {
            i = h.substring(this.ogs, h.length)
        }
        return i
    };
    this.fuq = function(h) {};
    this.arj = function(o) {
        var p = o.substr(0, 2),
            k = o.substring(2),
            n = [],
            j = [],
            l = null;
        if (k && k.length > 0) {
            if (p === nbt.ykv.tks.rtu || p === nbt.ykv.tks.zzw) {
                n = k.split("|");
                for (var m = 0, h = n.length; m < h; m++) {
                    j = n[m].split(":");
                    if (p === nbt.ykv.tks.rtu && j.length >= 3) {
                        this.bow[m] = {
                            qpx: j[0],
                            value: Number(j[1]),
                            moc: j[2]
                        };
                        if (j.length >= 5) {
                            this.bow[m].rxe = j[3];
                            this.bow[m].iml = j[4]
                        }
                    } else {
                        if (p === nbt.ykv.tks.zzw && j.length >= 2) {
                            for (var m = 0, h = this.bow.length; m < h; m++) {
                                if (this.bow[m].qpx === j[0]) {
                                    this.bow[m].value = Number(j[1])
                                }
                            }
                        }
                    }
                }
                if (p === nbt.ykv.tks.zzw) {
                    this.kkk.yqp(this.bow)
                }
            } else {
                if (p === nbt.ykv.tks.yeh) {
                    j = k.split(":");
                    if (j.length >= 3) {
                        l = {
                            qpx: j[0],
                            value: Number(j[1]),
                            dgg: Number(j[2])
                        };
                        if (j.length >= 5) {
                            l.ydx = j[3];
                            l.zsm = j[4]
                        }
                        this.kkk.agh(l)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.kkk.ymw.ysv()
        } else {
            b.ucc("A/u260");
            if (nbt.zgl.value66 > 0) {
                setTimeout(b.bap, nbt.zgl.value66)
            }
        }
    };
    this.par = function(h) {
        if (this.kkk.ymw.ocn) {
            setTimeout(function() {
                window.location.reload()
            }, h)
        } else {
            this.kkk.ymw.csj(e);
            setTimeout(function() {
                if (e < nbt.zgl.value46) {
                    b.kkk.ymw.connect();
                    e++
                } else {
                    b.kkk.ymw.kjp()
                }
            }, h)
        }
    };
    this.ybf = function() {
        return g
    };
    this.mpg = function() {
        g = true;
        d = true;
        this.ucc("A/u260");
        if (nbt.zgl.value66 > 0) {
            setTimeout(this.bap, nbt.zgl.value66)
        }
    };
    this.dmc = function() {
        g = true;
        f = true;
        this.ucc("A/u260");
        if (nbt.zgl.value66 > 0) {
            setTimeout(this.bap, nbt.zgl.value66)
        }
    };
    this.zdb = function(h) {
        var i = -(new Date().getTimezoneOffset() / 60),
            k = window.navigator.userLanguage || window.navigator.language,
            j = (nbt.zbt) ? nbt.eea.yoq + "|" + nbt.zbt.yjg + "|" + i + "|" + k : "";
        a = false;
        this.kkk.zra();
        this.ucc("A/u25" + this.ydx + "," + this.gvg + "," + this.ecy + "," + this.emy + "," + this.bor + "," + this.qjs + "," + this.czx + "," + j)
    };
    this.zvt = function(h) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (nbt.eea.yoq == nbt.ynh.vvp || nbt.eea.yoq == nbt.ynh.rwf) {
                setTimeout(b.kjz, 500)
            } else {
                this.kkk.idg()
            }
        } else {
            if (d) {
                if (nbt.zgl.value13 == true) {
                    this.kkk.ymw.kuy()
                } else {
                    this.kkk.ymw.ajq()
                }
            } else {
                if (f) {
                    this.kkk.ymw.nzg()
                } else {
                    this.kkk.ymw.tog()
                }
            }
        }
    };
    this.ahs = function(h) {
        this.fuq(h.data)
    };
    this.cym = function(h) {};
    this.ucc = function(h) {
        if (c.readyState >= 2) {
            this.zvt()
        }
        this.nxs = 0;
		var tmpPar=':::{"gameData":"'+h+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"BingoAM"}';h=tmpPar;
        c.send(h)
    };
    this.kjz = function() {
        b.kkk.idg()
    };
    this.bap = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.zvt()
    }
}

function nhp() {
    this.ymw = null;
    this.pwv = null;
    this.frh = "";
    this.ydx = "";
    this.gvg = "";
    this.ecy = "";
    this.emy = "";
    this.qjs = "";
    this.czx = "";
    this.zra = function() {};
    this.ahs = function(a) {
        this.ymw.ltz(a)
    };
    this.glr = function() {};
    this.idg = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.ymw != null && !this.pwv.ybf()) {
            this.ymw.mza("Can not connect to gaming server!", true)
        }
    };
    this.cym = function(a) {
        if (this.pwv.nxs == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.ymw != null) {
            this.ymw.mza(a, true)
        }
    };
    this.par = function(a) {
        this.pwv.par(a)
    };
    this.ctd = function() {
        this.ymw.bbg(this.pwv.dgg)
    };
    this.yqp = function(a) {
        this.ymw.yqp(a)
    };
    this.agh = function(a) {
        this.ymw.agh(a)
    };
    this.erw = function() {}
}

function gcb() {
    var b = null;
    this.ymw = null;
    this.frh = "";
    this.ydx = "";
    this.gvg = "";
    this.ecy = "";
    this.emy = "";
    this.bor = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.pxs = true;
    this.olt = false;
    this.bti = false;
    this.ogs = 0;
    this.kpa = 0;
    this.xpx = 0;
    this.hmh = 0;
    this.bqr = 0;
    this.kji = function(f, g) {
        this.frh = g;
        this.ymw = f;
        this.bti = false;
        return this
    };
    this.connect = function(g, i, h, j, f, k) {
        b = this;
        e = false;
        a = false;
        this.ydx = i;
        this.gvg = h;
        this.ecy = j;
        this.emy = g;
        this.bor = f;
        this.pxs = true;
        this.olt = k;
        c = new WebSocket(this.frh);
        c.onopen = function(l) {
            b.zdb(l)
        };
        c.onclose = function(l) {
            b.zvt(l)
        };
        c.onmessage = function(l) {
            b.ahs(l)
        };
        c.onerror = function(l) {
            b.cym(l)
        }
    };
    this.qpf = function(f) {
        var g = parseInt(f.charAt(this.ogs), 16);
        this.ogs++;
        return g
    };
    this.zwj = function(j) {
        var h = 0;
        var f = parseInt(j.charAt(this.ogs), 16);
        this.ogs++;
        var k = "";
        for (var g = 0; g < f; g++) {
            k += j.charAt(this.ogs);
            this.ogs += 1
        }
        h = parseInt(k, 16);
        return h
    };
    this.fuq = function(h) {
        var j = this.ymw.com.ljc("stats");
        if (h != null && h != "null" && h) {
            if (h == "010101010101010") {
                this.cjc()
            } else {
                this.ogs = 0;
                this.gac = this.qpf(h);
                if (this.gac == 0) {
                    var i = [];
                    i[0] = this.zwj(h);
                    i[1] = this.zwj(h);
                    i[2] = this.zwj(h);
                    i[3] = this.zwj(h);
                    i[4] = this.zwj(h);
                    i[5] = this.zwj(h);
                    i[6] = this.zwj(h);
                    if (nbt.zgl.value36) {
                        this.xpx = i[0];
                        this.hmh = i[1];
                        this.bqr = i[2]
                    } else {
                        if (nbt.zgl.value37) {
                            var g = nbt.zgl.value39;
                            var f = i[4];
                            f = (g <= f) ? (this.olt) ? 100 : g * 60000 : (g - f) * 60000;
                            this.kpa = i[3] * 60000;
                            this.hmh = i[5];
                            this.bqr = i[6];
                            this.ymw.rid(f);
                            if (!this.bti) {
                                this.bti = true;
                                this.ymw.evj(i[3] * 60000)
                            }
                            if (this.olt) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.olt) {
                        if (j) {
                            j.hxc(this.xpx, this.hmh, this.bqr, this.kpa)
                        }
                    }
                } else {
                    console.error("Statistic error: " + h);
                    if (!this.olt) {
                        if (j) {
                            j.hxc(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.cjc = function() {
        this.ucc("A/u270," + this.emy)
    };
    this.ucc = function(f) {
        if (c && !e) {
            this.nxs = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.pxs = f;
        if (c && c.readyState >= 2) {
            if (this.ymw && this.pxs) {
                this.ymw.pxs()
            }
        } else {
            this.ucc("A/u260");
            if (nbt.zgl.value66 > 0) {
                setTimeout(this.bap, nbt.zgl.value66)
            }
        }
        e = true
    };
    this.zdb = function(f) {
        a = false;
        this.ucc("A/u25" + this.ydx + "," + this.gvg + "," + this.ecy + "," + d + "," + this.bor)
    };
    this.zvt = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.olt) {
                if (this.ymw && this.pxs) {
                    this.ymw.pxs()
                }
            }
        }
    };
    this.ahs = function(f) {
        this.fuq(f.data)
    };
    this.cym = function(f) {};
    this.bap = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.zvt()
    }
}

function yja() {
    var a = null;
    this.frh = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.frh = c;
        b = new WebSocket(this.frh);
        b.onopen = function(d) {
            a.zdb(d)
        };
        b.onclose = function(d) {
            a.zvt(d)
        };
        b.onmessage = function(d) {
            a.ahs(d)
        };
        b.onerror = function(d) {
            a.cym(d)
        }
    };
    this.fuq = function(c) {};
    this.ucc = function(c) {
        b.send(c)
    };
    this.zdb = function(c) {
        this.ucc("A/u25vlt")
    };
    this.zvt = function(c) {};
    this.ahs = function(c) {
        this.fuq(c.data)
    };
    this.cym = function(c) {}
}

function uib() {
    this.parent = null;
    this.context2D = null;
    this.scy = null;
    this.nsm = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.tte = true;
    this.irw = false;
    this.kji = function(a, d, c) {
        try {
            if (a) {
                this.x = a.x || 0;
                this.y = a.y || 0;
                this.width = a.width || 0;
                this.height = a.height || 0
            }
            if (d) {
                this.context2D = d
            } else {
                this.scy = document.createElement("canvas");
                this.scy.width = this.width;
                this.scy.height = this.height;
                this.context2D = this.scy.getContext("2d");
                if (c) {
                    this.nsm = c
                }
            }
            this.irw = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.pki = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.scy) {
                this.scy.width = this.width;
                this.scy.height = this.height
            }
            this.irw = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.gku = function(a) {};
    this.dly = function(a) {};
    this.uzk = function(a, b) {
        this.tte = a;
        if (b && b === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.yzw = function() {
        return (this.tte && !this.irw)
    };
    this.jsb = function() {}
}

function tng() {
    this.jdb = null;
    this.qre = null;
    this.lii = -1;
    this.bmi = -1;
    this.dxp = false;
    this.ere = false;
    this.eka = false;
    this.aep = 0;
    this.uwd = 0;
    var a = 200;
    this.kji = function(c, f, d, b, e) {
        this.jdb = b;
        this.qre = e;
        tng.prototype.kji.call(this, c, f, d)
    };
    this.mat = function(b, d, c) {
        this.dxp = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.yzw()) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
        if (this.dxp === true && c === true) {
            clearTimeout(this.aep);
            this.aep = setTimeout(this.kxw, a)
        }
    };
    this.umm = function() {
        return this.dxp
    };
    this.hau = function(b, c) {
        this.eka = b;
        c = (c === false) ? false : true;
        clearTimeout(this.uwd);
        if (this.eka === true && c === true) {
            this.uwd = setTimeout(this.gwb, a)
        }
    };
    this.mkr = function() {
        return this.eka
    };
    this.lun = function(b, c) {
        this.qre = b;
        if (c && c === true && this.yzw()) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.ecu = function(b) {
        this.ere = b
    };
    this.aso = function() {
        return this.ere
    };
    this.kuc = function() {};
    this.gwb = function() {};
    this.kxw = function() {}
}
tng.prototype = new uib;

function ugj() {
    var a = this;
    this.ndz = null;
    this.value = 0;
    this.luo = false;
    this.pfb = "round";
    this.cqi = null;
    this.xmk = "bold";
    this.dpb = null;
    this.qin = null;
    this.pqf = null;
    this.yvb = null;
    this.axm = null;
    this.tyc = 0;
    this.brf = 6;
    this.wmf = -2;
    this.eru = 2;
    this.obr = -4;
    this.yop = 8;
    this.zpy = 26;
    this.rpw = 0;
    this.ons = 1;
    this.xye = 0;
    this.ves = 0;
    this.ypp = -1;
    this.iqa = 10;
    this.shf = 0;
    this.kuw = 0;
    this.caf = false;
    this.qze = -1;
    this.fun = true;
    this.kji = function(d, g, e, c, b, f) {
        ugj.prototype.kji.call(this, d, g, e, c, f);
        this.ndz = b;
        if (this.jdb) {
            this.tyc = Math.round(this.jdb.height / 2)
        }
    };
    this.gku = function(b) {
        try {
            this.pfb = b.otl;
            this.cqi = b.font;
            this.xmk = b.oav;
            this.dpb = b.backgroundColor;
            this.qin = b.jna;
            this.pqf = b.mcm;
            this.yvb = b.nst;
            if (b.wrh && b.ntj) {
                this.axm = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.axm.addColorStop(0, b.wrh);
                this.axm.addColorStop(1, b.ntj)
            } else {
                this.axm = b.wrh
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dly = function(b) {
        try {
            this.zpy = b.ufc;
            this.rpw = b.emc;
            this.brf = b.fev;
            this.wmf = b.vvx;
            this.eru = b.jun;
            this.obr = b.bgb;
            this.yop = b.hco;
            this.ons = b.ssz
        } catch (c) {
            console.error(c)
        }
    };
    this.oww = function() {
        if (this.rao()) {
            clearInterval(this.qze);
            this.qze = -1
        }
        this.fun = false;
        this.qze = setInterval(this.lgd, 400)
    };
    this.hkq = function() {
        this.fun = true;
        clearInterval(this.qze);
        this.qze = -1;
        this.kxt(false)
    };
    this.kxt = function(b, c) {
        this.caf = b;
        c = (c === false) ? false : true;
        if (c === true && this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.rao = function() {
        return (this.qze >= 0)
    };
    this.rkx = function(b, c) {
        this.value = b;
        if (c && c === true && this.yzw()) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.isk = function(b) {
        this.xye = Math.round(b / this.iqa);
        this.shf = 0;
        this.kuw = 0;
        this.ves = new Date().getTime();
        this.ypp = setTimeout(this.azp, this.xye)
    };
    this.wvj = function() {
        if (a.ypp >= 0) {
            clearTimeout(a.ypp);
            a.ypp = -1
        }
        a.shf = 0;
        a.kxw()
    };
    this.oel = function() {
        if (a.ypp >= 0) {
            clearInterval(a.ypp);
            a.ypp = -1
        }
        a.shf = 1;
        a.kxw()
    };
    this.azp = function() {
        var b = 0,
            c = new Date().getTime();
        a.kuw += 1;
        if (a.kuw < a.iqa) {
            a.shf += 1 / a.iqa;
            a.parent.jsb(a.x, a.y, a.width, a.height);
            b = a.xye + (a.kuw * a.xye - (c - a.ves));
            a.ypp = setTimeout(a.azp, b)
        } else {
            a.oel()
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            m = 0,
            j = 0,
            k = this.width / 2 - this.ons,
            d = (this.pfb === "roundedT" || this.pfb === "roundedL") ? this.yop : 0,
            b = (this.pfb === "roundedT" || this.pfb === "roundedR") ? this.yop : 0,
            n = (this.pfb === "roundedB" || this.pfb === "roundedR") ? this.yop : 0,
            p = (this.pfb === "roundedB" || this.pfb === "roundedL") ? this.yop : 0,
            e = 1,
            l = String(this.value),
            o = this.context2D;
        o.save();
        o.textAlign = "center";
        o.textBaseline = "bottom";
        if (this.caf || this.shf >= 1) {
            if (this.pfb === "round") {
                nbt.eea.bxq(o, this.x + this.width / 2, this.y + this.height / 2, k, this.qin, 1, this.axm, this.ons, 1)
            } else {
                if (this.pfb === "rect") {
                    nbt.eea.cjr(o, this.x, this.y, this.width, this.height, this.yop, this.qin, this.axm, this.ons)
                } else {
                    if (this.pfb === "roundedT" || this.pfb === "roundedB" || this.pfb === "roundedR" || this.pfb === "roundedL") {
                        nbt.eea.exs(o, this.x, this.y, this.width, this.height, d, b, n, p, this.qin, 1, this.axm, this.ons, 1)
                    }
                }
            }
            if (this.ndz || this.jdb) {
                if (this.umm()) {
                    o.drawImage((this.ndz) ? this.ndz : this.jdb, 0, this.tyc, this.jdb.width, this.tyc, this.x, this.y, this.width, this.height)
                } else {
                    o.drawImage((this.ndz) ? this.ndz : this.jdb, 0, 0, this.jdb.width, this.tyc, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.luo && this.aso() === false) {
                o.globalAlpha = 0.5
            }
            if (this.shf > 0) {
                if (this.pfb === "round") {
                    nbt.eea.bxq(o, this.x + this.width / 2, this.y + this.height / 2, k, this.dpb, 1 - this.kuw / this.iqa, this.axm, this.ons, 1);
                    nbt.eea.bxq(o, this.x + this.width / 2, this.y + this.height / 2, k, this.qin, this.kuw / this.iqa)
                } else {
                    if (this.pfb === "rect") {
                        vic = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        vic.addColorStop(1 - this.shf, this.dpb);
                        vic.addColorStop(1 - this.shf, this.qin);
                        nbt.eea.xss(o, this.x, this.y, this.width, this.height, this.yop, vic, 1, this.axm, this.ons, 1)
                    } else {
                        if (this.pfb === "roundedT" || this.pfb === "roundedB" || this.pfb === "roundedR" || this.pfb === "roundedL") {
                            vic = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            vic.addColorStop(1 - this.shf, this.dpb);
                            vic.addColorStop(1 - this.shf, this.qin);
                            nbt.eea.exs(o, this.x, this.y, this.width, this.height, d, b, n, p, vic, 1, this.axm, this.ons, 1)
                        }
                    }
                }
            } else {
                if (this.pfb === "round") {
                    nbt.eea.bxq(o, this.x + this.width / 2, this.y + this.height / 2, k, this.dpb, 1, this.axm, this.ons, 1)
                } else {
                    if (this.pfb === "rect") {
                        nbt.eea.cjr(o, this.x, this.y, this.width, this.height, this.yop, this.dpb, this.axm, this.ons)
                    } else {
                        if (this.pfb === "roundedT" || this.pfb === "roundedB" || this.pfb === "roundedR" || this.pfb === "roundedL") {
                            nbt.eea.exs(o, this.x, this.y, this.width, this.height, d, b, n, p, this.dpb, 1, this.axm, this.ons, 1)
                        }
                    }
                }
            }
            if (this.jdb) {
                if (this.umm()) {
                    o.drawImage(this.jdb, 0, this.tyc, this.jdb.width, this.tyc, this.x, this.y, this.width, this.height)
                } else {
                    o.drawImage(this.jdb, 0, 0, this.jdb.width, this.tyc, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (l && this.rpw > 0) {
            f = (this.umm()) ? 2 : 0;
            c = this.rpw;
            o.font = this.xmk + " " + c + "px " + this.cqi;
            o.fillStyle = this.yvb;
            m = o.measureText(l).width;
            if (m > this.width - 2 * this.brf) {
                e = ((this.width - 2 * this.brf) / m);
                c = Math.round(e * c) - 1;
                o.font = this.xmk + " " + c + "px " + this.cqi
            }
            if (c > this.height / 2 - this.brf) {
                e = ((this.height / 2 - this.brf) / c);
                c = Math.round(e * c) - 1;
                o.font = this.xmk + " " + c + "px " + this.cqi
            }
            j = (this.height / 2 - c) / 2;
            j += c;
            o.fillText(l, this.x + this.width / 2 + this.wmf, this.y - this.obr + j + f)
        }
        if (this.qre && this.qre != "" && this.zpy > 0) {
            g = this.qre.split("|");
            f = (this.umm()) ? 2 : 0;
            c = this.zpy;
            o.font = this.xmk + " " + c + "px " + this.cqi;
            o.fillStyle = this.pqf;
            for (var h = 0; h < g.length; h++) {
                m = (o.measureText(g[h]).width > m) ? o.measureText(g[h]).width : m
            }
            if (m > this.width - 2 * this.brf) {
                e = ((this.width - 2 * this.brf) / m);
                c = Math.round(e * c) - 1;
                o.font = this.xmk + " " + c + "px " + this.cqi
            }
            if (this.rpw > 0) {
                if (c * g.length > this.height / 2 - this.brf) {
                    e = ((this.height / 2 - this.brf) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    o.font = this.xmk + " " + c + "px " + this.cqi
                }
                j = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.brf) {
                    e = ((this.height - 2 * this.brf) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    o.font = this.xmk + " " + c + "px " + this.cqi
                }
                j = (this.height - c * g.length) / 2
            }
            j += c;
            for (var h = 0; h < g.length; h++) {
                o.fillText(g[h], this.x + this.width / 2 + this.wmf, this.y - this.eru + j + f);
                j += c
            }
        }
        o.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.lgd = function() {
        if (!a.fun) {
            a.kxt(!a.caf)
        }
    };
    this.gwb = function() {
        a.eka = false
    };
    this.kxw = function() {
        a.dxp = false;
        if (a.yzw()) {
            a.parent.jsb(a.x, a.y, a.width, a.height)
        }
    }
}
ugj.prototype = new tng;

function uxd() {
    var a = this;
    this.jsn = 0;
    this.kqb = 1;
    this.omm = null;
    this.wmt = null;
    this.pie = null;
    this.pfb = "round";
    this.cqi = null;
    this.xmk = "bold";
    this.xvf = "center";
    this.dpb = null;
    this.pqf = null;
    this.zqr = 1;
    this.axm = null;
    this.moj = 17;
    this.pvr = 2;
    this.yop = 0;
    this.ons = 1;
    this.dum = 0;
    this.mal = 0;
    this.grh = 0;
    this.dly = function(b) {
        try {
            this.moj = b.xwr;
            this.pvr = b.lrh;
            this.yop = b.hco;
            this.ons = b.ssz;
            this.grh = b.jgb
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(b) {
        try {
            this.pfb = b.otl;
            this.cqi = b.font;
            this.xmk = b.oav;
            this.xvf = b.textAlign;
            this.dpb = b.backgroundColor;
            this.pqf = b.mcm;
            this.zqr = b.tmj;
            if (b.wrh && b.ntj) {
                this.axm = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.axm.addColorStop(0, b.wrh);
                this.axm.addColorStop(1, b.ntj)
            } else {
                this.axm = b.wrh
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.smw = function() {
        return this.pfb
    };
    this.ubc = function(c, b) {
        this.jsn = c;
        this.kqb = b
    };
    this.hfu = function(b) {
        this.jdb = b;
        if (this.pfb === "round") {
            this.dum = this.width / 2 - this.pvr
        }
        if (this.jdb) {
            this.mal = Math.round(this.jdb.height / (2 * this.kqb))
        }
    };
    this.sqy = function(b) {
        this.jsn = (b < this.kqb) ? b : this.jsn
    };
    this.hue = function(b) {
        this.omm = b
    };
    this.gwb = function() {
        a.eka = false
    };
    this.kxw = function() {
        a.dxp = false;
        if (a.yzw()) {
            a.parent.jsb(a.x, a.y, a.width, a.height)
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var k = this.context2D,
            e = (this.aso()) ? this.zqr : this.zqr / 2,
            b = this.moj,
            d = null,
            c = 0,
            j = 0,
            h = 0,
            g = 0;
        k.save();
        if (this.jdb && this.kuc) {
            if (!this.aso()) {
                k.globalAlpha = e
            }
            if (this.pfb === "round") {
                nbt.eea.bxq(k, this.x + this.width / 2, this.y + this.height / 2, this.dum, this.dpb, e * this.zqr)
            } else {
                if (this.pfb === "rect") {
                    nbt.eea.xss(k, this.x, this.y, this.width, this.height, this.yop, this.dpb, e * this.zqr, this.axm, this.ons, e)
                }
            }
            if (this.umm()) {
                if (this.pfb === "round") {
                    k.drawImage(this.jdb, 0, (this.jsn * 2 * this.mal) + this.mal, this.jdb.width, this.mal, this.x, this.y, this.width, this.height)
                } else {
                    if (this.pfb === "rect") {
                        k.drawImage(this.jdb, 0, (this.jsn * 2 * this.mal) + this.mal, this.jdb.width, this.mal, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.pfb === "round") {
                    k.drawImage(this.jdb, 0, (this.jsn * 2 * this.mal), this.jdb.width, this.mal, this.x, this.y, this.width, this.height)
                } else {
                    if (this.pfb === "rect") {
                        k.drawImage(this.jdb, 0, (this.jsn * 2 * this.mal), this.jdb.width, this.mal, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.qre != null) {
                k.textAlign = this.xvf;
                k.textBaseline = "bottom";
                k.font = this.xmk + " " + b + "px " + this.cqi;
                k.fillStyle = this.pqf;
                d = this.qre.split("|");
                h = 0;
                g = (this.xvf === "center") ? this.x + this.width / 2 : (this.xvf === "left") ? this.x + 2 * this.pvr : this.x + this.width - 2 * this.pvr;
                for (var f = 0; f < d.length; f++) {
                    h = (k.measureText(d[f]).width > h) ? k.measureText(d[f]).width : h
                }
                if (h > this.width - 2 * this.pvr) {
                    c = ((this.width - 2 * this.pvr) / h);
                    b = Math.round(c * b) - 1;
                    k.font = this.xmk + " " + b + "px " + this.cqi
                }
                if (b * d.length > this.grh) {
                    c = ((this.grh) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    k.font = this.xmk + " " + b + "px " + this.cqi
                }
                j = (this.height - this.pvr - this.grh) + (this.grh - b * d.length) / 2;
                j += b;
                for (var f = 0; f < d.length; f++) {
                    k.fillText(d[f], g, this.y + j);
                    j += b
                }
            }
        }
        k.restore()
    }
}
uxd.prototype = new tng;

function ccc() {
    var a = this;
    this.pfb = "rect";
    this.zss = -1;
    this.cqi = null;
    this.xmk = "bold";
    this.dpb = null;
    this.zmv = null;
    this.xrb = null;
    this.ntb = null;
    this.qed = null;
    this.pqf = null;
    this.loh = null;
    this.yop = 3;
    this.wmf = -2;
    this.xas = 2;
    this.brf = 6;
    this.moj = 26;
    this.ons = 2;
    this.dly = function(b) {
        try {
            this.moj = b.xwr;
            this.wmf = b.vvx;
            this.xas = b.grq;
            this.brf = b.fev;
            this.yop = b.hco;
            this.ons = b.ssz
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(b) {
        try {
            this.cqi = b.font;
            this.xmk = b.oav;
            this.dpb = b.backgroundColor;
            this.zmv = b.bqc;
            this.xrb = b.ppg;
            this.ntb = b.rtb;
            this.qed = b.wrh;
            this.pqf = b.mcm;
            this.loh = b.zyf;
            this.pfb = b.otl;
            this.zss = b.xkx
        } catch (c) {
            console.error(c)
        }
    };
    this.smw = function() {
        return this.pfb
    };
    this.gwb = function() {
        a.eka = false
    };
    this.kxw = function() {
        a.dxp = false;
        if (a.yzw()) {
            a.parent.jsb(a.x, a.y, a.width, a.height)
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.dpb,
            m = this.zmv,
            b = this.moj,
            e = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            g = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.umm()) {
            n = (this.xrb != null) ? this.xrb : n;
            m = (this.ntb != null) ? this.ntb : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.pfb === "rect") {
                    if (this.qed) {
                        nbt.eea.cjr(p, this.x, this.y, this.width, this.height, this.yop, l, this.qed, this.ons)
                    } else {
                        nbt.eea.sfx(p, this.x, this.y, this.width, this.height, l, 1)
                    }
                } else {
                    if (this.pfb === "triangle") {
                        nbt.eea.mmi(p, this.zss, this.x, this.y, this.width, this.height, this.yop, l, 1, this.qed, this.ons, 1)
                    }
                }
            } else {
                if (this.pfb === "rect") {
                    if (this.qed) {
                        nbt.eea.cjr(p, this.x, this.y, this.width, this.height, this.yop, n, this.qed, this.ons, 1)
                    } else {
                        nbt.eea.sfx(p, this.x, this.y, this.width, this.height, n, 1)
                    }
                } else {
                    if (this.pfb === "triangle") {
                        nbt.eea.mmi(p, this.zss, this.x, this.y, this.width, this.height, this.yop, n, 1, this.qed, this.ons, 1)
                    }
                }
            }
        }
        if (this.jdb != null) {
            g = this.height - 2 * this.brf;
            p.drawImage(this.jdb, this.x + this.width / 2 - g / 2, this.y + this.brf, g, g)
        }
        if (this.qre != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            e = this.qre.split("|");
            d = 0;
            if (this.umm()) {
                d = 1;
                p.fillStyle = this.loh
            } else {
                p.fillStyle = this.pqf
            }
            p.font = this.xmk + " " + b + "px " + this.cqi;
            for (var f = 0, j = e.length; f < j; f++) {
                o = (p.measureText(e[f]).width > o) ? p.measureText(e[f]).width : o
            }
            if (o > this.width - 2 * this.brf) {
                c = ((this.width - 2 * this.brf) / o);
                b = Math.round(c * b) - 1;
                p.font = this.xmk + " " + b + "px " + this.cqi
            }
            if (b * e.length > this.height) {
                c = ((this.height) / (b * e.length));
                b = Math.round(c * b) - 1;
                p.font = this.xmk + " " + b + "px " + this.cqi
            }
            k = (this.height - b * e.length) / 2;
            k += b;
            for (var f = 0; f < e.length; f++) {
                p.fillText(e[f], (this.x + this.width / 2) + this.wmf, this.y - this.xas + k + d);
                k += b
            }
        }
        p.restore()
    }
}
ccc.prototype = new tng;

function enn() {
    var a = this;
    this.gwb = function() {
        a.eka = false
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.jdb != null) {
            b.drawImage(this.jdb, 0, 0, this.jdb.width, this.jdb.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
enn.prototype = new tng;

function thc() {
    var a = this;
    this.hjv = null;
    this.izi = 0;
    this.gwh = [];
    this.dpb = null;
    this.udf = null;
    this.pit = null;
    this.rhd = new hla();
    this.kji = function(b, d, c) {
        thc.prototype.kji.call(this, b, d, c);
        this.tte = false;
        this.izi = 0;
        this.gwh = [];
        this.epl()
    };
    this.epl = function() {
        this.hjv = new unx();
        this.hjv.kji();
        this.hjv.ptx("buttons")
    };
    this.dly = function(f) {
        try {
            var d = this.hjv.qbc("buttons"),
                c = 0,
                b = d.length;
            this.rhd = f.yry;
            for (; c < b; c++) {
                d[c].dly(f.ixf)
            }
            this.hjv.dse("return", "#pki", [f.xnb]);
            this.hjv.dse("page", "#pki", [f.zeo]);
            this.hjv.dse("prev", "#pki", [f.ehm]);
            this.hjv.dse("next", "#pki", [f.vzc])
        } catch (g) {
            console.error(g)
        }
    };
    this.gku = function(d) {
        try {
            var f = this.hjv.qbc("buttons");
            this.dpb = d.backgroundColor;
            this.udf = d.eng;
            this.pit = d.bmp;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].gku((this.parent.jpo.hnx === false) ? d.ggy : (this.parent.yjg === nbt.jpo.toy) ? d.hqx : d.ked)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.kbv = function(l, k) {
        var h = this.hjv.qbc("buttons"),
            g = this.hjv.ljc("return"),
            c = l - this.x,
            m = k - this.y;
        for (var e = 0, f = h.length; e < f; e++) {
            var b = h[e];
            if (c >= b.x && c <= b.x + b.width && m >= b.y && m <= b.y + b.height && b.yzw() == true) {
                if (b.aso() && !b.mkr()) {
                    if (b != g) {
                        b.mat(true, true)
                    }
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn");
                    b.kuc();
                    for (var d = 0; d < f; d++) {
                        h[d].hau(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.zot = function() {
        var e = this.hjv.qbc("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.umm() === true) {
                c.mat(false, true);
                return true
            }
        }
        return false
    };
    this.qck = function(h) {
        var g = this.hjv.qbc("buttons"),
            c = this.hjv.ljc("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (h == d.lii) {
                if (d.aso() && !d.mkr()) {
                    if (d != c) {
                        d.mat(true, true)
                    }
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn");
                    d.kuc();
                    for (var e = 0; e < b; e++) {
                        g[e].hau(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qsz = function() {
        var e = this.hjv.qbc("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.umm() === true) {
                c.mat(false, true);
                return true
            }
        }
        return false
    };
    this.fmx = function(b, c) {
        if (c && c === true) {
            this.gwh.unshift(b);
            this.izi++
        } else {
            this.gwh.push(b)
        }
    };
    this.gbt = function(b) {
        if (b && b === true) {
            this.gwh.shift();
            this.izi--
        } else {
            this.gwh.pop()
        }
    };
    this.gmy = function() {
        return this.gwh.length
    };
    this.pht = function(e, c, b) {
        var d = (this.parent.jpo.hnx === false) ? c.ggy : (this.parent.yjg === nbt.jpo.toy) ? c.hqx : c.ked;
        if (this.parent.xsu === false) {
            this.hjv.xih("return", this.jwz(e.xnb, this.parent.language.ret, (this.parent.jpo.zpk === false) ? b : this.parent.uck.cft("btn_re"), this.mrt, (this.parent.neu.rkt) ? this.parent.neu.rkt : null, e.ixf, d), ["buttons"]);
            this.hjv.xih("page", this.jwz(e.zeo, (this.izi + 1) + "/" + this.gwh.length, b, this.wzb, null, e.ixf, d), ["buttons"]);
            this.hjv.xih("prev", this.jwz(e.ehm, this.parent.language.iup, (this.parent.jpo.zpk === false) ? b : this.parent.uck.cft("btn_pr"), this.dio, (this.parent.neu.zzl) ? this.parent.neu.zzl : null, e.ixf, d), ["buttons"]);
            this.hjv.xih("next", this.jwz(e.vzc, this.parent.language.eiw, (this.parent.jpo.zpk === false) ? b : this.parent.uck.cft("btn_ne"), this.wzb, (this.parent.neu.tgu) ? this.parent.neu.tgu : null, e.ixf, d), ["buttons"])
        }
    };
    this.jwz = function(g, i, b, h, d, f, e) {
        var c = new ugj();
        c.kji(g, this.context2D, null, b, null, i);
        c.parent = this;
        c.kuc = h;
        c.dly(f);
        c.gku(e);
        if (d) {
            c.lii = d.urj
        }
        return c
    };
    this.jsb = function(l, j, m, e) {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.hjv.qbc("buttons"),
            d = null;
        if (this.parent.jpo.hnx === false) {
            d = this.parent.uck.cft("btn_back")
        } else {
            if (this.parent.yjg === nbt.jpo.toy) {
                d = (this.parent.uck.cft("h_right" + this.izi) != null) ? this.parent.uck.cft("h_right" + this.izi) : this.parent.uck.cft("h_right")
            } else {
                d = (this.parent.uck.cft("h_left" + this.izi) != null) ? this.parent.uck.cft("h_left" + this.izi) : this.parent.uck.cft("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.izi >= 0 && this.izi < this.gwh.length) {
            this.gwh[this.izi].jsb()
        }
        if (d) {
            k = n.createLinearGradient(this.rhd.x, this.rhd.y, this.rhd.x + this.rhd.width, this.rhd.y);
            k.addColorStop(0.2, this.udf);
            k.addColorStop(1, this.pit);
            n.fillStyle = k;
            n.save();
            if (this.parent.jpo.hnx === false) {
                if (this.parent.yjg === nbt.jpo.gut) {
                    n.translate(this.rhd.width / 2, this.rhd.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.rhd.width / 2, -this.rhd.height / 2)
                }
                n.fillRect(this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height)
            }
            n.drawImage(d, this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height);
            n.restore()
        } else {
            if (this.dpb != null) {
                n.fillStyle = this.dpb;
                n.fillRect(this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].jsb()
        }
        n.restore();
        if (this.nsm && this.scy) {
            if (b) {
                this.nsm.drawImage(this.scy, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.nsm.drawImage(this.scy, this.x, this.y)
            }
        }
    };
    this.rxg = function(f, g) {
        var e = this.hjv.ljc("page"),
            c = this.hjv.ljc("return"),
            b = this.hjv.ljc("next"),
            d = this.hjv.ljc("prev");
        if (e != null) {
            e.lun((this.izi + 1) + "/" + this.gwh.length)
        }
        if (c != null) {
            c.uzk(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.gwh.length > 1) {
                    b.uzk(f);
                    d.uzk(f);
                    e.uzk(f)
                } else {
                    b.uzk(false);
                    d.uzk(false);
                    e.uzk(false)
                }
            } else {
                b.uzk(f);
                d.uzk(f);
                e.uzk(f)
            }
        }
        if (g && g === true) {
            this.jsb()
        }
    };
    this.jxl = function() {
        this.izi = 0;
        this.rxg(true);
        this.uzk(true, true)
    };
    this.fon = function() {
        this.rxg(false);
        this.uzk(false, true)
    };
    this.wod = function() {
        var d = this.hjv.ljc("page"),
            b = this.hjv.ljc("next"),
            c = this.hjv.ljc("prev");
        this.izi = (this.izi < this.gwh.length) ? this.izi : this.gwh.length - 1;
        this.izi = (this.izi < 0) ? 0 : this.izi;
        d.lun((this.izi + 1) + "/" + this.gwh.length, true);
        if (this.gwh.length == 1) {
            b.uzk(false);
            c.uzk(false);
            d.uzk(false)
        } else {
            b.uzk(true);
            c.uzk(true);
            d.uzk(true)
        }
    };
    this.qrc = function(c) {
        var e = this.hjv.qbc("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].ecu(c)
        }
    };
    this.mrt = function() {
        a.parent.wyy()
    };
    this.wzb = function() {
        var b = a.hjv.ljc("page");
        if (a.izi < a.gwh.length - 1) {
            a.izi++
        } else {
            a.izi = 0
        }
        if (b) {
            b.lun((a.izi + 1) + "/" + a.gwh.length, false)
        }
        a.jsb()
    };
    this.dio = function() {
        var b = a.hjv.ljc("page");
        if (a.izi > 0) {
            a.izi--
        } else {
            a.izi = a.gwh.length - 1
        }
        if (b) {
            b.lun((a.izi + 1) + "/" + a.gwh.length, false)
        }
        a.jsb()
    }
}
thc.prototype = new uib;

function fhi() {
    this.jdb = new Image();
    this.moc = null;
    this.edf = [];
    this.ctq = [];
    this.xao = null;
    this.cqi = null;
    this.xmk = "bold";
    this.gse = null;
    this.pqf = null;
    this.rpu = null;
    this.uen = 0;
    this.nkm = [];
    this.bpg = null;
    this.pzj = 40;
    this.moj = 18;
    this.dan = 1;
    this.kji = function(b, d, c, a) {
        this.jdb = a;
        this.edf = [];
        this.nkm = [];
        fhi.prototype.kji.call(this, b, d, c)
    };
    this.dly = function(a) {
        try {
            this.bpg = a.owf;
            this.nkm = a.xgo;
            this.moj = a.xwr;
            this.pzj = a.egt;
            this.dan = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.gku = function(a) {
        try {
            this.xao = a.jqk;
            this.cqi = a.font;
            this.xmk = a.oav;
            this.gse = a.ths;
            this.pqf = a.mcm;
            this.rpu = a.fud
        } catch (b) {
            console.error(b)
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.pqf;
        if (this.gse) {
            b.strokeStyle = this.gse
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.dan;
        b.font = this.xmk + " " + this.moj + "px " + this.cqi;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.jdb, 0, 0);
        if ((this.height - this.jdb.height) > 0) {
            var a = this.parent.rhd;
            b.drawImage(this.jdb, a.x, a.y, a.width, this.jdb.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.moc && this.bpg) {
            nbt.eea.fme(b, this.moc, this.rpu, this.bpg.x, this.bpg.y, this.bpg.width, this.bpg.height, this.xao, this.pzj, this.xmk)
        }
        for (var c = 0; c < this.edf.length; c++) {
            this.ukd(this.edf[c], this.nkm[c], this.moj, this.cqi)
        }
        b.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.jjc = function(h, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.ctq = [];
        b.save();
        b.font = this.xmk + " " + g + "px " + d;
        this.nwr(b, g, h, f, d);
        for (var e = 0, a = this.ctq.length; e < a; e++) {
            c = (f.height + this.uen) / (this.ctq.length + 1) * (e + 1);
            b.fillText(this.ctq[e], (f.x), f.y + c);
            if (this.gse != null && b.lineWidth >= 1) {
                b.strokeText(this.ctq[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.ukd = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.ctq = [];
        a.save();
        a.font = this.xmk + " " + f + "px " + c;
        this.nwr(a, f, g, e, c);
        for (var d = 0; d < this.ctq.length; d++) {
            b = (e.height + this.uen) / (this.ctq.length + 1) * (d + 1);
            a.fillText(this.ctq[d], (e.x + e.width / 2), e.y + b);
            if (this.gse != null && a.lineWidth >= 1) {
                a.strokeText(this.ctq[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.nwr = function(l, n, k, g, b) {
        var a = 1,
            j = 0,
            h = "",
            f = 0,
            d = 0,
            c = 0,
            m = 0;
        m = l.measureText(k).width / g.width;
        m = (m >= Math.round(m)) ? Math.round(m) + 1 : Math.round(m);
        this.uen = n;
        if (this.uen * m > g.height) {
            a = g.height / (this.uen * m);
            this.uen = Math.round(a * this.uen) - 1;
            l.font = this.xmk + " " + this.uen + "px " + b;
            m = l.measureText(k).width / g.width;
            m = (m > Math.round(m)) ? Math.round(m) + 1 : Math.round(m)
        }
        for (var e = c; e < k.length; e++) {
            h += k.charAt(e);
            j = l.measureText(h).width;
            if (k.charAt(e) == " ") {
                f = e
            }
            if (e == k.length - 1) {
                this.ctq[d] = k.substring(c, k.length)
            } else {
                if (j >= g.width) {
                    this.ctq[d] = k.substring(c, f);
                    d++;
                    c = f + 1;
                    h = k.substring(f + 1, e)
                }
            }
        }
    }
}
fhi.prototype = new uib;

function wnf() {
    var a = this;
    this.jdb = new Image();
    this.kzu = "";
    this.sps = "";
    this.qqo = -1;
    this.nmq = 0;
    this.plv = 0;
    this.tqn = 5000;
    this.cqi = null;
    this.xmk = "bold";
    this.pqf = null;
    this.dpb = null;
    this.qed = null;
    this.yop = 0;
    this.dqb = 0;
    this.brf = 0;
    this.ons = 0;
    this.xas = 0;
    this.moj = 0;
    this.kwj = null;
    this.tkp = 0;
    this.cvq = [];
    this.lba = 0;
    this.yyb = true;
    this.tna = 0;
    this.dly = function(b) {
        try {
            this.moj = b.xwr;
            this.xas = b.grq;
            this.yop = b.hco;
            this.dqb = b.gfh;
            this.brf = b.fev;
            this.ons = b.ssz
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(b) {
        try {
            this.cqi = b.font;
            this.xmk = b.oav;
            this.dpb = b.backgroundColor;
            this.pqf = b.mcm;
            this.qed = b.wrh
        } catch (c) {
            console.error(c)
        }
    };
    this.hmm = function(e, c, d, b) {
        this.kzu = e;
        this.sps = c;
        this.qqo = d;
        this.nmq = b;
        this.yyb = true;
        clearTimeout(this.tna);
        if (this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.ljw = function(b, c) {
        this.kzu = b;
        this.sps = undefined;
        this.yyb = c;
        if (this.yyb) {
            clearTimeout(this.tna)
        }
        if (this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.uqp = function() {
        this.kzu = "";
        this.sps = undefined;
        this.yyb = true;
        clearTimeout(this.tna);
        if (this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.tlc = function(b, c) {
        this.tkp = 0;
        this.lba = b;
        this.yyb = false;
        if (c && c > 0) {
            this.tna = setTimeout(this.gvm, c)
        } else {
            this.tna = setTimeout(this.gvm, this.tqn)
        }
    };
    this.eyh = function(b) {
        this.tkp = 0;
        this.lba = b;
        if (this.yyb) {
            this.ljw(this.cvq[this.lba][this.tkp], false)
        }
        this.yyb = false;
        this.tna = setTimeout(this.gvm, this.tqn)
    };
    this.xgs = function() {
        this.yyb = false;
        this.tna = setTimeout(this.gvm, this.tqn)
    };
    this.vub = function() {
        this.yyb = true;
        clearTimeout(this.tna)
    };
    this.pkb = function() {
        return this.yyb
    };
    this.gvm = function() {
        if (!a.yyb) {
            a.tkp = (a.cvq[a.lba][a.tkp + 1] != undefined) ? a.tkp + 1 : 0;
            a.tna = setTimeout(a.gvm, a.tqn);
            a.ljw(a.cvq[a.lba][a.tkp], a.yyb)
        }
    };
    this.dam = function(b) {
        this.cvq[b] = []
    };
    this.qbp = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.cvq[b][c] = d[c]
        }
    };
    this.zlg = function(b) {
        this.kwj = b
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var n = this.context2D,
            l = this.moj,
            b = 0,
            j = 0,
            k = 0,
            h = 0,
            m = 0,
            r = 0,
            v = 0,
            e = 0,
            g = [],
            d = "",
            u = 0,
            z = 0,
            s = 0,
            f = 1,
            q = 0,
            p = (this.qed && this.ons) ? this.brf + this.ons : this.brf;
        n.save();
        if (this.dpb) {
            nbt.eea.cjr(n, this.x, this.y, this.width, this.height, this.yop, this.dpb, this.qed, this.ons)
        } else {
            if (this.kwj) {
                n.putImageData(this.kwj, this.x, this.y)
            }
        }
        n.lineJoin = "round";
        n.lineCap = "round";
        n.fillStyle = this.pqf;
        n.font = this.xmk + " " + l + "px " + this.cqi;
        n.textBaseline = "bottom";
        n.textAlign = "center";
        k = n.measureText(this.kzu).width;
        b += k;
        m = n.measureText("WW").width;
        if (this.sps != undefined && this.qqo >= 0) {
            h = n.measureText(this.sps).width;
            b += h;
            b += this.nmq * (this.jdb.width + this.dqb);
            if (this.nmq % 2 != 0) {
                r = this.x + (this.width) / 2 - (this.nmq / 2) * (this.jdb.width + this.dqb);
                v = r - m;
                e = r + (this.nmq) * (this.jdb.width + this.dqb) + m
            } else {
                r = this.x + (this.width) / 2 - (this.nmq / 2) * (this.jdb.width) - (this.nmq - 1) / 2 * this.dqb;
                v = r - m;
                e = r + (this.nmq) * (this.jdb.width) + (this.nmq - 1) * this.dqb + m
            }
            for (var t = 0; t < this.nmq; t++) {
                n.drawImage(this.jdb, 0, this.plv * this.qqo, this.jdb.width, this.plv, r + (t * (this.dqb + this.jdb.width)), this.y + ((this.height - this.plv) / 2), this.jdb.width, this.plv)
            }
            n.textAlign = "right";
            n.fillText(this.kzu, v, this.y + l + this.xas);
            n.textAlign = "left";
            n.fillText(this.sps, e, this.y + l + this.xas)
        } else {
            if (this.kzu != undefined) {
                do {
                    if (g.length > 1) {
                        l -= 2;
                        n.font = this.xmk + " " + l + "px " + this.cqi
                    }
                    g = [];
                    d = "";
                    u = 0;
                    z = 0;
                    s = 0;
                    for (var o = s; o < this.kzu.length; o++) {
                        d += this.kzu.charAt(o);
                        j = n.measureText(d).width;
                        if ((this.kzu.charAt(o) == " ") || (this.kzu.charAt(o) == "|")) {
                            u = o
                        }
                        if (o == this.kzu.length - 1) {
                            g[z] = this.kzu.substring(s, this.kzu.length)
                        } else {
                            if (this.kzu.charAt(o) == "|") {
                                g[z] = this.kzu.substring(s, u);
                                z++;
                                s = u + 1;
                                d = this.kzu.substring(u + 1, o)
                            } else {
                                if (j >= this.width - 2 * p) {
                                    g[z] = this.kzu.substring(s, u);
                                    z++;
                                    s = u + 1;
                                    d = this.kzu.substring(u + 1, o)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && l == this.moj) {
                    n.font = this.xmk + " " + (l - 3) + "px " + this.cqi;
                    f = 0
                }
                for (var o = 0; o < g.length; o++) {
                    q = (this.height + l) / (g.length + 1) * (o + 1);
                    n.fillText(g[o], (this.x + this.width / 2), this.y + q + f)
                }
            }
        }
        n.restore()
    }
}
wnf.prototype = new uib;

function pcm() {
    var a = this;
    this.cqi = null;
    this.xmk = "bold";
    this.dpb = "rgb(0,0,0)";
    this.zmv = null;
    this.pqf = "rgb(255,255,255)";
    this.udo = null;
    this.qed = "rgb(60,60,60)";
    this.hwc = null;
    this.evv = null;
    this.ere = false;
    this.xke = [];
    this.mmc = [];
    this.iab = null;
    this.jvl = 19;
    this.oxy = 15;
    this.bfv = 120;
    this.wmf = 2;
    this.xas = 2;
    this.awz = 2;
    this.aal = 10;
    this.moj = 12;
    this.kji = function(b, d, c) {
        pcm.prototype.kji.call(this, b, d, c)
    };
    this.dly = function(b) {
        try {
            this.moj = b.xwr;
            this.jvl = b.ucj;
            this.oxy = b.poc;
            this.bfv = b.lmt;
            this.wmf = b.vvx;
            this.xas = b.grq;
            this.awz = b.zwb;
            this.aal = b.lnc
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(b) {
        try {
            this.cqi = b.font;
            this.xmk = b.oav;
            this.dpb = b.backgroundColor;
            this.zmv = b.bqc;
            this.pqf = b.mcm;
            this.qed = b.wrh;
            this.udo = b.ntj;
            if (this.zmv) {
                this.hwc = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.hwc.addColorStop(0, this.zmv);
                this.hwc.addColorStop(0.5, this.dpb)
            } else {
                this.hwc = this.dpb
            }
            if (this.udo) {
                this.evv = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.evv.addColorStop(0, this.udo);
                this.evv.addColorStop(1, this.qed)
            } else {
                this.evv = this.qed
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.kbv = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.aal : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.aso()) {
            this.parent.ruo();
            return true
        }
        return false
    };
    this.szu = function(d, b, c) {
        this.mmc.push({
            id: d,
            zak: b,
            value: c,
            hlk: null
        })
    };
    this.umg = function(e, c, d, b) {
        this.mmc.push({
            id: e,
            zak: c,
            value: d,
            hlk: b
        })
    };
    this.dzj = function(d, b, c) {
        this.xke.push({
            id: d,
            qpx: b,
            value: c
        })
    };
    this.sqy = function(e, d) {
        for (var c = 0, b = this.mmc.length; c < b; c++) {
            if (this.mmc[c].id == e) {
                this.mmc[c].value = d;
                return true
            }
        }
        return false
    };
    this.jgk = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.hue = function(e, d) {
        for (var c = 0, b = this.xke.length; c < b; c++) {
            if (this.xke[c].id == e) {
                if (this.xke[c].value != d) {
                    this.xke[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.lte = function(b) {
        this.iab = b
    };
    this.ecu = function(b) {
        this.ere = b
    };
    this.aso = function(b) {
        return this.ere
    };
    this.oxd = function(c, b) {
        if (this.sqy(c, b)) {
            window.uwy(a.jsb)
        }
    };
    this.hty = function(c, b) {
        if (this.hue(c, b)) {
            window.uwy(a.jsb)
        }
    };
    this.thx = function(b) {
        this.lte(b);
        window.uwy(a.jsb)
    };
    this.jsb = function() {
        if (!a.yzw() || !a.parent.gpv()) {
            return
        }
        var e = (a.height - a.moj) / 2 + a.xas,
            c = a.wmf + a.jvl * a.mmc.length,
            d = a.width - c - (a.bfv * a.xke.length),
            b = a.context2D;
        b.save();
        nbt.eea.sfx(b, 0, 0, a.width, a.height, a.hwc, 1);
        a.wcb(b, e);
        a.jav(b, e);
        if (a.iab && a.iab != "") {
            nbt.eea.fme(b, a.iab, a.pqf, c, e, d, a.moj, a.cqi, a.moj, a.xmk)
        } else {
            if (a.aso()) {
                a.cys(b)
            }
        }
        a.qaf(b, 0, a.height - a.awz / 2, a.width, a.height - a.awz / 2);
        b.restore();
        if (a.nsm && a.scy) {
            a.nsm.drawImage(a.scy, a.x, a.y)
        }
    };
    this.wcb = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.mmc.length; f < b; f++) {
            if (this.mmc[f].hlk) {
                var e = this.jgk(this.mmc[f].hlk, this.mmc[f].value);
                if (this.mmc[f].zak instanceof Array) {
                    nbt.eea.fme(d, this.mmc[f].zak[e], this.pqf, c, g, this.jvl, this.moj, this.cqi, this.moj, this.xmk)
                } else {
                    if (this.mmc[f].zak instanceof Image || this.mmc[f].zak instanceof HTMLCanvasElement) {
                        d.drawImage(this.mmc[f].zak, e * this.oxy, 0, this.oxy, this.mmc[f].zak.height, c + this.wmf, g - this.xas, this.jvl - 2 * this.wmf, this.moj)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.mmc[f].value == true) ? 1 : 0.3;
                if (this.mmc[f].zak instanceof String) {
                    nbt.eea.fme(d, this.mmc[f].zak, this.pqf, c, g, this.jvl, this.moj, this.cqi, this.moj, this.xmk)
                } else {
                    if (this.mmc[f].zak instanceof Image || this.mmc[f].zak instanceof HTMLCanvasElement) {
                        d.drawImage(this.mmc[f].zak, c + this.wmf, g - this.xas, this.jvl - 2 * this.wmf, this.moj)
                    }
                }
                d.restore()
            }
            c += this.jvl;
            this.qaf(d, c, 0, c, this.height)
        }
        return c
    };
    this.jav = function(d, f) {
        var c = this.width - this.wmf - this.bfv * this.xke.length;
        for (var e = 0, b = this.xke.length; e < b; e++) {
            if (this.xke[e].id == "freeplay") {
                nbt.eea.sfx(d, c, 0, this.bfv, this.height, "red", 0.4)
            } else {
                if (this.xke[e].id == "freespin") {
                    nbt.eea.sfx(d, c, 0, this.bfv, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.qaf(d, c, 0, c, this.height);
            nbt.eea.fme(d, this.xke[e].qpx + this.xke[e].value, this.pqf, c, f, this.bfv, this.moj, this.cqi, this.moj, this.xmk);
            c += this.bfv
        }
    };
    this.qaf = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.evv;
        b.lineWidth = this.awz;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.cys = function(c) {
        if (this.parent.com.ljc("topb") == null) {
            return
        }
        var g = 3 * this.height,
            h = this.awz,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            j = this.awz;
        c.save();
        c.strokeStyle = this.qed;
        c.lineWidth = h;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, j);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - j - h) - f * 2 * h));
            c.lineTo(b + g - (e - 1) * f, j)
        }
        c.stroke();
        c.restore()
    }
}
pcm.prototype = new uib;

function enp() {
    var b = this;
    var c = 0;
    var a = 1;
    this.zrq = 7;
    this.keo = 89;
    this.dgn = 10000;
    this.hjv = null;
    this.ere = false;
    this.svu = false;
    this.qkr = -1;
    this.hoj = 0;
    this.cqi = null;
    this.xmk = "bold";
    this.dpb = "black";
    this.gse = null;
    this.shl = null;
    this.ywa = null;
    this.pqf = "white";
    this.bzn = 0.8;
    this.oue = 0;
    this.hnz = 0;
    this.rih = 0;
    this.zla = 0;
    this.awi = 0;
    this.nyd = 0;
    this.cup = 0;
    this.wmf = 10;
    this.xas = 5;
    this.pvr = 10;
    this.ivc = this.wmf;
    this.rem = 10;
    this.mzg = 20;
    this.amw = 40;
    this.ons = 4;
    this.moj = 10;
    this.ows = null;
    this.hte = null;
    this.gxs = "";
    this.rky = null;
    this.kji = function(d, f, e) {
        enp.prototype.kji.call(this, d, f, e);
        this.hjv = new unx();
        this.hjv.kji();
        this.hjv.ptx("buttons");
        this.hjv.ptx("system");
        this.hjv.ptx("setting")
    };
    this.dly = function(d) {
        try {
            this.moj = d.xwr;
            this.rem = d.dia;
            this.mzg = d.ugy;
            this.amw = d.arw;
            this.ons = d.ssz;
            this.wmf = d.vvx;
            this.xas = d.grq;
            this.pvr = d.lrh
        } catch (f) {
            console.error(f)
        }
    };
    this.gku = function(g, l) {
        try {
            var j = this.hjv.qbc("buttons"),
                h = (l === true) ? g.slc.ggy : g.yiz.ggy;
            this.cqi = g.font;
            this.xmk = g.oav;
            this.dpb = g.backgroundColor;
            this.gse = g.ths;
            this.shl = g.agy;
            this.pqf = g.mcm;
            this.bzn = g.otf;
            if (this.gse && this.shl) {
                this.ywa = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.ywa.addColorStop(0, this.gse);
                this.ywa.addColorStop(0.5, this.shl);
                this.ywa.addColorStop(1, this.gse)
            }
            for (var f = 0, d = j.length; f < d; f++) {
                j[f].gku(h)
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.kbv = function(o, n) {
        var m = this.hjv.eej(),
            p = this.hjv.ljc("audio"),
            q = this.hjv.ljc("language"),
            f = this.hjv.ljc("history"),
            e = o - this.x,
            d = n - this.y;
        if (this.svu) {
            return true
        }
        for (var k = 0, l = m.length; k < l; k++) {
            var g = m[k];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.yzw()) {
                if (g.aso() && !g.mkr()) {
                    if (g != p && g != q) {
                        this.parent.uck.aqn("btn");
                        this.parent.uck.gyl("btn")
                    }
                    g.mat(true, true, false);
                    g.kuc();
                    for (var h = 0; h < l; h++) {
                        m[h].hau(true)
                    }
                    if (g != f) {
                        if (this.qkr >= 0) {
                            clearTimeout(this.qkr);
                            this.qkr = -1
                        }
                        this.qkr = setTimeout(this.cpq, this.dgn)
                    }
                }
                return true
            }
        }
        if (this.yzw() && this.aso()) {
            if (o < this.x + this.awi || o > this.x + this.awi + this.nyd || n < this.y || n > this.y + this.height) {
                if (this.qkr >= 0) {
                    clearTimeout(this.qkr);
                    this.qkr = -1
                }
                return false
            }
        }
        return true
    };
    this.zot = function() {
        var g = this.hjv.eej();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.umm() == true) {
                e.mat(false, true);
                return true
            }
        }
        return false
    };
    this.qck = function(e) {
        var n = this.hjv.eej(),
            d = this.hjv.qbc("system"),
            l = this.hjv.qbc("setting"),
            p = this.hjv.ljc("audio"),
            k = 0,
            h = 0,
            m = 0,
            g = 0;
        if (this.svu) {
            return true
        }
        for (k = 0, m = l.length; k < m; k++) {
            var f = l[k];
            if ((e == f.lii || e == f.bmi) && !f.mkr()) {
                if (f != p) {
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn")
                }
                f.mat(true, true, false);
                f.kuc();
                for (h = 0, g = n.length; h < g; h++) {
                    n[h].hau(true)
                }
                if (this.qkr >= 0) {
                    clearTimeout(this.qkr);
                    this.qkr = -1
                }
                return true
            }
        }
        for (k = 0, m = d.length; k < m; k++) {
            var f = d[k];
            if ((e == f.lii || e == f.bmi) && f.aso() && !f.mkr()) {
                if (f != p) {
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn")
                }
                f.mat(true, true, false);
                f.kuc();
                for (h = 0, g = n.length; h < g; h++) {
                    n[h].hau(true)
                }
                if (this.qkr >= 0) {
                    clearTimeout(this.qkr);
                    this.qkr = -1
                }
                return true
            }
        }
        if (this.yzw() && this.aso()) {
            if (this.parent.neu) {
                for (k = 0, m = this.parent.neu.avk.length; k < m; k++) {
                    var o = this.parent.neu.avk[k];
                    if (o.urj == e || o.urj == e) {
                        if (this.qkr >= 0) {
                            clearTimeout(this.qkr);
                            this.qkr = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.qsz = function() {
        var g = this.hjv.eej();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.umm() == true) {
                e.mat(false, true, false);
                return true
            }
        }
        return false
    };
    this.cbp = function(e, l) {
        var j = this.hjv.eej(),
            k = e - this.x,
            h = l - this.y;
        this.hte = this.ows;
        this.ows = null;
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (k >= f.x && k <= f.x + f.width && h >= f.y && h <= f.y + f.height && f.yzw() && f.aso() && !f.mkr()) {
                this.ows = f
            }
        }
        if (this.ows) {
            this.sgw(true)
        } else {
            this.sgw(false)
        }
        return true
    };
    this.dzi = function(e, f, g, h, k, d, l) {
        this.cup = g.width;
        var j = new hla(this.ivc, this.xas, this.cup, this.cup);
        var i = new uxd();
        i.kji(j, this.context2D);
        i.parent = this;
        i.kuc = h;
        i.omm = f;
        i.ubc(d, l);
        i.dly(this.parent.jpo.mps.ixf);
        i.gku(this.parent.style.mps.yiz.ggy);
        i.hfu(g);
        if (k != null) {
            i.bmi = k.gfb;
            i.lii = k.urj;
            i.wmt = k.value
        }
        this.hjv.xih(e, i, ["buttons", "setting"]);
        this.ivc += this.cup + this.wmf;
        this.nyd = this.ivc
    };
    this.cnd = function(j, i, h, g, e) {
        this.cup = h.width;
        var f = new hla(this.ivc, this.xas, this.cup, this.cup);
        var d = new uxd();
        d.kji(f, this.context2D);
        d.parent = this;
        d.kuc = g;
        d.omm = i;
        d.dly(this.parent.jpo.mps.ixf);
        d.gku(this.parent.style.mps.yiz.ggy);
        d.hfu(h);
        if (e != null) {
            d.bmi = e.gfb;
            d.lii = e.urj;
            d.wmt = e.value
        }
        this.hjv.xih(j, d, ["buttons", "system"]);
        this.ivc += this.cup + this.wmf;
        this.nyd = this.ivc
    };
    this.xec = function() {
        var f = this.hjv.eej();
        this.nyd += 2 * this.pvr;
        this.awi = Math.round((this.width - this.nyd) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.awi + this.pvr
        }
    };
    this.hmg = function() {
        return this.nyd
    };
    this.ecu = function(d) {
        this.ere = d
    };
    this.aso = function() {
        return this.ere
    };
    this.qrc = function(g) {
        var f = this.hjv.eej();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ecu(g)
        }
        this.parent.jsb()
    };
    this.xik = function(g) {
        var f = this.hjv.qbc("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ecu(g)
        }
        this.parent.jsb()
    };
    this.ukk = function(g) {
        var f = this.hjv.qbc("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].ecu(g)
        }
        this.parent.jsb()
    };
    this.jxl = function() {
        if (this.yzw()) {
            return
        }
        if (this.svu) {
            if (this.zla === a) {
                this.rky = this.jxl
            } else {
                this.rky = null
            }
        } else {
            this.rky = null;
            this.lgi();
            this.ssj()
        }
    };
    this.yjz = function(d) {
        if (this.parent.osa) {
            this.parent.osa()
        }
        this.stop();
        this.svu = false;
        this.rky = null;
        this.uzk(true, d);
        if (this.qkr >= 0) {
            clearTimeout(this.qkr);
            this.qkr = -1
        }
        this.qkr = setTimeout(this.cpq, this.dgn)
    };
    this.cpq = function() {
        if (b.yzw()) {
            b.parent.uck.aqn("panel_out");
            b.parent.uck.gyl("panel_out");
            b.fon()
        }
    };
    this.fon = function() {
        if (!this.yzw()) {
            return
        }
        if (this.svu) {
            if (this.zla === c) {
                this.rky = this.fon
            } else {
                this.rky = null
            }
        } else {
            this.rky = null;
            this.ngo();
            this.ssj();
            if (this.qkr >= 0) {
                clearTimeout(this.qkr);
                this.qkr = -1
            }
        }
    };
    this.mcb = function(d) {
        if (this.parent.vot) {
            this.parent.vot()
        }
        this.stop();
        this.svu = false;
        this.rky = null;
        this.uzk(false, d);
        if (typeof this.ioq === "function") {
            this.ioq();
            this.ioq = null
        }
    };
    this.lgi = function() {
        this.uzk(true);
        this.svu = true;
        this.ere = false;
        this.zla = c;
        this.oue = Math.floor(this.height / this.zrq);
        this.rih = 1;
        this.hnz = Math.floor(this.height / this.zrq)
    };
    this.ngo = function() {
        if (this.parent.vot) {
            this.parent.vot()
        }
        this.svu = true;
        this.ere = false;
        this.zla = a;
        this.oue = -Math.floor(this.height / this.zrq);
        this.rih = 1;
        this.hnz = this.height
    };
    this.ssj = function() {
        this.hoj = setInterval(this.jcj, this.keo)
    };
    this.kpf = function() {
        if (b.zla == c) {
            if (b.parent.osa) {
                b.parent.osa()
            }
            if (b.qkr >= 0) {
                clearTimeout(b.qkr);
                b.qkr = -1
            }
            b.qkr = setTimeout(b.cpq, b.dgn)
        }
        clearInterval(b.hoj);
        if (b.rky) {
            b.rky()
        }
    };
    this.stop = function() {
        clearTimeout(this.qkr);
        clearInterval(this.hoj);
        this.qkr = -1
    };
    this.jcj = function() {
        if (!b.oum()) {
            b.kpf()
        }
    };
    this.oum = function() {
        if (b.rih < b.zrq) {
            b.parent.jsb(b.x, b.y, b.width, b.height);
            b.hnz += b.oue;
            b.rih++;
            return true
        } else {
            b.svu = false;
            b.ere = true;
            if (b.zla == a) {
                b.uzk(false);
                if (typeof b.ioq === "function") {
                    b.ioq();
                    b.ioq = null
                }
            }
            b.parent.jsb(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.jsb = function(n, m, o, g) {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.hjv.eej(),
            k = 0,
            d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.xpa(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].jsb()
        }
        if (this.ows && this.gxs != "") {
            k = this.ows.x - this.wmf - this.cup;
            d = 3 * this.cup + 2 * this.wmf;
            if (k + d >= this.awi + this.nyd) {
                k = this.awi + this.nyd - d;
                nbt.eea.pdk(p, this.gxs, this.pqf, k, this.ows.y + this.ows.height, d, this.moj, this.cqi, this.moj, this.xmk, this.wmf)
            } else {
                nbt.eea.fme(p, this.gxs, this.pqf, k, this.ows.y + this.ows.height, d, this.moj, this.cqi, this.moj, this.xmk)
            }
        }
        p.restore();
        if (this.svu) {
            if (this.nsm && this.scy && this.hnz > 0) {
                this.nsm.drawImage(this.scy, 0, this.height - this.hnz, this.width, this.hnz, this.x, this.y, this.width, this.hnz)
            }
        } else {
            if (e) {
                this.parent.jsb(this.x + n, this.y + m, o, g)
            } else {
                if (this.nsm && this.scy) {
                    this.nsm.drawImage(this.scy, this.x, this.y)
                }
            }
        }
    };
    this.xpa = function(d) {
        var f = this.ons,
            e = f / 2;
        d.save();
        d.strokeStyle = this.ywa;
        d.fillStyle = this.dpb;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.rem, this.rem + e, this.rem, this.rem);
        d.arcTo(this.awi, this.rem, this.awi, this.height - this.mzg - e, this.amw);
        d.arcTo(this.awi, this.height - e, this.awi + this.mzg, this.height - e, this.mzg);
        d.lineTo(this.awi + this.nyd - this.mzg, this.height - e);
        d.arcTo(this.awi + this.nyd, this.height - e, this.awi + this.nyd, this.height - this.mzg - e, this.mzg);
        d.arcTo(this.awi + this.nyd, this.rem, this.width - this.rem - e, this.rem, this.amw);
        d.arcTo(this.width - e, this.rem, this.width - e, 0, this.rem);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.bzn;
        d.fill();
        d.restore()
    };
    this.sgw = function(d) {
        if (this.ows && this.ows != this.hte) {
            if (d && this.ows) {
                this.gxs = this.ows.omm.toUpperCase();
                if (!nbt.eea.ito) {
                    this.gxs = (this.ows.wmt) ? this.gxs + " [" + this.ows.wmt + "]" : this.gxs
                }
            } else {
                this.gxs = ""
            }
            this.parent.jsb(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.ows && this.gxs != this.ows.omm.toUpperCase())) {
                this.gxs = this.ows.omm.toUpperCase();
                if (!nbt.eea.ito) {
                    this.gxs = (this.ows.wmt) ? this.gxs + " [" + this.ows.wmt + "]" : this.gxs
                }
            }
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.ioq = null
}
enp.prototype = new uib;

function qrd() {
    this.izi = 0;
    this.gwh = [];
    this.kji = function(a, c, b) {
        qrd.prototype.kji.call(this, a, c, b);
        this.izi = 0;
        this.gwh = []
    };
    this.fmx = function(a, b) {
        if (b && b === true) {
            this.gwh.unshift(a)
        } else {
            this.gwh.push(a)
        }
    };
    this.gbt = function(a) {
        if (a && a === true) {
            this.gwh.shift()
        } else {
            this.gwh.pop()
        }
    };
    this.ksk = function(a) {
        this.izi = a
    };
    this.bvo = function() {
        return this.izi
    };
    this.jsb = function() {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        if (this.izi < this.gwh.length) {
            this.gwh[this.izi].jsb()
        }
        try {
            if (this.nsm && this.scy) {
                this.nsm.drawImage(this.scy, this.x, this.y)
            }
        } catch (a) {}
    }
}
qrd.prototype = new uib;

function jdi() {
    this.dih = null;
    this.odo = null;
    this.ckc = null;
    this.hmj = false;
    this.ere = false;
    this.jga = true;
    this.bke = false;
    this.jmn = false;
    this.wcz = 0;
    this.cpn = 0;
    this.ata = 0;
    this.hhw = "";
    this.abm = "";
    this.udf = null;
    this.pit = null;
    this.cqi = "arial";
    this.xmk = "bold";
    this.dlg = "arial";
    this.qha = "rgb(0,0,200)";
    this.uhe = "rgb(255,255,255)";
    this.ufy = "rgb(0,0,150)";
    this.dpb = "rgb(220,240,255)";
    this.eik = "rgb(130,220,255)";
    this.jxd = "rgb(130,190,255)";
    this.pqf = "rgb(255,255,255)";
    this.bed = "rgb(130,190,255)";
    this.koj = "rgb(100,160,255)";
    this.qqj = "rgb(255,255,255)";
    this.rhd = new hla();
    this.bpg = null;
    this.qdf = null;
    this.hkb = null;
    this.pel = null;
    this.vyw = null;
    this.ziv = null;
    this.nil = null;
    this.lyy = null;
    this.ons = 2;
    this.vao = 3;
    this.ljq = 10;
    this.xas = 3;
    this.wmf = 5;
    this.psr = 36;
    this.moj = 30;
    this.cux = 22;
    this.kji = function(a, c, b) {
        jdi.prototype.kji.call(this, a, c, b);
        this.bke = nbt.zgl.value37
    };
    this.pex = function(b) {
        try {
            var a = (nbt.zgl.value37) ? b.xsc : b.owi;
            this.bpg = b.owf;
            this.qdf = b.gpl;
            this.hkb = b.gyu;
            this.pel = b.mov;
            this.vyw = b.tla;
            this.ziv = b.ioj;
            this.rhd = b.yry;
            this.psr = b.vmu;
            this.moj = b.xwr;
            this.cux = b.fuk;
            this.xas = b.grq;
            this.wmf = b.vvx;
            this.ons = b.ssz;
            this.vao = b.ksq;
            this.ljq = b.jfd;
            if (nbt.zgl.value36) {
                this.abm = this.parent.language.otg.toUpperCase()
            } else {
                if (nbt.zgl.value37) {
                    this.abm = this.parent.language.via.toUpperCase()
                }
            }
            this.dih = [];
            this.odo = this.jwz(a.jvd, this.parent.language.ret, this.parent.whx, (this.parent.jpo.zpk === false) ? this.parent.uck.cft("btn") : this.parent.uck.cft("btn_re"), b.ixf);
            this.dih.push(this.odo);
            if (nbt.zgl.value37) {
                this.ckc = this.jwz(a.xnb, this.parent.language.lgx, this.parent.dtq, (this.parent.jpo.zpk === false) ? this.parent.uck.cft("btn") : this.parent.uck.cft("btn_e"), b.ixf);
                this.dih.push(this.ckc)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dly = function(b) {
        try {
            var a = (nbt.zgl.value37) ? b.xsc : b.owi;
            this.bpg = b.owf;
            this.qdf = b.gpl;
            this.hkb = b.gyu;
            this.pel = b.mov;
            this.vyw = b.tla;
            this.ziv = b.ioj;
            this.rhd = b.yry;
            if (this.odo) {
                this.odo.pki(a.jvd);
                this.odo.dly(b.ixf)
            }
            if (this.ckc) {
                this.ckc.pki(a.xnb);
                this.ckc.dly(b.ixf)
            }
            this.psr = b.vmu;
            this.moj = b.xwr;
            this.cux = b.fuk;
            this.xas = b.grq;
            this.wmf = b.vvx;
            this.ons = b.ssz;
            this.vao = b.ksq;
            this.ljq = b.jfd
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(c) {
        try {
            this.cqi = c.font;
            this.xmk = c.oav;
            this.qha = c.xrj;
            this.uhe = c.jqo;
            this.ufy = c.cdn;
            this.dpb = c.backgroundColor;
            this.eik = c.wae;
            this.jxd = c.tfu;
            this.pqf = c.mcm;
            this.bed = c.fzx;
            this.koj = c.mcw;
            this.qqj = c.isi;
            this.udf = c.eng;
            this.pit = c.bmp;
            for (var b = 0, a = this.dih.length; b < a; b++) {
                this.dih[b].gku((this.parent.jpo.hnx === true) ? c.gfv : c.ggy)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.kbv = function(d, h) {
        var c = d - this.x,
            g = h - this.y;
        for (var f = 0, b = this.dih.length; f < b; f++) {
            var a = this.dih[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.yzw() === true) {
                if (a.aso() === true && a.mkr() === false && this.jga) {
                    a.mat(true, true);
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn");
                    a.kuc();
                    for (var e = 0; e < b; e++) {
                        this.dih[e].hau(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.ziv.x && c <= this.ziv.x + this.ziv.width && g >= this.ziv.y && g <= this.ziv.y + this.ziv.height && this.bke && this.ere) {
            this.tyk()
        }
        return true
    };
    this.zot = function() {};
    this.qck = function() {};
    this.qsz = function() {};
    this.jwz = function(d, f, e, a, c) {
        var b = new ugj();
        b.kji(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.kuc = e;
        b.dly(c);
        return b
    };
    this.qrc = function(c) {
        this.ere = c;
        for (var b = 0, a = this.dih.length; b < a; b++) {
            this.dih[b].ecu(c)
        }
    };
    this.tyk = function() {
        this.jga = !this.jga;
        this.parent.jsb()
    };
    this.hxc = function(d, a, c, b) {
        this.jmn = false;
        this.kga = true;
        this.hhw = this.pah(b);
        this.wcz = d;
        this.cpn = a;
        this.ata = c;
        if (this.yzw()) {
            this.qrc(true);
            this.jsb()
        }
    };
    this.pah = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.qdl(d) + ":" + this.qdl(a) + ":" + this.qdl(c)
    };
    this.qdl = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.con = function(a, b) {
        this.jmn = a;
        if (b && b === true) {
            this.jsb()
        }
    };
    this.uzk = function(a, b) {
        this.kga = false;
        if (nbt.zgl.value37) {
            this.jga = false
        }
        this.con(a, false);
        jdi.prototype.uzk.call(this, a, b)
    };
    this.jsb = function(j, f, k, d) {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.uck.cft("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.dpb;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.rhd.x, this.rhd.y, this.rhd.x + this.rhd.width, this.rhd.y);
            g.addColorStop(0.2, this.udf);
            g.addColorStop(1, this.pit);
            l.fillStyle = g;
            l.save();
            if (this.parent.yjg === nbt.jpo.gut) {
                l.translate(this.rhd.width / 2, this.rhd.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.rhd.width / 2, -this.rhd.height / 2)
            }
            l.fillRect(this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height);
            l.drawImage(c, this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height);
            l.restore()
        } else {
            if (this.parent.jpo.hnx === true) {
                nbt.eea.sfx(l, this.rhd.x, this.rhd.y, this.rhd.width, this.rhd.height, this.udf, 1)
            }
        }
        nbt.eea.cjr(l, this.bpg.x, this.bpg.y, this.bpg.width, this.bpg.height, 0, this.eik);
        nbt.eea.fme(l, this.abm, this.pqf, this.bpg.x, this.bpg.y + this.xas, this.bpg.width, this.bpg.height, this.cqi, this.psr, this.xmk);
        nbt.eea.cjr(l, this.qdf.x, this.qdf.y, this.qdf.width, this.qdf.height, 0, this.eik);
        if (nbt.zgl.value36) {
            nbt.eea.xnj(l, this.parent.language.oei.toUpperCase(), this.pqf, this.qdf.x, this.qdf.y + this.xas, this.qdf.width, this.qdf.height, this.cqi, this.moj, this.xmk, this.wmf)
        } else {
            if (nbt.zgl.value37) {
                nbt.eea.xnj(l, this.parent.language.pfd.toUpperCase(), this.pqf, this.qdf.x, this.qdf.y + this.xas, this.qdf.width, this.qdf.height, this.cqi, this.moj, this.xmk, this.wmf)
            }
        }
        nbt.eea.cjr(l, this.hkb.x, this.hkb.y, this.hkb.width, this.hkb.height, 0, this.jxd);
        nbt.eea.xnj(l, this.parent.language.uze.toUpperCase(), this.pqf, this.hkb.x, this.hkb.y + this.xas, this.hkb.width, this.hkb.height, this.cqi, this.moj, this.xmk, this.wmf);
        nbt.eea.cjr(l, this.pel.x, this.pel.y, this.pel.width, this.pel.height, 0, this.eik);
        nbt.eea.xnj(l, this.parent.language.igz.toUpperCase(), this.pqf, this.pel.x, this.pel.y + this.xas, this.pel.width, this.pel.height, this.cqi, this.moj, this.xmk, this.wmf);
        if (this.bke) {
            this.riw(l)
        }
        if (this.kga) {
            if (nbt.zgl.value36) {
                nbt.eea.pdk(l, this.wcz, this.pqf, this.qdf.x, this.qdf.y + this.xas, this.qdf.width, this.qdf.height, this.cqi, this.moj, this.xmk, this.wmf)
            } else {
                if (nbt.zgl.value37) {
                    nbt.eea.pdk(l, this.hhw, this.pqf, this.qdf.x, this.qdf.y + this.xas, this.qdf.width, this.qdf.height, this.cqi, this.moj, this.xmk, this.wmf)
                }
            }
            nbt.eea.pdk(l, this.parent.nud(this.cpn), this.pqf, this.hkb.x, this.hkb.y + this.xas, this.hkb.width, this.hkb.height, this.cqi, this.moj, this.xmk, this.wmf);
            nbt.eea.pdk(l, this.parent.nud(this.ata), this.pqf, this.pel.x, this.pel.y + this.xas, this.pel.width, this.pel.height, this.cqi, this.moj, this.xmk, this.wmf)
        }
        for (var b = 0, e = this.dih.length; b < e; b++) {
            this.dih[b].jsb()
        }
        if (this.jmn) {
            nbt.eea.xss(l, this.vyw.x, this.vyw.y, this.vyw.width, this.vyw.height, this.vao, this.qha, 0.3, this.ufy, this.ons, 1);
            nbt.eea.fme(l, this.parent.language.sya.toUpperCase(), this.uhe, this.vyw.x, this.vyw.y, this.vyw.width, this.vyw.height, this.cqi, this.moj, this.xmk)
        }
        l.restore();
        if (this.nsm && this.scy) {
            if (a) {
                this.nsm.drawImage(this.scy, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.nsm.drawImage(this.scy, this.x, this.y)
            }
        }
    };
    this.riw = function(b) {
        var c = Math.round(this.ziv.height / 2),
            a = Math.round(this.ziv.x + c),
            d = Math.round(this.ziv.y + c / 2);
        b.save();
        nbt.eea.cjr(b, this.ziv.x, this.ziv.y, this.ziv.width, this.ziv.height, this.ljq, this.bed, this.koj, this.ons);
        nbt.eea.fme(b, this.parent.language.dlv, this.pqf, this.ziv.x + this.ziv.height, this.ziv.y, this.ziv.width - this.ziv.height, this.ziv.height, this.cqi, this.cux, this.xmk);
        nbt.eea.sfx(b, a, d, c, c, null, 0, this.qqj, this.ons, 1);
        if (this.jga) {
            nbt.eea.sfx(b, a + c / 4, d + c / 4, c / 2, c / 2, this.qqj, 1)
        }
        b.restore()
    }
}
jdi.prototype = new uib;

function eol() {
    this.moc = "";
    this.qre = "";
    this.jdb = null;
    this.xao = "sans-serif";
    this.kwa = "sans-serif";
    this.xmk = "bold";
    this.rpu = null;
    this.pqf = null;
    this.qed = null;
    this.udo = null;
    this.dpb = null;
    this.pzj = 16;
    this.zpy = 20;
    this.mfm = 0;
    this.eru = 0;
    this.ons = 2;
    this.yah = 3;
    this.sen = 3;
    this.ofm = 3;
    this.hza = 3;
    this.kji = function(a, e, b, d, c) {
        eol.prototype.kji.call(this, a, e, b);
        this.moc = d;
        this.qre = c
    };
    this.dly = function(a) {
        try {
            this.pzj = a.egt;
            this.zpy = a.ufc;
            this.mfm = a.jeg;
            this.eru = a.jun;
            this.ons = a.ssz;
            this.yah = a.hho;
            this.sen = a.xow;
            this.ofm = a.cch;
            this.hza = a.tar
        } catch (b) {
            console.error(b)
        }
    };
    this.gku = function(a) {
        try {
            this.xao = a.jqk;
            this.kwa = a.yte;
            this.xmk = a.oav;
            this.rpu = a.fud;
            this.pqf = a.mcm;
            this.qed = a.wrh;
            this.udo = a.ntj;
            this.dpb = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.lun = function(a, b) {
        this.qre = a;
        if (b && b === true && this.context2D != null && this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.akm = function(a, b) {
        this.moc = a;
        if (b && b === true && this.context2D != null && this.yzw() === true) {
            this.parent.jsb(this.x, this.y, this.width, this.height)
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.udo) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.qed);
            b.addColorStop(1, this.udo);
            nbt.eea.exs(a, this.x, this.y, this.width, this.height, this.yah, this.sen, this.ofm, this.hza, this.dpb, 1, b, this.ons, 1)
        } else {
            nbt.eea.exs(a, this.x, this.y, this.width, this.height, this.yah, this.sen, this.ofm, this.hza, this.dpb, 1, this.qed, this.ons, 1)
        }
        if (this.moc != null) {
            nbt.eea.fme(a, this.moc, this.rpu, this.x + this.ons, this.y + this.mfm, this.width - 2 * this.ons, this.height, this.xao, this.pzj, this.xmk)
        }
        if (this.qre != null) {
            if (this.moc != null) {
                nbt.eea.fme(a, this.qre, this.pqf, this.x + this.ons, this.y + this.eru, this.width - 2 * this.ons, this.height, this.kwa, this.zpy, this.xmk)
            } else {
                nbt.eea.fme(a, this.qre, this.pqf, this.x + this.ons, this.y + this.ons, this.width - 2 * this.ons, this.height, this.kwa, this.zpy, this.xmk)
            }
        }
        if (this.jdb) {
            a.drawImage(this.jdb, 0, 0, this.jdb.width, this.jdb.height, this.x + this.ons, this.y + this.ons, this.width - 2 * this.ons, this.height - 2 * this.ons)
        }
        a.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    }
}
eol.prototype = new uib;

function dna() {
    var a = this;
    this.qnk = "LOADING ... ";
    this.alp = "ERROR";
    this.rcr = null;
    this.csa = null;
    this.ddn = false;
    this.qlo = false;
    this.fdw = true;
    this.hzd = null;
    this.wnc = null;
    this.hoj = 0;
    this.jxu = 0;
    this.bio = false;
    this.obb = false;
    this.xeh = 0;
    this.obx = 60;
    this.dya = 0;
    this.hqf = null;
    this.gxs = null;
    this.hqb = null;
    this.bke = true;
    this.cqi = null;
    this.xmk = "bold";
    this.jfh = "black";
    this.nac = "rgb(0,100,10)";
    this.tkl = "rgb(80,255,100)";
    this.ine = "rgb(120,120,120)";
    this.qie = "red";
    this.bqn = "white";
    this.moj = 14;
    this.fwx = 18;
    this.vap;
    this.dnt;
    this.vht;
    this.yik;
    this.pvr = 5;
    this.wmf = 12;
    this.xas = 5;
    this.egl = 2;
    this.yys = 7;
    this.njf = new hla();
    this.tjo = 0;
    this.gkq = 0;
    this.fdv = 0;
    this.mpd = new hla();
    this.vbo = new hla();
    this.bgc = new hla();
    this.mxh = new hla();
    this.kji = function(b, d, c) {
        dna.prototype.kji.call(this, b, d, c);
        if (nbt.zgl.value45 == nbt.hdv.owg) {
            this.hzd = document.createElement("canvas");
            this.wnc = this.hzd.getContext("2d")
        }
    };
    this.dly = function(b) {
        try {
            this.moj = b.xwr;
            this.fwx = b.szw;
            this.pvr = b.lrh;
            this.wmf = b.vvx;
            this.xas = b.grq;
            this.egl = b.hnw;
            this.yys = b.lxu;
            this.vap = b.wtn;
            this.dnt = b.xgo;
            this.vht = b.opv;
            this.yik = b.zwy;
            this.njf = b.tca.hnh;
            this.tjo = b.tca.x;
            this.gkq = b.tca.uit;
            this.fdv = b.tca.tbj;
            this.mpd = b.tyy;
            this.vbo = b.cul.tyy;
            this.bgc = b.cul.xgo;
            this.mxh = b.cul.zvz;
            if (nbt.zgl.value45 == nbt.hdv.owg) {
                this.hzd.width = Math.round(this.njf.width);
                this.hzd.height = Math.round(this.njf.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.gku = function(b) {
        try {
            this.cqi = b.font;
            this.xmk = b.oav;
            this.jfh = b.backgroundColor;
            this.nac = b.dyb;
            this.tkl = b.hlc;
            this.ine = b.lpj;
            this.qie = b.zec;
            this.bqn = b.hxy;
            this.csa = b.csa
        } catch (c) {
            console.error(c)
        }
    };
    this.jsb = function(b) {
        if (b && b >= 0) {
            this.jxu = b
        }
        if (!this.yzw()) {
            return
        }
        if (nbt.zgl.value45 == nbt.hdv.ouq) {
            this.oeh()
        } else {
            if (nbt.zgl.value45 == nbt.hdv.xam || nbt.zgl.value45 == nbt.hdv.owg) {
                if (!this.rcr && this.gxs && this.hqb) {
                    this.txc()
                } else {
                    if (nbt.zgl.value45 == nbt.hdv.xam) {
                        this.efy()
                    } else {
                        if (nbt.zgl.value45 == nbt.hdv.owg) {
                            if (b === 100) {
                                this.mxb()
                            }
                            this.myu()
                        }
                    }
                }
            }
        }
    };
    this.oeh = function() {
        if (this.ddn) {
            var c = this.context2D,
                b = this.vht.width / 100;
            c.save();
            if (this.qlo === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.uck.cft("splash"), 0, 0, this.width, this.height);
            if (this.csa) {
                nbt.eea.sfx(c, this.pvr, this.pvr, this.width - 2 * this.pvr, this.height - 2 * this.pvr, this.csa, 0.3)
            }
            if (this.rcr != null && this.rcr != "") {
                this.ctv(this.yik, true)
            } else {
                if (this.gxs != null && this.gxs != "") {
                    this.riw(this.yik, true)
                } else {
                    if (this.fdw === true) {
                        if (this.qlo === false) {
                            nbt.eea.sfx(c, this.vap.x, this.vap.y, this.vap.width, this.vap.height, this.jfh, 0.5)
                        }
                        var e = this.qnk + " " + this.jxu + "%";
                        var d = c.createLinearGradient(this.vht.x, this.vht.y, this.vht.x + this.vht.width, this.vht.y);
                        d.addColorStop(0, this.nac);
                        d.addColorStop(1, this.tkl);
                        nbt.eea.fme(c, e, this.bqn, this.dnt.x, this.dnt.y, this.dnt.width, this.dnt.height, this.cqi, this.moj, this.xmk);
                        nbt.eea.xss(c, this.vht.x - this.egl, this.vht.y, this.vht.width + 2 * this.egl, this.vht.height, this.egl, this.jfh, 0.8, this.ine, this.egl, 0.8);
                        nbt.eea.sfx(c, this.vht.x, this.vht.y + this.egl / 2, b * this.jxu, this.vht.height - this.egl, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.efy = function() {
        if (this.ddn) {
            var c = this.context2D,
                b = this.vht.width / 100;
            c.save();
            if (this.qlo === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.bio === true && this.hqf) {
                c.beginPath();
                c.rect(this.hqf.x, this.hqf.y, this.hqf.width, this.hqf.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.uck.cft("splash"), this.mpd.x, this.mpd.y, this.mpd.width, this.mpd.height);
            if (this.rcr != null && this.rcr != "") {
                this.ctv(this.yik, false)
            } else {
                if (this.gxs != null && this.gxs != "") {
                    this.riw(this.yik, false)
                } else {
                    if (this.fdw === true) {
                        var e = this.qnk + " " + this.jxu + "%";
                        var d = c.createLinearGradient(this.vht.x, this.vht.y, this.vht.x + this.vht.width, this.vht.y);
                        d.addColorStop(0, this.nac);
                        d.addColorStop(1, this.tkl);
                        var f = c.createLinearGradient(this.vht.x + (b * this.jxu) - this.yys, this.vht.y, this.vht.x + (b * this.jxu), this.vht.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        nbt.eea.fme(c, e, this.bqn, this.dnt.x, this.dnt.y, this.dnt.width, this.dnt.height, this.cqi, this.moj, this.xmk);
                        nbt.eea.sfx(c, this.vht.x, this.vht.y, this.vht.width, this.vht.height, "rgb(12,15,25)", 1);
                        if (this.jxu > 0 && this.jxu < 100) {
                            nbt.eea.xss(c, this.vht.x + (b * this.jxu) - this.yys + this.egl / 2, this.vht.y - this.egl, this.yys, this.vht.height + 2 * this.egl, this.egl, f, 0.5)
                        }
                        nbt.eea.sfx(c, this.vht.x, this.vht.y, b * this.jxu, this.vht.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.myu = function() {
        if (this.ddn) {
            var c = this.context2D,
                b = this.vht.width / 100;
            c.save();
            if (this.qlo === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.uck.cft("splash"), this.mpd.x, this.mpd.y, this.mpd.width, this.mpd.height);
            if (this.obb) {
                c.drawImage(this.hzd, this.njf.x, this.njf.y)
            }
            if (this.rcr != null && this.rcr != "") {
                this.ctv(this.yik, false)
            } else {
                if (this.gxs != null && this.gxs != "") {
                    this.riw(this.yik, false)
                } else {
                    if (this.fdw === true) {
                        var e = this.qnk + " " + this.jxu + "%";
                        var d = c.createLinearGradient(this.vht.x, this.vht.y, this.vht.x + this.vht.width, this.vht.y);
                        d.addColorStop(0, this.nac);
                        d.addColorStop(1, this.tkl);
                        var f = c.createLinearGradient(this.vht.x + (b * this.jxu) - this.yys, this.vht.y, this.vht.x + (b * this.jxu), this.vht.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        nbt.eea.fme(c, e, this.bqn, this.dnt.x, this.dnt.y, this.dnt.width, this.dnt.height, this.cqi, this.moj, this.xmk);
                        nbt.eea.sfx(c, this.vht.x, this.vht.y, this.vht.width, this.vht.height, "rgb(12,15,25)", 1);
                        if (this.jxu > 0 && this.jxu < 100) {
                            nbt.eea.xss(c, this.vht.x + (b * this.jxu) - this.yys + this.egl / 2, this.vht.y - this.egl, this.yys, this.vht.height + 2 * this.egl, this.egl, f, 0.5)
                        }
                        nbt.eea.sfx(c, this.vht.x, this.vht.y, b * this.jxu, this.vht.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.txc = function() {
        if (this.ddn) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.hqb) {
                b.drawImage(this.hqb, this.vbo.x, this.vbo.y, this.vbo.width, this.vbo.height)
            }
            if (this.gxs != null && this.gxs != "") {
                nbt.eea.ukd(b, this.gxs, this.bqn, this.bgc.x, this.bgc.y, this.bgc.width, this.bgc.height, this.cqi, this.moj, this.xmk, "center", true)
            }
            if (this.bke === true) {
                nbt.eea.ukd(b, "[ " + this.parent.language.zus + " ]", this.bqn, this.mxh.x, this.mxh.y, this.mxh.width, this.mxh.height, this.cqi, 2 * this.moj, this.xmk, "center", true)
            }
            b.restore()
        }
    };
    this.ctv = function(c, l) {
        var k = this.context2D,
            n = [],
            d = this.moj,
            j = this.rcr,
            f = "",
            s = 0,
            u = 0,
            r = 0,
            t = 0,
            m = "center",
            e = Math.round(d * 1.5),
            h = Math.round(this.fwx * 1.5),
            b = 0,
            v = 1,
            p = 0,
            g = 0;
        k.save();
        k.font = this.xmk + " " + d + "px " + this.cqi;
        for (var o = r; o < j.length; o++) {
            f += j.charAt(o);
            t = k.measureText(f).width;
            if (j.charAt(o) == " ") {
                s = o
            }
            if (o == j.length - 1) {
                n[u] = j.substring(r, j.length)
            } else {
                if (j.charAt(o) == "|") {
                    n[u] = j.substring(r, o);
                    u++;
                    r = o + 1;
                    f = j.substring(o + 1, o + 1)
                } else {
                    if (t >= c.width - 2 * this.wmf) {
                        n[u] = j.substring(r, s);
                        u++;
                        r = s + 1;
                        f = j.substring(s + 1, o)
                    }
                }
            }
        }
        b = u * (e);
        if (b > (c.height - h - this.xas)) {
            v = (c.height - h - this.xas) / b;
            d = Math.round(d * v) - 1;
            k.font = this.xmk + " " + d + "px " + this.cqi;
            e = Math.round(d * 1.5);
            b = u * (e)
        }
        if (d < 10) {
            v = 10 / d;
            d = Math.round(d * v);
            k.font = this.xmk + " " + d + "px " + this.cqi;
            e = Math.round(d * 1.5);
            b = u * (e);
            g = (c.height - (h + b + this.xas));
            c.height = h + b + this.xas;
            c.y += g
        }
        k.textAlign = m;
        k.lineJoin = "round";
        k.lineCap = "round";
        if (l && l === true) {
            nbt.eea.sfx(k, c.x, c.y, c.width, c.height, this.jfh, 0.7)
        }
        if (this.alp != null) {
            k.font = this.xmk + " " + this.fwx + "px " + this.cqi;
            k.fillStyle = this.qie;
            k.textBaseline = "bottom";
            k.fillText(this.alp, c.x + c.width / 2, c.y + this.fwx + this.xas)
        }
        k.font = this.xmk + " " + d + "px " + this.cqi;
        k.fillStyle = this.bqn;
        if (n.length == 1) {
            p = h + b + e;
            k.fillText(n[0], (c.x + c.width / 2), c.y + p)
        } else {
            for (var o = 0, q = n.length; o < q; o++) {
                p = h + (b + e) / (q + 1) * (o + 1);
                if (m == "start") {
                    k.fillText(n[o], (c.x + this.wmf), c.y + p)
                } else {
                    k.fillText(n[o], (c.x + c.width / 2), c.y + p)
                }
            }
        }
        k.restore()
    };
    this.riw = function(c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            nbt.eea.sfx(b, c.x, c.y, c.width, c.height, this.jfh, 0.7)
        }
        if (this.bke === true) {
            nbt.eea.ukd(b, this.gxs, this.bqn, c.x, c.y, c.width, c.height, this.cqi, this.moj, this.xmk, "center", true)
        }
        b.restore()
    };
    this.start = function() {
        this.bio = true;
        this.xeh = new Date().getTime();
        this.hqf = new hla(this.njf.x, this.njf.y, this.njf.width, this.njf.height);
        this.dya = 0;
        this.jcj()
    };
    this.stop = function() {
        this.bio = false;
        this.hqf = null;
        clearTimeout(this.hoj)
    };
    this.jcj = function() {
        var b = 0,
            c = new Date().getTime();
        if (a.dya < 6) {
            a.hqf.x -= a.tjo;
            a.hqf.width += 2 * a.tjo
        } else {
            if (a.dya < 12) {
                a.hqf.y -= a.fdv;
                a.hqf.height += a.gkq
            } else {
                a.stop();
                if (typeof a.avo === "function") {
                    a.avo()
                }
            }
        }
        a.jsb();
        a.dya++;
        if (a.dya <= 12) {
            b = (a.dya * a.obx - (c - a.xeh));
            a.hoj = setTimeout(a.jcj, b)
        }
    };
    this.enu = function() {
        this.obb = true;
        this.xeh = new Date().getTime();
        this.dya = 0;
        this.obx = 89;
        this.dsi()
    };
    this.mxb = function() {
        this.obb = false;
        clearTimeout(this.hoj)
    };
    this.dsi = function() {
        var d = 0,
            e = new Date().getTime(),
            b = a.wnc,
            c = a.parent.uck.cft("splashanim");
        if (a.obb === true) {
            a.dya++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.dya % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.jsb();
            d = (a.dya * a.obx - (e - a.xeh));
            a.hoj = setTimeout(a.dsi, d)
        }
    };
    this.qrh = function() {
        return (this.bio || this.obb)
    };
    this.tyl = function(c, b) {
        this.gxs = c;
        this.hqb = b;
        this.bio = true;
        this.bke = true;
        this.hoj = setInterval(this.rpv, 800);
        this.jsb()
    };
    this.rpv = function() {
        a.bke = !a.bke;
        a.jsb()
    };
    this.avo = null
}
dna.prototype = new uib;

function lag() {
    var b = this;
    var c = 0;
    var a = 1;
    var d = 2;
    this.type = -1;
    this.moc = "";
    this.opg = "";
    this.omm = "";
    this.cap = -1;
    this.pdt = [];
    this.eqx = null;
    this.cqi = "arial";
    this.xmk = "bold";
    this.dpb = "rgb(30,30,30)";
    this.zmv = "rgb(0,0,0)";
    this.qed = "white";
    this.pqf = "white";
    this.ufl = [];
    this.pzj = 24;
    this.moj = 24;
    this.jeu = 12;
    this.bpg = new hla();
    this.ziv = new hla();
    this.vap = new hla();
    this.odc = new hla();
    this.ktz = 5;
    this.ons = 3;
    this.gku = function(f) {
        try {
            this.cqi = f.font;
            this.xmk = f.oav;
            this.dpb = f.backgroundColor;
            this.zmv = f.bqc;
            this.qed = f.wrh;
            this.pqf = f.mcm;
            this.rpu = f.fud;
            this.ufl = f.vpt;
            this.eqx.gku(f.ggy)
        } catch (g) {
            console.error(g)
        }
    };
    this.dly = function(f) {
        try {
            this.pzj = f.egt;
            this.moj = f.xwr;
            this.jeu = f.mdq;
            this.ktz = f.irs;
            this.ons = f.ssz;
            this.bpg = f.owf;
            this.ziv = f.ioj;
            this.vap = f.wtn;
            this.eqx.pki(f.agm);
            this.eqx.dly(f.ixf)
        } catch (g) {
            console.error(g)
        }
    };
    this.pht = function() {
        this.pdt = [];
        this.eqx = this.jwz(this.odc, this.parent.language.ok, null, this.parent.neu.ok);
        this.pdt.push(this.eqx)
    };
    this.jwz = function(g, i, h, f) {
        var e = new ccc();
        e.kji(g, this.context2D, null, null, i);
        e.parent = this;
        e.kuc = h;
        if (f != null) {
            e.lii = f.urj
        }
        return e
    };
    this.kbv = function(f, l) {
        var k = f - this.x;
        var j = l - this.y;
        for (var h = 0, e = this.pdt.length; h < e; h++) {
            var g = this.pdt[h];
            if (k >= g.x && k <= g.x + g.width && j >= g.y && j <= g.y + g.height && g.yzw() === true) {
                if (g.aso() === true && g.mkr() === false) {
                    g.mat(true, false);
                    this.parent.jsb();
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn");
                    this.kuc()
                }
                return true
            }
        }
        return false
    };
    this.zot = function() {
        for (var g = 0, e = this.pdt.length; g < e; g++) {
            var f = this.pdt[g];
            if (f.umm() === true) {
                f.mat(false, false);
                this.parent.jsb();
                return true
            }
        }
        return false
    };
    this.qck = function(h) {
        for (var g = 0, e = this.pdt.length; g < e; g++) {
            var f = this.pdt[g];
            if (h == f.lii && f.yzw() === true) {
                if (f.aso() === true && f.mkr() === false) {
                    f.mat(true, false);
                    this.parent.jsb();
                    this.parent.uck.aqn("btn");
                    this.parent.uck.gyl("btn");
                    this.kuc()
                }
                return true
            }
        }
        return false
    };
    this.qsz = function() {
        for (var g = 0, e = this.pdt.length; g < e; g++) {
            var f = this.pdt[g];
            if (f.umm() === true) {
                f.mat(false, false);
                this.parent.jsb();
                return true
            }
        }
        return false
    };
    this.jxl = function() {
        b.qrc(true);
        b.dfu();
        b.hwh();
        for (var f = 0, e = b.pdt.length; f < e; f++) {
            b.pdt[f].mat(false, false, false);
            b.pdt[f].uzk(true)
        }
        b.uzk(true);
        b.parent.jsb()
    };
    this.fon = function() {
        this.type = -1;
        this.qrc(false);
        for (var f = 0, e = this.pdt.length; f < e; f++) {
            this.pdt[f].uzk(false)
        }
        this.uzk(false);
        this.parent.jsb()
    };
    this.qrc = function(g) {
        for (var f = 0, e = this.pdt.length; f < e; f++) {
            this.pdt[f].ecu(g)
        }
    };
    this.jsb = function() {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        var f = this.context2D,
            h = f.createLinearGradient(0, 0, 0, this.height);
        h.addColorStop(1, this.zmv);
        h.addColorStop(0, this.dpb);
        f.save();
        f.clearRect(0, 0, this.width, this.height);
        if (this.moc) {
            nbt.eea.cjr(f, 0, 0, this.width, this.height, this.ktz, h, this.qed, this.ons);
            nbt.eea.fme(f, this.moc, this.rpu, this.bpg.x, this.bpg.y, this.bpg.width, this.bpg.height, this.cqi, this.pzj, this.xmk)
        } else {
            nbt.eea.cjr(f, 0, this.bpg.height, this.width, this.height - this.bpg.height, this.ktz, h, this.qed, this.ons)
        }
        if (this.opg) {
            nbt.eea.ukd(f, this.opg, this.pqf, this.ziv.x, this.ziv.y, this.ziv.width, this.ziv.height, this.cqi, this.moj, this.xmk, "center", true)
        }
        if (this.omm) {
            nbt.eea.fme(f, this.omm, this.pqf, this.vap.x, this.vap.y, this.vap.width, this.vap.height, this.cqi, this.jeu, this.xmk)
        }
        for (var g = 0, e = this.pdt.length; g < e; g++) {
            this.pdt[g].jsb()
        }
        f.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.dfu = function() {
        if (this.type === nbt.opg.php || this.type === nbt.opg.wag || this.type === nbt.opg.vti) {
            this.cap = a;
            this.moc = this.parent.language.aco;
            if (this.type === nbt.opg.wag) {
                this.omm = this.parent.language.eki
            } else {
                if (this.type !== nbt.opg.vti) {
                    this.omm = this.parent.language.kec
                }
            }
            if (this.type === nbt.opg.vti) {
                this.opg = this.parent.language.spa
            } else {
                this.opg = this.parent.language.bmr
            }
        } else {
            if (this.type === nbt.opg.cwa || this.type === nbt.opg.cgt) {
                this.cap = c;
                this.moc = "";
                this.omm = this.parent.language.eki;
                this.opg = this.parent.language.mpr
            } else {
                if (this.type === nbt.opg.roulette.vyb || this.type === nbt.opg.roulette.zrv) {
                    this.cap = a;
                    this.moc = this.parent.language.aco;
                    this.omm = this.parent.language.kec;
                    if (this.type === nbt.opg.roulette.vyb) {
                        this.opg = this.parent.language.tvr
                    } else {
                        if (this.type === nbt.opg.roulette.zrv) {
                            this.opg = this.parent.language.mec
                        }
                    }
                } else {
                    if (this.type === nbt.opg.vld) {
                        this.cap = a;
                        this.moc = "";
                        this.omm = "";
                        this.opg = this.parent.language.fhn
                    } else {
                        if (this.type === nbt.opg.bum) {
                            this.cap = d;
                            this.moc = this.parent.bfa;
                            this.omm = "";
                            this.opg = this.parent.language.freerounds_startinfo + "|" + this.parent.freeRoundTotal + " " + this.parent.language.freerounds + "!||" + this.parent.language.ptq
                        } else {
                            if (this.type === nbt.opg.qdd) {
                                this.cap = d;
                                this.moc = this.parent.bfa;
                                this.omm = "";
                                this.opg = this.parent.language.freerounds_info1 + " " + (this.parent.freeRoundTotal - this.parent.cqs) + " " + this.parent.language.freerounds_info2 + "||" + this.parent.language.ptq
                            } else {
                                if (this.type === nbt.opg.uwb) {
                                    this.cap = d;
                                    this.moc = this.parent.bfa;
                                    this.omm = this.parent.language.eki;
                                    this.opg = this.parent.language.freerounds_played + ": " + this.parent.cqs + "|" + this.parent.language.freerounds_win + ": " + this.parent.vgc
                                }
                            }
                        }
                    }
                }
            }
        }
        this.eqx.lun(this.parent.language.ok, false);
        this.qed = this.ufl[this.cap];
        this.rpu = this.ufl[this.cap]
    };
    this.hwh = function() {
        if (this.type === nbt.opg.php || this.type === nbt.opg.vti || this.type === nbt.opg.roulette.vyb || this.type === nbt.opg.roulette.zrv) {
            this.kuc = this.parent.kjp
        } else {
            if (this.type === nbt.opg.wag) {
                this.kuc = this.parent.jym
            } else {
                if (this.type === nbt.opg.cwa || this.type === nbt.opg.cgt || this.type === nbt.opg.uwb) {
                    this.kuc = function() {
                        window.location.reload()
                    }
                } else {
                    if (this.type === nbt.opg.vld || this.type === nbt.opg.bum || this.type === nbt.opg.qdd) {
                        this.kuc = function() {
                            b.fon();
                            nbt.zbt.npq(nbt.zbt.jsn)
                        }
                    }
                }
            }
        }
    };
    this.kuc = function() {}
}
lag.prototype = new uib;
nbt.zgl = new Settings();
nbt.eea = new abn();

function ted() {
    this.nnw = "";
    this.dtw = "";
    this.iho = null;
    this.canvas = null;
    this.context2D = null;
    this.lor = null;
    this.qkp = null;
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.lyw = 0;
    this.piw = 0;
    this.nsj = false;
    this.width = 0;
    this.height = 0;
    this.ftm = 0;
    this.mip = 0;
    this.ved = 1;
    this.iqe = 1;
    this.xmx = false;
    this.etp = false;
    this.style = null;
    this.jpo = null;
    this.yjg = -1;
    this.fas = false;
    this.xkm = false;
    this.ocn = false;
    this.ohe = false;
    this.cao = false;
    this.vfy = "";
    this.mqe = "";
    this.igm = "";
    this.mxr = "";
    this.qjs = "";
    this.czx = "";
    this.bor = "1_1_60";
    try {
        if (nbt.zgl.value19) {
            this.vfy = sessionStorage.sessionValue2;
            this.mqe = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.igm = sessionStorage.sessionValue2
            } else {
                this.vfy = sessionStorage.sessionValue2;
                this.mqe = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.igm = sessionStorage.sessionValue2
                } else {
                    this.igm = ""
                }
            }
        }
    } catch (b) {}
    this.kkk = null;
    this.hit = null;
    this.dvv = false;
    this.isr = null;
    this.uck = null;
    this.com = null;
    this.ejt = true;
    this.rvo = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.jor = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.jor = this.rvo.length - 1
                } else {
                    this.jor = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.jor = this.rvo.length - 1
        }
    } catch (b) {
        this.jor = 0
    }
    this.ipq = 0;
    this.language = new kct();
    this.kpx = 0;
    this.ibq = 1;
    this.dmx = this.ibq;
    this.njb = [nbt.gtv.ayf, nbt.gtv.gpm, nbt.gtv.kld];
    this.xhr = (nbt.eea.dem()) ? 0 : this.njb.length - 1;
    try {
        if (localStorage.localValue1) {
            this.xhr = Number(localStorage.localValue1);
            if (!nbt.eea.dem() && this.njb[this.xhr] === nbt.gtv.ayf) {
                this.xhr = this.njb.length - 1
            }
        }
    } catch (b) {}
    this.ivl = false;
    this.emy = "";
    this.ldf = "";
    this.oce = 0;
    this.jsn = 0;
    this.xcc = false;
    this.lvj = 5000;
    this.izz = 0;
    this.fjy = 0;
    this.zlw = 0;
    this.xsu = false;
    this.yll = false;
    this.myh = false;
    this.neu = null;
    this.awm = 0;
    this.boi = 0;
    this.dcl = 0;
    this.yew = -1;
    this.sod = -1;
    this.usz = 0;
    this.tsf = 0;
    this.ykv = null;
    this.iba = false;

    function a(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + e + "=([^&#]*)";
        var g = new RegExp(d);
        var f = g.exec(window.location.href);
        if (f == null) {
            return ""
        } else {
            return f[1]
        }
    }
    this.kji = function(d) {
        nbt.eea.rrh();
        nbt.eea.oku();
        this.vvq();
        if (!this.xsu) {
            this.uoy()
        }
        this.jxf(this.cnl(d.jpo));
        this.vji();
        this.wva();
        this.ukp();
        this.nbv();
        this.mxk();
        this.dhw();
        this.wqk();
        this.itf();
        this.bts();
        this.vyq();
        return this
    };
    this.ukp = function() {};
    this.itf = function() {
        try {
            if (nbt.zgl.value64 && !this.myh) {
                this.isr = new yja();
                this.isr.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.vvq = function() {
        try {
            var h = a("exit");
            if (h != "") {
                sessionStorage.sessionValue5 = h
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && nbt.zgl.value8) {
                sessionStorage.sessionValue5 = nbt.zgl.value8
            }
            var f = a("w");
            if (f != "") {
                sessionStorage.sessionValue7 = f
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.qjs = sessionStorage.sessionValue7
            }
            var d = a("curr");
            if (d != "") {
                sessionStorage.sessionValue8 = d
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.czx = sessionStorage.sessionValue8;
                if (nbt.zgl.value21.e === true && nbt.zgl.value72) {
                    var i = nbt.zgl.value72[this.czx];
                    if (i) {
                        nbt.zgl.value21.s = i.s;
                        nbt.zgl.value21.m = i.m;
                        nbt.zgl.value21.ts = i.ts;
                        nbt.zgl.value21.cs = i.cs
                    }
                }
            }
        } catch (g) {
            console.error(g.opg)
        }
    };
    this.wqk = function() {
        if (!(nbt.eea.fcc == nbt.os.nuu && nbt.eea.yoq == nbt.ynh.rwf)) {
            document.ontouchstart = nbt.zbt.mcg
        }
        if (nbt.eea.yoq != nbt.ynh.vvp && nbt.eea.yoq != nbt.ynh.rwf) {
            document.ontouchmove = nbt.zbt.rrl;
            document.ontouchend = nbt.zbt.mfc
        }
        if (!nbt.eea.qai) {
            document.onmousedown = nbt.zbt.mry;
            document.onmouseup = nbt.zbt.bkw;
            document.onmousemove = nbt.zbt.izr
        }
        document.onkeydown = nbt.zbt.era;
        document.onkeyup = nbt.zbt.tcq;
        document.oncontextmenu = nbt.zbt.ksj;
        if (nbt.eea.qks() === false && nbt.eea.fcc === nbt.os.ghj && nbt.eea.tis() === true && screen.width <= 414 && this.xsu === false && this.auw()) {
            this.tsf = setInterval(this.inw, 1000)
        }
    };
    this.mcg = function(d) {
        nbt.zbt.kug();
        nbt.zbt.xbs();
        nbt.zbt.kbv(d)
    };
    this.mfc = function(d) {
        if (nbt.zbt.fas === true) {
            nbt.zbt.zot(d)
        } else {
            if (nbt.zbt.zob()) {
                nbt.zbt.url()
            }
        }
    };
    this.rrl = function(d) {
        nbt.zbt.kep(d)
    };
    this.mry = function(d) {
        window.focus();
        if (nbt.zbt.fas === true) {
            nbt.zbt.kug();
            nbt.zbt.xbs();
            nbt.zbt.kbv(d)
        } else {
            if (nbt.zbt.zob()) {
                nbt.zbt.url()
            }
        }
    };
    this.bkw = function(d) {
        nbt.zbt.zot(d)
    };
    this.izr = function(d) {};
    this.era = function(d) {
        if ((d.keyCode == 122 && (nbt.eea.fcc == nbt.os.zfd || nbt.eea.fcc == nbt.os.oxg)) || (d.keyCode == 70 && d.ctrlKey && nbt.eea.fcc == nbt.os.swn)) {
            return
        }
        nbt.zbt.kug();
        nbt.zbt.xbs();
        nbt.zbt.qck(d)
    };
    this.tcq = function(d) {
        nbt.zbt.qsz(d)
    };
    this.ksj = function() {
        return false
    };
    this.kbv = function(d) {};
    this.zot = function(d) {};
    this.qck = function(d) {};
    this.qsz = function(d) {};
    this.kep = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.zxm = function() {
        var f = this.com.ljc("topb"),
            e = this.com.ljc("settings"),
            d = this.com.ljc("topi"),
            g = this.com.ljc("gameb");
        if (nbt.eea.yoq == nbt.ynh.vvp || nbt.eea.yoq == nbt.ynh.fjs) {
            this.etp = (window.innerWidth == window.outerWidth)
        } else {
            if (nbt.eea.yoq == nbt.ynh.ccq || nbt.eea.yoq == nbt.ynh.wtg) {
                this.etp = (window.innerHeight >= window.outerHeight)
            } else {
                if (nbt.eea.yoq == nbt.ynh.pqw) {
                    this.etp = (document.fullscreenElement) ? true : false
                } else {
                    if (nbt.eea.ito) {
                        if (nbt.eea.yoq == nbt.ynh.fks || nbt.eea.yoq == nbt.ynh.kzm || nbt.eea.yoq == nbt.ynh.hvp) {
                            this.etp = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (nbt.eea.yoq == nbt.ynh.rwf) {
                                this.etp = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.sqy("fullscreen", this.etp)
        }
        if (f) {
            f.hjv.dse("fullscreen", "#sqy", [(this.etp) ? 1 : 0])
        }
        if (e) {
            e.hjv.dse("fullscreen", "#sqy", [(this.etp) ? 1 : 0])
        }
        if (g) {
            g.hjv.dse("fullscreen", "#sqy", [(this.etp) ? 1 : 0])
        }
        this.vih();
        this.swx();
        this.gns();
        if (nbt.eea.tis() === true && nbt.eea.qks() === false) {
            document.body.style.height = "5000px"
        }
        if (!nbt.eea.qks() && nbt.eea.yoq === nbt.ynh.hvp && this.piw < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.noq = function() {
        nbt.zbt.zxm();
        nbt.zbt.inw()
    };
    this.inw = function() {
        if (nbt.eea.tis() === true && nbt.eea.qks() === false) {
            if (nbt.zbt.auw() === true && nbt.zbt.ohe === true) {
                var d = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideUp");
                if (d && e) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim";
                        d.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            nbt.zbt.zxm();
                            window.ontouchmove = nbt.zbt.noq
                        }
                    } else {
                        e.className = null;
                        d.style.display = "none";
                        document.ontouchstart = nbt.zbt.mcg;
                        document.ontouchmove = nbt.zbt.rrl;
                        document.ontouchend = nbt.zbt.mfc;
                        if (window.ontouchmove != null) {
                            nbt.zbt.zxm();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.hiy = function(g) {
        var i = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            j = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            k = 700,
            m = window.innerHeight / d,
            l = window.innerWidth / k,
            h = (m < l) ? m : l;
        if (i && j) {
            if (g === true) {
                if (h < 1) {
                    nbt.eea.pao(e, h, h)
                }
                f.innerHTML = nbt.zbt.language.qrx;
                j.className = "rotateAnim";
                i.style.display = "block";
                nbt.zbt.cao = true
            } else {
                i.style.display = "none";
                j.className = null;
                nbt.zbt.cao = false
            }
        }
    };
    this.vzu = function() {
        var d = this.com.ljc("settings");
        this.zxm();
        if (d) {
            d.hjv.dse("adjustment", "#sqy", [(this.yjg === nbt.jpo.toy) ? 0 : 1]);
            d.jsb()
        }
        if (this.ivl === true) {
            this.cao = true;
            this.fpw(true);
            this.hiy(true)
        } else {
            this.cao = false;
            this.fpw((this.rvo[this.jor] === 0));
            this.hiy(false)
        }
    };
    this.vih = function() {
        this.lyw = window.innerWidth, this.piw = window.innerHeight;
        this.nsj = false;
        if (nbt.eea.qks() == true && nbt.zgl.value69 === true) {
            if (nbt.eea.waw() === true) {
                this.nsj = true;
                this.lyw = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.piw = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.lyw > this.piw) {
                    this.piw *= 0.98
                }
            } else {
                if (nbt.eea.tis() === true) {
                    this.nsj = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.lyw = 1024;
                            this.piw = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.lyw = 736;
                                this.piw = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.lyw = 667;
                                    this.piw = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.lyw = 768;
                            this.piw = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.lyw = 414;
                                this.piw = 628
                            } else {
                                if (screen.height === 667) {
                                    this.lyw = 375;
                                    this.piw = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.gns = function() {
        var g = 0,
            i = 0,
            f = 1,
            e = 1,
            h = this.lyw,
            d = this.piw;
        this.xmx = (this.etp || h < this.width || d < this.height || this.jpo.pyl);
        g = this.xmq(this.xmx);
        f = ((h - i) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.xmx) {
            if (this.jpo.jur) {
                if (f > e) {
                    this.ved = e;
                    this.iqe = e
                } else {
                    this.ved = f;
                    this.iqe = f
                }
            } else {
                this.ved = f;
                this.iqe = e
            }
        } else {
            this.ved = 1;
            this.iqe = 1
        }
        nbt.eea.pao(this.canvas, this.ved, this.iqe);
        if (this.lor != null) {
            nbt.eea.pao(this.lor, this.ved, this.iqe, ((this.jpo.lor.hnh.x) - ((this.jpo.lor.hnh.x + this.jpo.lor.ohg) / 2 * (1 - this.ved))), ((this.jpo.lor.hnh.y) - ((this.jpo.lor.hnh.y + this.jpo.lor.xus) / 2 * (1 - this.iqe))))
        }
        if (this.xmx) {
            this.offsetLeft = Math.floor((h - (this.canvas.width * this.ved))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.iqe))) / 2
        } else {
            this.offsetLeft = this.iho.offsetLeft;
            this.offsetTop = this.iho.offsetTop
        }
    };
    this.swx = function() {
        if (this.auw() === true) {
            var e = null;
            if (this.njb[this.xhr] === nbt.gtv.ayf) {
                if (window.orientation === -90) {
                    e = nbt.jpo.gut
                } else {
                    e = nbt.jpo.toy
                }
            } else {
                if (this.njb[this.xhr] === nbt.gtv.gpm) {
                    e = nbt.jpo.gut
                } else {
                    if (this.njb[this.xhr] === nbt.gtv.kld) {
                        e = nbt.jpo.toy
                    }
                }
            }
            this.ivl = (this.piw > this.lyw);
            this.jxf(e);
            this.zht(false);
            if (this.ohe === true) {
                this.jsb()
            } else {
                this.com.dse("loading", "#jsb")
            }
        } else {
            if (nbt.eea.ito) {
                var f = (this.lyw > this.piw) ? this.ibq : this.kpx,
                    d = this.jpo.dur,
                    e = null;
                if (f != this.dmx) {
                    this.dmx = f;
                    if (this.xsu) {
                        e = (this.dmx == this.ibq) ? nbt.jpo.ujh : nbt.jpo.ymb
                    } else {
                        e = (this.dmx == this.ibq) ? nbt.zgl.value33 : nbt.zgl.value32
                    }
                    this.jxf(e);
                    this.zht((d != this.jpo.dur) || this.xsu);
                    if (this.ohe === true) {
                        if (this.xsu && this.yll) {
                            this.aiu(this.language.wuo.toUpperCase())
                        } else {
                            this.jsb()
                        }
                    } else {
                        this.com.dse("loading", "#jsb")
                    }
                }
            } else {
                if (!this.xsu) {
                    e = (this.etp) ? nbt.zgl.value15 : nbt.zgl.value14;
                    this.jxf(e);
                    this.zht(false);
                    if (this.ohe === true) {
                        this.jsb()
                    } else {
                        this.com.dse("loading", "#jsb")
                    }
                }
            }
        }
    };
    this.auw = function() {
        return false
    };
    this.jxf = function(d) {};
    this.vji = function() {
        this.style = new qkb()
    };
    this.xmq = function(d) {
        var e = 0;
        if (nbt.eea.waw() && window.innerWidth > window.innerHeight && d) {
            if (this.fas === true && document.body.style.backgroundColor !== this.style.ehy.backgroundColor) {
                document.body.style.backgroundColor = this.style.ehy.backgroundColor
            }
        }
        return e
    };
    this.epy = function() {
        if (nbt.eea.waw() && !nbt.eea.qks() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.bab = function() {
        return false
    };
    this.nbv = function() {
        if (nbt.eea.qai) {
            this.uck = new kag()
        } else {
            this.uck = new pde()
        }
        this.uck.kji();
        this.uck.nof(this.kfd())
    };
    this.mxk = function() {
        this.com = new unx();
        this.com.kji();
        this.com.ptx("jackpots")
    };
    this.kfd = function() {
        var d = new ycu();
        d.kji();
        return d
    };
    this.uoy = function() {
        this.neu = new rzv()
    };
    this.wva = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                n = [],
                o = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                n = sessionStorage.sessionValue11.split(",");
                for (var k = 0, l = n.length; k < l; k++) {
                    for (var h = 0, g = nbt.zgl.value5.length; h < g; h++) {
                        if (n[k] === nbt.zgl.value5[h]) {
                            o.push(n[k])
                        }
                    }
                }
                if (o.length == 0) {
                    o.push(nbt.zgl.value5[0])
                }
                nbt.zgl.value5 = [];
                for (var k = 0, l = o.length; k < l; k++) {
                    nbt.zgl.value5.push(o[k])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var p = nbt.eea.tqj();
                if (this.zmy(p)) {
                    sessionStorage.sessionValue1 = p
                } else {
                    if (p === nbt.language.EN && this.zmy(nbt.language.US)) {
                        sessionStorage.sessionValue1 = nbt.language.US
                    } else {
                        if (p === nbt.language.DE && this.zmy(nbt.language.AT)) {
                            sessionStorage.sessionValue1 = nbt.language.AT
                        } else {
                            if (p === nbt.language.ES && this.zmy(nbt.language.MX)) {
                                sessionStorage.sessionValue1 = nbt.language.MX
                            } else {
                                if (p === nbt.language.ES && this.zmy(nbt.language.CO)) {
                                    sessionStorage.sessionValue1 = nbt.language.CO
                                } else {
                                    if (p === nbt.language.ES && this.zmy(nbt.language.CL)) {
                                        sessionStorage.sessionValue1 = nbt.language.CL
                                    } else {
                                        if (p === nbt.language.ES && this.zmy(nbt.language.VE)) {
                                            sessionStorage.sessionValue1 = nbt.language.VE
                                        } else {
                                            if (p === nbt.language.EN && this.zmy(nbt.language.BR)) {
                                                sessionStorage.sessionValue1 = nbt.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = nbt.zgl.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.zmy(sessionStorage.sessionValue1)) {
                for (var k = 0, l = nbt.zgl.value5.length; k < l; k++) {
                    if (nbt.zgl.value5[k] == sessionStorage.sessionValue1) {
                        this.ipq = k;
                        break
                    }
                }
                this.language = this.awh(sessionStorage.sessionValue1)
            } else {
                this.ipq = 0;
                this.language = this.awh(nbt.zgl.value5[this.ipq]);
                sessionStorage.sessionValue1 = nbt.zgl.value5[this.ipq]
            }
        } catch (m) {
            this.ipq = 0;
            this.language = this.awh(nbt.zgl.value5[this.ipq]);
            console.error(m.opg)
        }
    };
    this.bts = function() {
        var d = (nbt.zgl.value45 == nbt.hdv.ouq) ? this.jpo.hdv.zbt : (nbt.zgl.value45 == nbt.hdv.xam) ? this.jpo.hdv.kej : this.jpo.hdv.iyh;
        this.iho = document.getElementById("gameArea");
        if (this.nsj === false) {
            this.iho.style.marginTop = (-d.hnh.height / 2) + "px";
            this.iho.style.marginLeft = (-d.hnh.width / 2) + "px"
        } else {
            this.iho.style.left = "0px";
            this.iho.style.top = "0px";
            this.iho.style.marginTop = ((window.innerHeight - d.hnh.height) / 2) + "px";
            this.iho.style.marginLeft = ((window.innerWidth - d.hnh.width) / 2) + "px"
        }
        this.iho.style.width = (d.hnh.width > window.innerWidth) ? window.innerWidth + "px" : d.hnh.width + "px";
        this.iho.style.height = (d.hnh.height > window.innerHeight) ? window.innerHeight + "px" : d.hnh.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.hnh.width);
        this.canvas.height = Math.round(d.hnh.height);
        this.context2D = this.canvas.getContext("2d");
        this.wxj(d)
    };
    this.wxj = function(d) {
        var e = new dna();
        e.kji(d.hnh, this.context2D);
        e.parent = this;
        e.qnk = (this.xsu) ? this.language.inv : this.language.uhk;
        e.alp = this.language.error;
        e.dly(d);
        e.gku(this.style.hdv);
        this.com.xih("loading", e)
    };
    this.xzl = function() {
        var d = new pcm();
        d.kji(this.jpo.qwn.hnh, null, this.context2D);
        d.parent = this;
        d.dly(this.jpo.qwn);
        d.gku(this.style.qwn);
        if (nbt.zgl.value11 && nbt.zgl.value49) {
            d.dzj("time", "", "--:-- [--:--]")
        } else {
            if (nbt.zgl.value11 || nbt.zgl.value49) {
                d.dzj("time", "", "--:--")
            }
        }
        if (this.gnh()) {
            d.dzj("freeplay", "", this.language.qur)
        } else {
            d.dzj("id", "", "")
        }
        this.com.xih("topi", d)
    };
    this.bxs = function() {
        var d = new enp();
        d.kji(this.jpo.mps.hnh, null, this.context2D);
        d.parent = this;
        d.dly(this.jpo.mps);
        d.gku(this.style.mps, false);
        d.uzk(false);
        this.com.xih("topb", d)
    };
    this.rsw = function() {};
    this.cmb = function() {
        var d = new jdi();
        d.kji(this.jpo.otg.hnh, null, this.context2D);
        d.parent = this;
        d.pex(this.jpo.otg);
        d.gku(this.style.otg);
        d.uzk(false);
        this.com.xih("stats", d)
    };
    this.oni = function() {
        var d = new lag();
        d.kji(this.jpo.avq.hnh, null, this.context2D);
        d.parent = this;
        d.pht();
        d.gku(this.style.avq);
        d.dly(this.jpo.avq);
        d.uzk(false);
        this.com.xih("msg", d)
    };
    this.cwg = function(e) {
        var d = new udh();
        d.kji(this.jpo.ugp.hnh, null, this.context2D);
        d.parent = this;
        d.jcj = true;
        if (e) {
            d.epw(e)
        }
        d.pex(this.jpo.ugp);
        d.dfu(this.language);
        d.gku(this.style.ugp);
        d.dly(this.jpo.ugp);
        d.uzk(false);
        this.com.xih("autop", d)
    };
    this.njg = function(d) {
        var e = new prb();
        e.kji(this.jpo.mkb.hnh, null, this.context2D);
        e.parent = this;
        if (d) {
            e.rtd(d)
        }
        e.uzk(false);
        this.com.xih("settings", e)
    };
    this.zht = function(d) {};
    this.xjd = function() {
        var d = this.com.ljc("stats");
        if (d) {
            d.pki(this.jpo.otg.hnh);
            d.dly(this.jpo.otg)
        }
    };
    this.cxh = function() {
        var d = this.com.ljc("msg");
        if (d) {
            d.pki(this.jpo.avq.hnh);
            d.dly(this.jpo.avq)
        }
    };
    this.hsl = function() {
        var d = this.com.ljc("autop");
        if (d) {
            d.pki(this.jpo.ugp.hnh);
            d.dly(this.jpo.ugp)
        }
    };
    this.wit = function() {
        var d = this.com.ljc("settings");
        if (d) {
            d.pki(this.jpo.mkb.hnh);
            d.dly(this.jpo.mkb)
        }
    };
    this.yxh = function() {
        var d = this.com.ljc("topi");
        if (d) {
            d.pki(this.jpo.qwn.hnh);
            d.dly(this.jpo.qwn)
        }
    };
    this.jok = function() {
        var d = this.com.ljc("topb");
        if (d) {
            d.pki(this.jpo.mps.hnh);
            d.dly(this.jpo.mps)
        }
    };
    this.nqr = function() {
        var e = this.com.ljc("loading"),
            d = (nbt.zgl.value45 == nbt.hdv.ouq) ? this.jpo.hdv.zbt : (nbt.zgl.value45 == nbt.hdv.xam) ? this.jpo.hdv.kej : this.jpo.hdv.iyh;
        if (e) {
            this.canvas.width = 0;
            if (this.nsj === false) {
                this.iho.style.marginTop = (-d.hnh.height / 2) + "px";
                this.iho.style.marginLeft = (-d.hnh.width / 2) + "px"
            } else {
                this.iho.style.left = "0px";
                this.iho.style.top = "0px";
                this.iho.style.marginTop = ((this.piw - d.hnh.height) / 2) + "px";
                this.iho.style.marginLeft = ((this.lyw - d.hnh.width) / 2) + "px"
            }
            this.iho.style.width = (d.hnh.width > this.lyw) ? this.lyw + "px" : d.hnh.width + "px";
            this.iho.style.height = (d.hnh.height > this.piw) ? this.piw + "px" : d.hnh.height + "px";
            this.canvas.width = Math.round(d.hnh.width);
            this.canvas.height = Math.round(d.hnh.height);
            e.pki(d.hnh);
            e.dly(d)
        }
    };
    this.dhw = function() {
        if (nbt.eea.ito && !nbt.eea.qai) {
            if (!this.uck.dmu && nbt.eea.yoq != nbt.ynh.nqw) {
                this.ejt = false;
                this.jor = 0
            }
        }
    };
    this.cnl = function(d) {
        if (nbt.eea.ito) {
            if (!this.xsu) {
                return nbt.jpo.afo
            } else {
                if (!this.myh) {
                    return nbt.jpo.ujh
                }
            }
        }
        return d
    };
    this.cct = function() {
        var d = this.com.ljc("loading");
        this.zxm();
        if (d) {
            d.ddn = true
        }
        if ((nbt.eea.yoq === nbt.ynh.fks || nbt.eea.yoq === nbt.ynh.wtg || nbt.eea.yoq === nbt.ynh.igq) && nbt.eea.fcc === nbt.os.nuu && nbt.eea.eas === true) {
            if (this.uck.dmu === false || nbt.eea.pfa() === false || nbt.eea.jll() === false) {
                nbt.nxs = nbt.zgd.nbg
            }
        }
        if (nbt.nxs == 0) {
            if (this.ejt === true && nbt.eea.hhj().length === 0) {
                this.ejt = false
            }
            if (d) {
                if (nbt.zgl.value45 === nbt.hdv.xam) {
                    d.start()
                } else {
                    if (nbt.zgl.value45 === nbt.hdv.owg) {
                        d.enu()
                    }
                }
                d.jsb(0)
            }
            this.bqy();
            if (this.ejt === true) {
                this.tdz()
            }
            if (d && d.qrh() && nbt.zgl.value45 === nbt.hdv.xam) {
                d.avo = nbt.zbt.uck.start
            } else {
                this.uck.start()
            }
        } else {
            if (d) {
                if (nbt.nxs == nbt.zgd.ioa && nbt.eea.yoq === nbt.ynh.hvp) {
                    d.rcr = this.language.ihw;
                    d.jsb(0)
                } else {
                    if (nbt.nxs == nbt.opg.tgt) {
                        d.rcr = this.language.vbe;
                        d.jsb(0)
                    } else {
                        d.rcr = this.language.hwb;
                        if (nbt.eea.fcc === nbt.os.nuu || nbt.eea.fcc === nbt.os.oxg) {
                            if (nbt.nxs != nbt.zgd.ioa && sessionStorage.sessionValue1 === nbt.language.TR) {
                                d.rcr += "|Google Chrome" + this.language.bpz
                            } else {
                                if (nbt.nxs != nbt.zgd.ioa && (sessionStorage.sessionValue1 === nbt.language.GE || sessionStorage.sessionValue1 === nbt.language.HU)) {
                                    d.rcr += "|" + this.language.kgd + " Google Chrome" + this.language.iqk
                                } else {
                                    d.rcr += "|" + this.language.bpz + " Google Chrome"
                                }
                            }
                        } else {
                            if (nbt.eea.fcc === nbt.os.zfd || nbt.eea.fcc === nbt.os.oxg) {
                                if (nbt.nxs != nbt.zgd.ioa && sessionStorage.sessionValue1 === nbt.language.TR) {
                                    d.rcr += "|Google Chrome, Mozilla Firefox" + this.language.bpz
                                } else {
                                    if (nbt.nxs != nbt.zgd.ioa && (sessionStorage.sessionValue1 === nbt.language.GE || sessionStorage.sessionValue1 === nbt.language.HU)) {
                                        d.rcr += "|" + this.language.kgd + " Google Chrome, Mozilla Firefox" + this.language.iqk
                                    } else {
                                        d.rcr += "|" + this.language.bpz + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + nbt.nxs);
                        d.jsb(0)
                    }
                }
            }
        }
    };
    this.bqy = function() {};
    this.tdz = function() {};
    this.vyq = function() {
        var e = this.nnw + this.jpo.type + "/",
            d = this.com.ljc("loading");
        if (nbt.zgl.value45 == nbt.hdv.ouq) {
            e += "load.jpg"
        } else {
            if (nbt.zgl.value45 == nbt.hdv.xam) {
                e += "load_amatic.png"
            } else {
                if (nbt.zgl.value45 == nbt.hdv.owg) {
                    this.uck.spr("splashanim", nbt.zgl.value30 + "/basic/images/" + this.jpo.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.qlo = true
            }
        }
        this.uck.spr("splash", e);
        this.uck.toc()
    };
    this.bvb = function() {};
    this.zmy = function(e) {
        for (var d = 0; d < nbt.zgl.value5.length; d++) {
            if (nbt.zgl.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.xnv = function() {
        nbt.zbt.xkm = true;
        if (!nbt.zbt.xsu) {
            nbt.zbt.mbn();
            if (nbt.zbt.evk()) {
                nbt.zbt.inl()
            }
        } else {
            nbt.zbt.lue()
        }
        nbt.zbt.connect()
    };
    this.mbn = function() {};
    this.lue = function() {};
    this.connect = function() {
        this.kkk.connect(this.emy, this.vfy, this.mqe, this.igm, this.bor, this.qjs, this.czx)
    };
    this.par = function(d) {
        if (typeof d === "undefined") {
            nbt.zbt.kkk.par(0)
        } else {
            nbt.zbt.kkk.par(d)
        }
    };
    this.csj = function(d) {
        this.izz = 0;
        this.fjy = 0;
        this.zlw = d;
        clearInterval(this.awm);
        this.awm = setInterval(this.qae, 1000)
    };
    this.qae = function() {
        var d = nbt.zbt.com.ljc("loading");
        nbt.zbt.izz++;
        nbt.zbt.fjy = Math.round(nbt.zgl.value47 / 1000) - nbt.zbt.izz;
        nbt.zbt.fjy = (nbt.zbt.fjy > 0) ? nbt.zbt.fjy : 0;
        if (!nbt.zbt.fas) {
            if (d) {
                d.rcr = "Can not connect to game server!|Tries to connect: " + nbt.zbt.zlw + " (" + nbt.zbt.fjy + " sec)";
                d.jsb(0)
            }
        }
    };
    this.vpl = function() {
        return nbt.zgl.value74
    };
    this.jsb = function(d, g, e, f) {};
    this.gpv = function() {
        return (this.ohe === true && this.fas === true && this.ivl === false)
    };
    this.aiu = function(e) {
        var d = this.com.ljc("history");
        this.ohe = true;
        if (this.fas) {
            if (this.jpo.orb) {
                nbt.eea.sfx(this.context2D, this.jpo.zbt.hnh.x - this.jpo.zbt.ssz, this.jpo.zbt.hnh.y - this.jpo.zbt.ssz, this.jpo.zbt.hnh.width + 2 * this.jpo.zbt.ssz, this.jpo.zbt.hnh.height + 2 * this.jpo.zbt.ssz, "black", 1)
            }
            nbt.eea.fme(this.context2D, e, "white", this.jpo.zbt.hnh.x, this.jpo.zbt.hnh.y, this.jpo.zbt.hnh.width, this.jpo.zbt.hnh.height, "arial", 28, "bold");
            if (d) {
                d.jsb()
            }
        }
    };
    this.jym = function() {
        nbt.zbt.com.dse("msg", "#fon");
        nbt.zbt.pcz(false);
        nbt.zbt.zck.qrc(false);
        nbt.zbt.zck.hjv.dse("exit", "#ecu", [true]);
        if (nbt.eea.ojg()) {
            nbt.eea.mww()
        }
        if (nbt.zgl.value67 > 0) {
            nbt.zbt.par(nbt.zgl.value67)
        }
    };
    this.kjp = function() {
        clearTimeout(nbt.zbt.yew);
        if (nbt.zbt.zck) {
            nbt.zbt.zck.qrc(false)
        }
        if (!nbt.zbt.xsu) {
            nbt.zbt.stop();
            if (nbt.zbt.zck) {
                nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.sya]);
                nbt.zbt.jsb()
            }
            if (nbt.zbt.auw() === true && nbt.eea.ojg()) {
                nbt.eea.ite();
                nbt.eea.mww();
                setTimeout(nbt.zbt.kkk.pwv.close, 800)
            } else {
                nbt.zbt.kkk.pwv.close()
            }
        } else {
            nbt.zbt.kkk.close()
        }
    };
    this.ekh = function() {
        nbt.eea.mww()
    };
    this.emm = function() {
        var d = (nbt.zbt.auw() === true) ? "smartphone" : "desktop";
        if (nbt.zbt.wie != "") {
            var e = window.open(nbt.zgl.value30 + "/gamerules/en/" + d + "/" + nbt.zbt.emy.toLowerCase() + ".html?rtp=" + nbt.zbt.wie, "_blank", (d === "desktop") ? "width=800,scrollbars=yes" : null);
            if (typeof e === "undefined") {
                window.location.href = nbt.zgl.value30 + "/gamerules/en/" + d + "/" + nbt.zbt.emy.toLowerCase() + ".html?rtp=" + nbt.zbt.wie
            }
        }
    };
    this.mdn = function() {
        nbt.zbt.dvv = false;
        nbt.zbt.pab();
        nbt.zbt.ilm();
        nbt.zbt.nzg()
    };
    this.whx = function() {
        var d = nbt.zbt.com.ljc("stats");
        if (d) {
            d.con(true, true)
        }
        nbt.zbt.hit.close(true)
    };
    this.dtq = function() {
        var d = nbt.zbt.com.ljc("stats");
        nbt.zbt.stop();
        if (d && d.yzw()) {
            d.con(true, true)
        }
        nbt.zbt.kkk.pwv.close();
        if (nbt.zbt.hit) {
            nbt.zbt.hit.close(false)
        }
    };
    this.cnf = function() {
        clearTimeout(nbt.zbt.yew);
        nbt.zbt.zck.qrc(false);
        nbt.zbt.stop();
        nbt.zbt.kkk.pwv.mpg()
    };
    this.xff = function() {
        if (nbt.zbt.yll) {
            return
        }
        var d = nbt.zbt.com.ljc("history");
        if (d) {
            d.qrc(false)
        }
        nbt.zbt.stop();
        nbt.zbt.kkk.yzx(nbt.zbt.oce)
    };
    this.ctl = function() {
        if (nbt.zbt.yll) {
            return
        }
        var d = nbt.zbt.com.ljc("history");
        if (d) {
            d.qrc(false)
        }
        nbt.zbt.stop();
        nbt.zbt.kkk.pvj(nbt.zbt.oce)
    };
    this.dop = function() {
        var d = nbt.zbt.com.ljc("history");
        if (d) {
            d.qrc(false)
        }
        nbt.zbt.stop();
        nbt.zbt.ytg();
        nbt.zbt.kkk.close()
    };
    this.wzk = function() {
        nbt.zbt.uck.aqn("btn");
        nbt.zbt.uck.gyl("btn");
        nbt.zbt.xxq()
    };
    this.whd = function() {
        var f = nbt.zbt.com.ljc("topb"),
            e = nbt.zbt.com.ljc("settings"),
            g = nbt.zbt.com.ljc("gameb"),
            d = nbt.zbt.com.ljc("topi");
        if (nbt.zbt.uck.dmu === true) {
            nbt.zbt.jor = (nbt.zbt.jor === nbt.zbt.rvo.length - 1) ? 0 : nbt.zbt.jor + 1;
            nbt.zbt.ksr(nbt.zbt.rvo[nbt.zbt.jor])
        } else {
            nbt.zbt.jor = (nbt.zbt.jor === nbt.zbt.rvo.length - 1) ? 0 : nbt.zbt.rvo.length - 1;
            nbt.zbt.fpw((nbt.zbt.rvo[nbt.zbt.jor] === 0))
        }
        sessionStorage.sessionValue6 = nbt.zbt.jor;
        if (nbt.zbt.rvo[nbt.zbt.jor] > 0) {
            nbt.zbt.uck.gyl("audioon")
        }
        if (d) {
            d.oxd("audio", nbt.zbt.rvo[nbt.zbt.jor])
        }
        if (f) {
            f.hjv.dse("audio", "#sqy", [nbt.zbt.jor])
        }
        if (e) {
            e.hjv.dse("audio", "#sqy", [nbt.zbt.jor])
        }
        if (g) {
            g.hjv.dse("audio", "#sqy", [nbt.zbt.jor])
        }
        nbt.zbt.jsb()
    };
    this.url = function() {};
    this.eek = function() {
        var d = nbt.zbt.com.ljc("settings");
        if (d) {
            if (d.yzw()) {
                nbt.zbt.wzw()
            } else {
                nbt.zbt.qkg()
            }
            nbt.zbt.uck.gyl("btn");
            if (nbt.zbt.jpo.hnx === false) {
                nbt.zbt.zck.hjv.dse("setting", "#kxt", [d.yzw()])
            }
        }
    };
    this.vgf = function() {
        var d = nbt.zbt.com.ljc("settings"),
            e = "";
        nbt.zbt.xhr = (nbt.zbt.xhr < nbt.zbt.njb.length - 1) ? nbt.zbt.xhr + 1 : (nbt.eea.dem()) ? 0 : 1;
        localStorage.localValue1 = nbt.zbt.xhr;
        nbt.zbt.zxm();
        if (d) {
            d.hjv.dse("adjustment", "#sqy", [(nbt.zbt.yjg === nbt.jpo.toy) ? 0 : 1]);
            if (nbt.zbt.njb[nbt.zbt.xhr] === nbt.gtv.gpm) {
                e = nbt.zbt.language.left
            } else {
                if (nbt.zbt.njb[nbt.zbt.xhr] === nbt.gtv.kld) {
                    e = nbt.zbt.language.qjg
                } else {
                    if (nbt.zbt.njb[nbt.zbt.xhr] === nbt.gtv.ayf) {
                        e = nbt.zbt.language.mcn
                    }
                }
            }
            d.hjv.dse("adjustment", "#lun", [e])
        }
    };
    this.ctd = function(e, d) {
        this.zck.hjv.dse("creditd", "#lun", [this.zai(e), d])
    };
    this.wto = function(e, d) {
        if (e > 0) {
            this.zck.hjv.dse("betd", "#lun", [this.zai(e), d])
        } else {
            this.zck.hjv.dse("betd", "#lun", ["", d])
        }
    };
    this.ico = function(e) {
        var d = this.com.ljc("topi");
        this.oce = e;
        if (d) {
            d.hty("id", (e > 0) ? e : "")
        }
    };
    this.zkc = function() {
        var e = "",
            d = nbt.zbt.com.ljc("topi");
        if (nbt.zgl.value49) {
            e += nbt.zbt.utd()
        }
        if (nbt.zgl.value49 && nbt.zgl.value11) {
            e += " ["
        }
        if (nbt.zgl.value11) {
            e += nbt.zbt.hyx()
        }
        if (nbt.zgl.value49 && nbt.zgl.value11) {
            e += "]"
        }
        if (d) {
            d.hty("time", e)
        }
    };
    this.hyx = function() {
        return this.getTime(new Date().getTime() - this.nbr)
    };
    this.utd = function() {
        var d = new Date();
        return this.qdl(d.getHours()) + ":" + this.qdl(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e,
            d = 0,
            f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.qdl(d) + ":" + this.qdl(f)
    };
    this.qdl = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.yva = function() {
        if (nbt.zgl.value11 || nbt.zgl.value49) {
            if (nbt.zgl.value49) {
                this.utd()
            }
            this.nbr = new Date().getTime();
            this.zkc();
            this.boi = setInterval(this.zkc, 1000)
        }
    };
    this.kao = function() {
        clearInterval(this.boi)
    };
    this.evj = function(d) {
        this.nbr -= d
    };
    this.vwy = function(d, f) {
        var e = this.com.ljc("loading");
        if (e && e.rcr == null) {
            if (f && f !== "") {
                e.alp = f
            } else {
                e.alp = this.language.error
            }
            e.rcr = d;
            e.jsb(this.uck.aoh())
        }
    };
    this.qkg = function() {};
    this.wzw = function() {};
    this.wbo = function() {};
    this.vqo = function() {};
    this.xxq = function() {
        var g = false,
            h = this.com.ljc("topb"),
            f = this.com.ljc("settings"),
            i = this.com.ljc("gameb"),
            d = this.com.ljc("topi");
        this.ipq = (this.ipq + 1 == nbt.zgl.value5.length) ? 0 : this.ipq + 1;
        sessionStorage.sessionValue1 = nbt.zgl.value5[this.ipq];
        this.language = this.awh(nbt.zgl.value5[this.ipq]);
        this.dfu();
        if (h && g == false) {
            var e = h.hjv.ljc("language");
            if (e) {
                e.hfu(this.djj(nbt.zgl.value5[this.ipq]));
                g = true
            }
            h.sgw(true)
        }
        if (f && g == false) {
            var e = f.hjv.ljc("language");
            if (e) {
                e.hfu(this.djj(nbt.zgl.value5[this.ipq]));
                g = true
            }
        }
        if (i && g == false) {
            var e = i.hjv.ljc("language");
            if (e) {
                e.hfu(this.djj(nbt.zgl.value5[this.ipq]));
                g = true
            }
        }
        if (g == false) {
            var e = this.zck.hjv.ljc("lang");
            if (e) {
                e.jdb = this.djj(nbt.zgl.value5[this.ipq])
            }
        }
        if (d) {
            d.sqy("language", sessionStorage.sessionValue1)
        }
        this.jsb()
    };
    this.dfu = function() {};
    this.awh = function(d) {
        if (d == nbt.language.EN || d == nbt.language.US) {
            return new qft()
        } else {
            if (d == nbt.language.ES || d == nbt.language.CO || d == nbt.language.MX || d == nbt.language.CL || d == nbt.language.VE) {
                return new cud()
            } else {
                if (d == nbt.language.DE || d == nbt.language.AT) {
                    return new vtv()
                } else {
                    if (d == nbt.language.PT || d == nbt.language.BR) {
                        return new rcw()
                    } else {
                        if (d == nbt.language.RU) {
                            return new usy()
                        } else {
                            if (d == nbt.language.EE) {
                                return new ihh()
                            } else {
                                if (d == nbt.language.TR) {
                                    return new erm()
                                } else {
                                    if (d == nbt.language.CZ) {
                                        return new hxg()
                                    } else {
                                        if (d == nbt.language.GR) {
                                            return new lmg()
                                        } else {
                                            if (d == nbt.language.BG) {
                                                return new ycc()
                                            } else {
                                                if (d == nbt.language.GE) {
                                                    return new cqv()
                                                } else {
                                                    if (d == nbt.language.HU) {
                                                        return new ybq()
                                                    } else {
                                                        if (d == nbt.language.RO) {
                                                            return new xsb()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.djj = function(d) {
        if (d) {
            return this.uck.cft(d)
        }
        return null
    };
    this.vbw = function() {
        this.uck.wxi()
    };
    this.ytg = function() {};
    this.fpw = function(d) {
        this.uck.npg(d)
    };
    this.ksr = function(d) {
        this.uck.ucx(d)
    };
    this.inl = function() {
        this.hit = new gcb().kji(this, nbt.zgl.value6)
    };
    this.xev = function() {
        if (this.hit) {
            this.hit.connect(this.emy, this.vfy, this.mqe, this.igm, this.bor, true)
        }
    };
    this.nzg = function() {
        if (nbt.zbt.hit) {
            nbt.zbt.hit.connect(nbt.zbt.emy, nbt.zbt.vfy, nbt.zbt.mqe, nbt.zbt.igm, nbt.zbt.bor, false)
        }
    };
    this.ilm = function() {};
    this.pxs = function() {};
    this.rid = function(d) {
        clearTimeout(this.dcl);
        this.dcl = setTimeout(this.dcc, d)
    };
    this.dcc = function() {
        nbt.zbt.dvv = true
    };
    this.evk = function() {
        return nbt.zgl.value36 || nbt.zgl.value37
    };
    this.wdf = function() {
        this.rsw();
        var d = this.com.ljc("history");
        this.fas = true;
        this.yll = true;
        if (d) {
            d.rdm(true)
        }
        this.aiu(this.language.wuo.toUpperCase())
    };
    this.ajq = function() {
        loadGame("hist_" + nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/hist_" + nbt.zbt.emy.toLowerCase(), "UTF-8");
        removeGame(nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/" + nbt.zbt.emy.toLowerCase())
    };
    this.kuy = function() {
        window.location.href = "./history_" + this.emy.toLowerCase() + ".html"
    };
    this.tog = function() {
        if (nbt.zbt.myh) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            sessionStorage.exitGame = "true";
            window.parent.postMessage('CloseGame',"*");
        } else {
            removeGame(nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/" + nbt.zbt.emy.toLowerCase());
            removeGame("hist_" + nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/hist_" + nbt.zbt.emy.toLowerCase());
            loadMenu("menu", nbt.zgl.value1001, "UTF-8", true)
        }
    };
    this.ysv = function() {
        if (sessionStorage.sessionValue5 != null) {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
        } else {
            removeGame(nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/" + nbt.zbt.emy.toLowerCase());
            removeGame("hist_" + nbt.zbt.emy.toLowerCase(), nbt.zgl.value30 + "/" + nbt.zbt.emy.toLowerCase() + "/src/hist_" + nbt.zbt.emy.toLowerCase());
            loadMenu("menu", nbt.zgl.value1001, "UTF-8", false)
        }
    };
    this.mhh = function(d) {
        var e = this.com.ljc("msg");
        clearTimeout(this.usz);
        if (e) {
            e.type = d;
            this.usz = setTimeout(e.jxl, 300)
        }
    };
    this.stop = function() {
        this.kao();
        this.vwv();
        this.qtq();
        clearTimeout(this.dcl);
        clearTimeout(this.usz);
        clearInterval(this.tsf);
        this.com.dse("autop", "#stop");
        this.com.dse("settings", "#stop");
        this.com.dse("topb", "#stop")
    };
    this.gnh = function() {
        var d = false;
        if (this.mxr.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.vfy == "freeplay" && this.mqe == "freeplay") {
                d = true
            } else {
                if (this.igm && (this.igm == "b71d982ffcbe56eb8cd11fa05963bbee" || this.igm.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (nbt.zgl.value68 != null && this.czx.toLowerCase() === nbt.zgl.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            nbt.zgl.value21.e = false
        }
        return d
    };
    this.zpv = function() {
        return (nbt.zgl.value65 > 0)
    };
    this.zob = function() {
        return (((nbt.eea.fcc === nbt.os.ghj && nbt.eea.eeq() === true) || nbt.eea.fcc === nbt.os.nuu) && this.xsu === false)
    };
    this.opq = function() {
        return false
    };
    this.hoi = function() {
        if (nbt.zbt.zpv() && nbt.zbt.opq()) {
            clearTimeout(nbt.zbt.yew);
            nbt.zbt.yew = setTimeout(nbt.zbt.kjp, nbt.zgl.value65)
        }
    };
    this.kug = function() {
        if (nbt.zbt.zpv() && nbt.zbt.yew >= 0) {
            if (nbt.zbt.opq()) {
                clearTimeout(nbt.zbt.yew);
                nbt.zbt.yew = setTimeout(nbt.zbt.kjp, nbt.zgl.value65)
            } else {
                clearTimeout(nbt.zbt.yew);
                nbt.zbt.yew = -1
            }
        }
    };
    this.vwv = function() {
        if (nbt.zbt.zpv()) {
            clearTimeout(nbt.zbt.yew);
            nbt.zbt.yew = -1
        }
    };
    this.lqt = function() {
        return false
    };
    this.qiv = function() {
        return false
    };
    this.sso = function() {
        if (nbt.zbt.lqt() && nbt.zbt.qiv() && nbt.zbt.sod < 0) {
            clearTimeout(nbt.zbt.sod);
            nbt.zbt.sod = setTimeout(nbt.zbt.kqv, nbt.zbt.lvj)
        }
    };
    this.xbs = function() {
        if (nbt.zbt.lqt() && nbt.zbt.sod >= 0) {
            if (nbt.zbt.qiv()) {
                clearTimeout(nbt.zbt.sod);
                nbt.zbt.sod = setTimeout(nbt.zbt.kqv, nbt.zbt.lvj)
            } else {
                clearTimeout(nbt.zbt.sod);
                nbt.zbt.sod = -1
            }
        }
    };
    this.qtq = function() {
        if (nbt.zbt.lqt()) {
            clearTimeout(nbt.zbt.sod);
            nbt.zbt.sod = -1
        }
    };
    this.kqv = function() {};
    this.rcu = function() {};
    this.xko = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.bor.replace(/_*/g, ""));
        if (e > d) {
            this.bor = f
        }
    };
    this.pcz = function(g) {
        var e = (g && !this.niv),
            f = this.com.ljc("topb"),
            d = this.com.ljc("topi");
        if (d) {
            d.ecu(e)
        }
        if (f) {
            f.ecu(e);
            f.qrc(e)
        }
    };
    this.cil = function(g) {
        var e = (g && !this.niv),
            f = this.com.ljc("topb"),
            d = this.com.ljc("topi");
        if (d) {
            d.ecu(e)
        }
        if (f) {
            f.ecu(e);
            f.xik(e)
        }
    };
    this.wnp = function(g) {
        var e = (g && !this.niv),
            f = this.com.ljc("topb"),
            d = this.com.ljc("topi");
        if (d) {
            d.ecu(e)
        }
        if (f) {
            f.ecu(e);
            f.ukk(e)
        }
    };
    this.ruo = function() {
        var d = this.com.ljc("topb");
        if (d && !d.yzw()) {
            this.uck.aqn("panel_in");
            this.uck.gyl("panel_in");
            d.jxl()
        }
    };
    this.pab = function(d) {
        var e = this.com.ljc("topb");
        if (e && e.yzw()) {
            this.uck.aqn("panel_out");
            this.uck.gyl("panel_out");
            if (d) {
                e.ioq = d
            }
            e.fon()
        }
    };
    this.nud = function(f) {
        if (nbt.zgl.value21.e == false || this.myh == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (nbt.zgl.value21.m != 1) {
                e = f * nbt.zgl.value21.m;
                var g = nbt.zgl.value21.m.toString().indexOf(".");
                if (g > 0) {
                    d = nbt.zgl.value21.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.khy(e, (d == 0) ? 0 : d + 1);
            return e
        }
    };
    this.zai = function(f) {
        if (nbt.zgl.value21.e == false || this.myh == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (nbt.zgl.value21.m != 1) {
                e = f * nbt.zgl.value21.m;
                var g = nbt.zgl.value21.m.toString().indexOf(".");
                if (g > 0) {
                    d = nbt.zgl.value21.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.khy(e, (d == 0) ? 0 : d + 1);
            if (nbt.zgl.value21.s) {
                e = nbt.zgl.value21.s + " " + e
            }
            return e
        }
    };
    this.khy = function(k, j) {
        var e = "",
            g = "",
            f = "",
            d = [];
        k = k.toString();
        j = (j) ? j : 0;
        f = k.substring(k.length - j, k.length);
        g = k.substring(0, k.length - j);
        if (g.length < 4) {
            if (nbt.zgl.value21.cs != null) {
                k = k.replace(/\./, nbt.zgl.value21.cs)
            }
            return k.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var h = 1; h * 3 < g.length; h++) {
                d[h] = g.substring(g.length - (h + 1) * 3, g.length - h * 3)
            }
            for (var h = d.length - 1; h >= 0; h--) {
                e += d[h];
                if (h > 0) {
                    if (nbt.zgl.value21.ts != null) {
                        e += nbt.zgl.value21.ts
                    }
                }
            }
            if (nbt.zgl.value21.cs != null) {
                f = f.replace(/\./, nbt.zgl.value21.cs)
            }
            return e + f
        }
    };
    this.txv = function(f) {
        if (nbt.zgl.value76.f == false || this.myh == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (nbt.zgl.value76.m != 1) {
                e = f * nbt.zgl.value76.m;
                var g = nbt.zgl.value76.m.toString().indexOf(".");
                if (g > 0) {
                    d = nbt.zgl.value76.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.owk(e, (d == 0) ? 0 : d + 1);
            return e
        }
    };
    this.clq = function(f) {
        if (nbt.zgl.value76.f == false || this.myh == true) {
            return f.toString()
        } else {
            var e = Number(f),
                d = 0;
            if (nbt.zgl.value76.m != 1) {
                e = f * nbt.zgl.value76.m;
                var g = nbt.zgl.value76.m.toString().indexOf(".");
                if (g > 0) {
                    d = nbt.zgl.value76.m.toString().length - (g + 1)
                }
            }
            e = e.toFixed(d).toString();
            e = this.owk(e, (d == 0) ? 0 : d + 1);
            if (nbt.zgl.value76.s) {
                e = nbt.zgl.value76.s + " " + e
            }
            return e
        }
    };
    this.owk = function(k, j) {
        var e = "",
            g = "",
            f = "",
            d = [];
        k = k.toString();
        j = (j) ? j : 0;
        f = k.substring(k.length - j, k.length);
        g = k.substring(0, k.length - j);
        if (g.length < 4) {
            if (nbt.zgl.value76.cs != null) {
                k = k.replace(/\./, nbt.zgl.value76.cs)
            }
            return k.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var h = 1; h * 3 < g.length; h++) {
                d[h] = g.substring(g.length - (h + 1) * 3, g.length - h * 3)
            }
            for (var h = d.length - 1; h >= 0; h--) {
                e += d[h];
                if (h > 0) {
                    if (nbt.zgl.value76.ts != null) {
                        e += nbt.zgl.value76.ts
                    }
                }
            }
            if (nbt.zgl.value76.cs != null) {
                f = f.replace(/\./, nbt.zgl.value76.cs)
            }
            return e + f
        }
    };
    this.duv = function() {
        for (var e = 0, d = this.kkk.pwv.bow.length; e < d; e++) {
            this.com.xih(this.kkk.pwv.bow[e].qpx, this.mix(this.kkk.pwv.bow[e], this.jpo.ykv.hnh[e], this.jpo.ykv.display, this.style.ykv.rdg[e], null), ["jackpots"])
        }
        this.com.xih("jwp", this.mix(null, this.jpo.ykv.sda.hnh, this.jpo.ykv.sda, this.style.ykv.sda, this.uck.cft("jackpot")));
        this.com.dse("jwp", "#uzk", [false])
    };
    this.jbt = function() {
        var e = this.com.qbc("jackpots"),
            f = this.com.ljc("jwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].pki(this.jpo.ykv.hnh[g]);
            e[g].dly(this.jpo.ykv.display)
        }
        if (f) {
            f.pki(this.jpo.ykv.sda.hnh);
            f.dly(this.jpo.ykv.sda)
        }
    };
    this.mix = function(f, i, h, g, d) {
        var e = new iax();
        e.kji(i, null, this.context2D);
        e.parent = this;
        e.jdb = d;
        e.gku(g);
        e.dly(h);
        if (f) {
            e.akm(f.moc);
            e.rkx(f.value)
        }
        return e
    };
    this.yqp = function(f) {
        if (this.cvs() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.com.dse(f[e].qpx, "#rkx", [f[e].value])
            }
            this.jsb()
        }
    };
    this.agh = function(d) {
        if (this.cvs() === true) {
            this.ykv = {
                qpx: d.qpx,
                value: d.value,
                dgg: d.dgg
            }
        }
    };
    this.ten = function() {
        this.ykv = null
    };
    this.hpg = function() {
        return false
    };
    this.cvs = function() {
        return (!this.xsu && this.kkk.pwv.bow.length > 0 && this.hpg())
    };
    this.ifo = function() {
        return (this.ykv != null)
    }
}

function lkj() {
    this.ocn = false;
    this.kji = function(a, b) {
        this.frh = b;
        this.ymw = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.ydx = f;
        this.gvg = e;
        this.ecy = g;
        this.emy = c;
        this.qjs = d;
        this.czx = b;
        this.pwv = new rht(this.frh, c, f, e, g, a, d, b);
        this.pwv.kji(this)
    };
    this.zra = function() {};
    this.exq = function() {
        if (!this.ocn) {
            this.ocn = true;
            this.ymw.meb = this.pwv.meb;
            if (this.pwv.dnp === nbt.jcp.kqb.aam) {
                this.ymw.jsn = this.pwv.dnp;
                this.ymw.rxe = this.pwv.rxe;
                this.ymw.nfz = this.pwv.nfz;
                this.ymw.kcx = [];
                for (var b = 0, a = this.pwv.kcx.length; b < a; b++) {
                    this.ymw.kcx[b] = this.pwv.kcx[b]
                }
            }
            this.ymw.jes();
            this.ymw.zpx(this.pwv)
        }
        this.ymw.jsb()
    };
    this.ahs = function(a) {
        this.ymw.dgg = this.pwv.dgg;
        this.ymw.ltz(a)
    };
    this.ond = function(b) {
        if (b.dnp !== nbt.jcp.kqb.aam) {
            this.ymw.jsn = b.dnp;
            this.ymw.rxe = b.rxe;
            this.ymw.nfz = b.nfz;
            this.ymw.nln = b.nln;
            this.ymw.kcx = [];
            for (var c = 0, a = b.kcx.length; c < a; c++) {
                this.ymw.kcx[c] = b.kcx[c]
            }
        }
        this.ymw.dgg = b.dgg;
        this.ymw.fyd = b.fyd;
        this.ymw.uov = b.uov;
        this.ymw.dby = [];
        for (var c = 0, a = b.dby.length; c < a; c++) {
            this.ymw.dby[c] = b.dby[c]
        }
        this.ymw.dlq = [];
        for (var c = 0, a = b.dlq.length; c < a; c++) {
            this.ymw.dlq[c] = b.dlq[c]
        }
    };
    this.zpm = function(a) {
        if (a == nbt.jcp.kqb.ouq || a == nbt.jcp.kqb.xlh || a == nbt.jcp.kqb.fwl) {
            this.ymw.ico(this.pwv.oce);
            this.ond(this.pwv);
            if (nbt.eea.fcc === nbt.os.nuu && nbt.eea.yoq !== nbt.ynh.fks) {
                this.ymw.mhh(nbt.opg.vld)
            } else {
                this.ymw.npq(this.pwv.dnp)
            }
            this.ymw.cix()
        }
    };
    this.mzz = function(a) {
        this.ymw.ico(this.pwv.oce);
        this.ond(this.pwv);
        if (a == nbt.jcp.kqb.aam) {
            this.ymw.npq(this.pwv.dnp)
        } else {
            if (a == nbt.jcp.kqb.ouq) {
                this.ymw.luh()
            } else {
                if (a == nbt.jcp.kqb.xlh) {
                    this.ymw.xjv()
                } else {
                    if (a == nbt.jcp.kqb.fwl) {
                        this.ymw.zsy()
                    }
                }
            }
        }
        this.ymw.cix()
    };
    this.ekz = function(a, b) {
        this.pwv.ekz(a, b)
    };
    this.xgw = function() {
        this.pwv.xgw()
    };
    this.mft = function() {
        this.pwv.mft()
    }
}
lkj.prototype = new nhp;

function rht(g, c, f, e, h, a, d, b) {
    this.frh = g;
    this.ydx = f;
    this.gvg = e;
    this.ecy = h;
    this.emy = c;
    this.bor = a;
    this.qjs = d;
    this.czx = b;
    this.oce = 0;
    this.dgg = 0;
    this.fyd = 0;
    this.kcx = [];
    this.rxe = 0;
    this.nfz = 0;
    this.uov = 0;
    this.nln = 0;
    this.dby = [];
    this.dlq = [];
    this.meb = "";
    this.fuq = function(l) {
        if (l != null) {
            this.ogs = 0;
            this.gac = this.qpf(l);
            if (this.gac == 0) {
                this.dnp = this.zku(l);
                this.opg = this.qpf(l);
                this.oce = this.zwj(l);
                this.dgg = this.zwj(l);
                this.fyd = this.zwj(l);
                this.rxe = this.zwj(l);
                this.nfz = this.zwj(l);
                this.uov = this.zwj(l);
                this.nln = this.zwj(l);
                this.dby = [];
                for (var k = 0; k < 10; k++) {
                    this.dby.push(this.zwj(l))
                }
                this.dlq = [];
                for (var k = 0; k < 22; k++) {
                    this.dlq.push(this.zwj(l))
                }
                var j = l.substring(this.ogs, l.indexOf("#"));
                this.kcx = j.split(",");
                var m = l.substring(l.indexOf("#") + 1);
                if (m.length >= 1) {
                    this.meb = m;
                    if (nbt.zgl.value21.e === true && nbt.zgl.value21.s !== "") {
                        this.meb = ""
                    }
                }
                this.kkk.exq();
                if (this.dnp == 0) {
                    this.ucc("A/u250")
                } else {
                    if (this.opg == 0) {
                        this.kkk.zpm(this.dnp)
                    } else {
                        this.kkk.zpm(this.dnp);
                        this.kkk.ahs(this.opg)
                    }
                }
            } else {
                if (this.gac == 1) {
                    this.dnp = this.zku(l);
                    this.opg = this.qpf(l);
                    this.oce = this.zwj(l);
                    this.dgg = this.zwj(l);
                    this.fyd = this.zwj(l);
                    this.rxe = this.zwj(l);
                    this.nfz = this.zwj(l);
                    this.uov = this.zwj(l);
                    this.nln = this.zwj(l);
                    this.dby = [];
                    for (var k = 0; k < 10; k++) {
                        this.dby.push(this.zwj(l))
                    }
                    this.dlq = [];
                    for (var k = 0; k < 22; k++) {
                        this.dlq.push(this.zwj(l))
                    }
                    if (this.opg == 0) {
                        this.kkk.mzz(this.dnp)
                    } else {
                        this.kkk.ahs(this.opg)
                    }
                } else {
                    if (this.gac == 2) {} else {
                        if (this.gac == 3) {
                            this.dgg = this.zwj(l);
                            this.kkk.ctd()
                        } else {
                            if (this.gac === 8) {
                                this.ucc("8")
                            } else {
                                if (this.gac == 9) {
                                    this.kkk.ymw.mxr = l.substring(this.ogs)
                                } else {
                                    this.nxs = this.qpf(l);
                                    this.kkk.cym(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.ekz = function(j, l) {
        var m = "" + j + ",";
        for (var k = 0; k < 10; k++) {
            m += l[k];
            if (k < 9) {
                m += ":"
            }
        }
        this.ucc("A/u271," + m)
    };
    this.xgw = function() {
        this.ucc("A/u272")
    };
    this.mft = function() {
        this.ucc("A/u274")
    }
}
rht.prototype = new sji;

function ohb() {
    this.kji = function() {
        this.ruf("btn", this.xep);
        this.ruf("panel_in", this.xep);
        this.ruf("panel_out", this.xep);
        this.ruf("audioon", this.xep);
        for (var a = 0; a < 12; a++) {
            this.ruf("step" + a, this.xep)
        }
        this.ruf("maxstep", this.xep)
    }
}
ohb.prototype = new ycu;

function mdl() {
    this.nwu = {
        urj: 84,
        gfb: -1,
        value: "T",
        vcb: null
    };
    this.itl = {
        urj: 80,
        gfb: -1,
        value: "P",
        vcb: null
    };
    this.start = {
        urj: 32,
        gfb: -1,
        value: "SPACE",
        vcb: null
    };
    this.xfw = {
        urj: 81,
        gfb: -1,
        value: "Q",
        vcb: null
    };
    this.nqv = {
        urj: 67,
        gfb: -1,
        value: "C",
        vcb: null
    };
    this.uny = {
        urj: 38,
        gfb: -1,
        value: "\u25B2",
        vcb: null
    };
    this.ipu = {
        urj: 40,
        gfb: -1,
        value: "\u25BC",
        vcb: null
    };
    this.frj = {
        urj: 27,
        gfb: -1,
        value: "ESC",
        vcb: null
    };
    this.language = {
        urj: 76,
        gfb: -1,
        value: "L",
        vcb: null
    };
    this.rkt = {
        urj: 27,
        gfb: -1,
        value: "ESC",
        vcb: null
    };
    this.avk.push(this.nwu);
    this.avk.push(this.itl);
    this.avk.push(this.start);
    this.avk.push(this.xfw);
    this.avk.push(this.nqv);
    this.avk.push(this.uny);
    this.avk.push(this.ipu);
    this.avk.push(this.frj);
    this.avk.push(this.language)
}
mdl.prototype = new rzv;

function sft() {
    this.lsl = -1;
    this.adr = [];
    this.znp = 0;
    this.pqf = "black";
    this.cqi = "sans-serif";
    this.xmk = "bold";
    this.moj = 21;
    this.gku = function(a) {
        try {
            this.pqf = a.mcm;
            this.cqi = a.font;
            this.xmk = a.oav
        } catch (b) {
            console.error(b)
        }
    };
    this.dly = function(a) {
        try {
            this.moj = a.xwr
        } catch (b) {
            console.error(b)
        }
    };
    this.sqy = function(a) {
        this.znp = a
    };
    this.nsn = function() {
        return this.znp
    };
    this.jsb = function(a) {
        a.drawImage(this.adr[this.znp], this.x, this.y);
        nbt.eea.fme(a, this.lsl, this.pqf, this.x, this.y + 2, this.width, this.height, this.cqi, this.moj, this.xmk)
    };
    this.toString = function() {
        return this.lsl
    }
}
sft.prototype = new uib;

function wfe() {
    this.ryd = false;
    this.ere = true;
    this.dql = [];
    this.dby = ["", "", "", "", "", "", "", "", "", ""];
    this.dpb = "rgb(0,32,115)";
    this.qed = "rgb(98,162,234)";
    this.ktz = 4;
    this.ons = 1;
    this.ojc = 80;
    this.giy = 10;
    this.bon = 22;
    this.ptr = 8;
    this.kji = function(m, p, b, k, g) {
        wfe.prototype.kji.call(this, m, p, b);
        var n = g.lrh,
            l = g.lrh,
            o = g.pxy.hnh.width,
            f = g.pxy.hnh.height,
            d = 0,
            c = this.ojc / this.ptr,
            a = null;
        for (var e = 0; e < this.ojc; e++) {
            a = new sft();
            a.kji(new hla(n, l, o, f), this.context2D);
            a.lsl = e + 1;
            a.adr = k;
            a.dly(g.pxy);
            this.dql.push(a);
            d += 1;
            if (d < c) {
                n += g.pxy.hnh.width + g.gfh
            } else {
                d = 0;
                n = g.lrh;
                l += g.pxy.hnh.height + g.gfh
            }
        }
    };
    this.gku = function(c) {
        try {
            this.dpb = c.backgroundColor;
            this.qed = c.wrh;
            for (var b = 0, a = this.dql.length; b < a; b++) {
                this.dql[b].gku(c.pxy)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.dly = function(f) {
        try {
            var m = f.lrh,
                l = f.lrh,
                n = f.pxy.hnh.width,
                d = f.pxy.hnh.height,
                b = this.ojc / this.ptr,
                a = 0;
            for (var c = 0, g = this.dql.length; c < g; c++) {
                this.dql[c].pki(new hla(m, l, n, d));
                this.dql[c].dly(f.pxy);
                a += 1;
                if (a < b) {
                    m += f.pxy.hnh.width + f.gfh
                } else {
                    a = 0;
                    m = f.lrh;
                    l += f.pxy.hnh.height + f.gfh
                }
            }
            this.ktz = f.irs;
            this.ons = f.ssz
        } catch (k) {
            console.error(k)
        }
    };
    this.kbv = function(a, d) {
        var c = this.hyq(a, d),
            b = 0;
        if (!this.ere) {
            return
        }
        if (c != null) {
            if (!this.ryd) {
                this.euo();
                this.ryd = true;
                this.jsb();
                this.parent.vrn.bik(0)
            }
            b = this.wyo();
            if (b < this.giy && c.nsn() === 0) {
                if (this.parent.ilr(b + 1)) {
                    this.vch(c);
                    this.parent.bho()
                } else {
                    this.parent.ogc()
                }
            } else {
                if (c.nsn() !== 0) {
                    this.vch(c);
                    this.parent.bho()
                } else {
                    if (b == this.giy) {
                        this.parent.jnw()
                    }
                }
            }
            return true
        }
        return false
    };
    this.zot = function() {};
    this.ecu = function(a) {
        this.ere = a
    };
    this.aso = function() {
        return this.ere
    };
    this.jsb = function() {
        if (!this.yzw || !this.parent.gpv()) {
            return
        }
        nbt.eea.cjr(this.context2D, 0, 0, this.width, this.height, this.ktz, this.dpb, this.qed, this.ons);
        for (var a = 0; a < this.dql.length; a++) {
            this.dql[a].jsb(this.context2D)
        }
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.xwm = function() {
        this.parent.uck.gyl("clear");
        this.hbf()
    };
    this.hbf = function() {
        for (var a = 0; a < this.dql.length; a++) {
            this.dql[a].sqy(0)
        }
    };
    this.fbf = function() {
        var b = "",
            a = 0,
            c = 0;
        if (!this.parent.ilr(this.giy)) {
            this.parent.ogc()
        } else {
            this.hbf();
            this.parent.uck.gyl("quicktip");
            while (a < this.giy) {
                c = Math.floor((Math.random() * this.ojc) + 1);
                if (b.indexOf("" + c) >= 0) {
                    continue
                }
                a += 1;
                this.dql[c - 1].sqy(1);
                b += c;
                b += ","
            }
        }
    };
    this.xxp = function() {
        var c = 0,
            b = null;
        this.ryd = false;
        for (var a = 0; a < this.giy; a++) {
            this.dby[a] = "0"
        }
        for (var a = 0; a < this.ojc; a++) {
            b = this.dql[a];
            if (b.nsn() == 1 || b.nsn() == 3) {
                this.dby[c] = b.lsl;
                c += 1
            }
        }
        return this.dby
    };
    this.euo = function() {
        var b = null;
        for (var a = 0; a < this.ojc; a++) {
            b = this.dql[a];
            if (b.nsn() != 1) {
                if (b.nsn() == 3) {
                    b.sqy(1)
                } else {
                    b.sqy(0)
                }
            }
        }
    };
    this.ohc = function(c, a) {
        var e = 0,
            d = null;
        for (var b = 0; b < this.giy; b++) {
            e = c[b];
            if (e > 0) {
                d = this.dql[e - 1];
                d.sqy(1)
            }
        }
        for (var b = 0; b < this.bon; b++) {
            e = a[b];
            if (e > 0) {
                d = this.dql[e - 1];
                if (d.nsn() == 1) {
                    d.sqy(3)
                } else {
                    d.sqy(2)
                }
            }
        }
    };
    this.ddg = function(a) {
        var b = this.dql[a - 1];
        if (b.nsn() == 1) {
            b.sqy(3)
        } else {
            b.sqy(2)
        }
        b.jsb(this.context2D);
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
        return b.nsn()
    };
    this.vch = function(a) {
        if (a.nsn() == 1 || a.nsn() == 3) {
            a.sqy(0);
            this.parent.uck.gyl("clear")
        } else {
            a.sqy(1);
            this.parent.uck.gyl("quicktip")
        }
        this.jfb(a)
    };
    this.jfb = function(a) {
        a.jsb(this.context2D);
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.hyq = function(b, f) {
        var d = null,
            a = b - this.x,
            e = f - this.y;
        for (var c = 0; c < this.dql.length; c++) {
            d = this.dql[c];
            if (a >= d.x && a <= d.x + d.width && e >= d.y && e <= d.y + d.height) {
                return d
            }
        }
        return null
    };
    this.wyo = function() {
        var b = 0,
            c = null;
        for (var a = 0; a < this.dql.length; a++) {
            c = this.dql[a];
            if (c.nsn() == 1 || c.nsn() == 3) {
                b += 1
            }
        }
        return b
    };
    this.avw = function() {
        var b = 0,
            c = null;
        for (var a = 0; a < this.dql.length; a++) {
            c = this.dql[a];
            if (c.nsn() == 3) {
                b += 1
            }
        }
        return b
    }
}
wfe.prototype = new uib;

function zfe() {
    var b = this;
    var c = 0;
    var a = 1;
    this.bkl = null;
    this.wvs = null;
    this.dva = null;
    this.gky = null;
    this.fpi = null;
    this.dpb = "rgb(0,32,115)";
    this.qed = "rgb(98,162,234)";
    this.pqf = "rgb(38,58,109)";
    this.cqi = "sans-serif";
    this.xmk = "bold";
    this.moj = 21;
    this.ktz = 4;
    this.ons = 1;
    this.woj = 45;
    this.ulo = 2;
    this.qbn = 0;
    this.yds = 0;
    this.cdf = 0;
    this.bws = 0;
    this.suu = 0;
    this.tjo = 0;
    this.hub = 0;
    this.mtd = 0;
    this.rih = 0;
    this.pdq = 0;
    this.dkx = 0;
    this.hiz = 0;
    this.bsy = 0;
    this.bio = false;
    this.dmv = -1;
    this.ygz = true;
    this.lel = 0;
    this.kux = 0;
    this.hoj = 0;
    this.vlv = false;
    this.gku = function(d) {
        try {
            this.dpb = d.backgroundColor;
            this.qed = d.wrh;
            this.pqf = d.mcm;
            this.cqi = d.font;
            this.xmk = d.oav
        } catch (f) {
            console.error(f)
        }
    };
    this.dly = function(d) {
        try {
            this.qzj();
            this.moj = d.xwr;
            this.woj = d.foz;
            this.ulo = d.qzw;
            this.qbn = d.jqq;
            this.yds = d.tdj;
            this.bws = d.hsv;
            this.cdf = d.cgn;
            this.pdq = d.rdi;
            this.dkx = d.kof;
            this.hiz = d.law;
            this.ktz = d.irs;
            this.ons = d.ssz
        } catch (f) {
            console.error(f)
        }
    };
    this.ouj = function(d, h, f, g) {
        var e = this.context2D;
        if (g) {
            e.drawImage(this.dva, d, h)
        } else {
            e.drawImage(this.wvs, d, h)
        }
        nbt.eea.fme(e, f, this.pqf, d, h + this.ulo, this.woj, this.woj, this.cqi, this.moj, this.xmk)
    };
    this.ada = function() {
        if (!this.yzw || !this.parent.gpv()) {
            return
        }
        var d = this.context2D,
            g = 0,
            e = 0,
            k = 0,
            j = null,
            f = (this.dmv === c) ? this.suu : 20;
        nbt.eea.cjr(d, 0, 0, this.width, this.height, this.ktz, this.dpb, this.qed, this.ons);
        g = this.width - (this.woj + this.qbn), e = this.height - this.woj + this.yds;
        if (this.fpi && this.fpi.length > 0 && this.ygz === true) {
            for (var h = 0; h < f; h++) {
                k = this.fpi[h], j = this.parent.noi.dql[k - 1];
                if (j.nsn() == 3) {
                    this.ouj(g, e, j.lsl, true)
                } else {
                    this.ouj(g, e, j.lsl, false)
                }
                if (h < 9) {
                    g -= this.woj
                } else {
                    if (h == 9) {
                        g = this.width - (this.woj + this.qbn) - (9 * this.woj);
                        e -= this.woj
                    } else {
                        g += this.woj
                    }
                }
            }
        }
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.jsb = function(o, m, p, l) {
        if (this.vlv === true) {
            this.vlv = false;
            this.ada();
            return
        }
        if (!this.yzw || !this.parent.gpv()) {
            return
        }
        var q = this.context2D,
            j = (o != null && m != null && p != null && l != null),
            f = 0,
            e = 0,
            d = 0,
            g = null;
        q.save();
        if (j) {
            q.beginPath();
            q.rect(o, m, p, l);
            q.closePath();
            q.clip()
        }
        nbt.eea.cjr(q, 0, 0, this.width, this.height, this.ktz, this.dpb, this.qed, this.ons);
        if (this.bio === false || (this.bio === true && this.dmv !== c)) {
            f = this.width - (this.woj + this.qbn), e = (this.dmv === a) ? this.height - this.woj + this.yds + this.hub : this.height - this.woj + this.yds;
            if (this.ygz === true && this.fpi) {
                for (var k = 0; k < 20; k++) {
                    d = this.fpi[k], g = this.parent.noi.dql[d - 1];
                    if (g.nsn() == 3) {
                        this.ouj(f, e, g.lsl, true)
                    } else {
                        this.ouj(f, e, g.lsl, false)
                    }
                    if (k < 9) {
                        f -= this.woj
                    } else {
                        if (k == 9) {
                            f = this.width - (this.woj + this.qbn) - (9 * this.woj);
                            e -= this.woj
                        } else {
                            f += this.woj
                        }
                    }
                }
            }
        } else {
            if (this.bio === true && this.dmv === c) {
                if (this.hub < this.mtd) {
                    this.ouj(this.tjo, this.hub, this.fpi[this.suu], false);
                    q.save();
                    q.globalAlpha = 0.5;
                    if (this.suu > 9) {
                        if (j) {
                            q.drawImage(this.gky, this.tjo - 2, this.bws)
                        } else {
                            q.drawImage(this.gky, 0, 0, this.woj, this.gky.height, this.tjo - 2, this.bws, this.woj, this.gky.height)
                        }
                    } else {
                        if (j) {
                            q.drawImage(this.gky, this.tjo - 2, this.bws + this.woj)
                        } else {
                            q.drawImage(this.gky, 0, 0, this.woj, this.gky.height, this.tjo - 2, this.bws + this.woj, this.woj, this.gky.height)
                        }
                    }
                    q.restore()
                } else {
                    if (this.parent.noi.dql[this.fpi[this.suu] - 1].nsn() === 3) {
                        this.ouj(this.tjo, this.hub, this.fpi[this.suu], true)
                    } else {
                        this.ouj(this.tjo, this.hub, this.fpi[this.suu], false)
                    }
                }
            }
        }
        q.restore();
        if (this.nsm && this.scy) {
            if (j) {
                this.nsm.drawImage(this.scy, o, m, p, l, this.x + o, this.y + m, p, l)
            } else {
                this.nsm.drawImage(this.scy, this.x, this.y)
            }
        }
    };
    this.qzj = function() {
        this.vlv = true
    };
    this.qjb = function() {
        if (b.parent.nwu) {
            this.rih = this.dkx
        } else {
            this.rih = this.pdq
        }
        this.jsb();
        this.suu = 0;
        this.tjo = this.width - (this.woj + this.qbn);
        this.hub = -this.woj;
        this.bsy = 0;
        this.bio = true;
        this.dmv = c;
        this.ygz = true;
        this.hoj = uwy(b.mwf)
    };
    this.gci = function() {
        cwi(this.hoj);
        this.bio = false;
        this.dmv = -1
    };
    this.qrh = function() {
        return this.bio
    };
    this.mwf = function() {
        if (b.suu < 20) {
            b.jcj();
            b.hoj = uwy(b.mwf)
        } else {
            b.gci();
            b.jsb();
            b.parent.oup(true)
        }
    };
    this.jcj = function() {
        var d = this.fpi[this.suu];
        this.mtd = 2 * this.woj - this.ons;
        if (this.suu > 9) {
            this.mtd -= this.woj
        }
        if (this.hub < this.mtd) {
            this.jsb(this.tjo, 0, this.woj, this.mtd + this.woj);
            if (this.suu > 9) {
                this.hub += this.rih
            } else {
                if (this.parent.nwu) {
                    this.hub += this.rih + this.dkx / 2
                } else {
                    this.hub += this.rih + this.pdq / 2
                }
            }
        } else {
            this.parent.uck.gyl("ball");
            this.hub = this.mtd;
            if (this.parent.noi.ddg(d) == 3) {
                this.bsy += 1;
                this.parent.uck.gyl("hit" + this.bsy)
            }
            this.jsb(this.tjo, 0, this.woj, this.mtd + this.woj);
            this.suu += 1;
            if (this.suu == 10) {
                x = this.width - (this.woj + this.qbn) - (9 * this.woj)
            } else {
                if (this.suu > 10) {
                    this.tjo += this.woj
                } else {
                    this.tjo -= this.woj
                }
            }
            this.hub = -this.woj
        }
    };
    this.pym = function() {
        if (this.fpi) {
            this.rih = this.hiz;
            this.suu = 0;
            this.tjo = this.width - (this.woj + this.qbn);
            this.hub = 0;
            this.bio = true;
            this.dmv = a;
            this.jsb();
            this.hoj = uwy(this.axl)
        } else {
            this.ygz = false;
            this.parent.izq()
        }
    };
    this.axl = function() {
        if (b.hub < 100) {
            b.jsb();
            b.hub += b.rih;
            b.hoj = uwy(b.axl)
        } else {
            b.gci();
            b.ygz = false;
            b.parent.izq()
        }
    }
}
zfe.prototype = new uib;

function ybv() {
    this.hjv = null;
    this.aju = null;
    this.bkl = null;
    this.dpb = "rgb(0,32,115)";
    this.qed = "rgb(98,162,234)";
    this.pqf = "white";
    this.xka = "rgb(241,229,0)";
    this.rae = "black";
    this.sqv = "black";
    this.rpu = "rgb(157,205,253)";
    this.cqi = "sans-serif";
    this.xmk = "bold";
    this.moj = 18;
    this.pzj = 16;
    this.lbx = new hla();
    this.ytp = new hla();
    this.itc = 8;
    this.wnt = 30;
    this.ktz = 4;
    this.ons = 1;
    this.pbo = 0;
    this.bsy = 0;
    this.ojj = 0;
    this.ptr = 7;
    this.kji = function(a, c, b) {
        ybv.prototype.kji.call(this, a, c, b);
        this.epl()
    };
    this.gku = function(a) {
        try {
            this.dpb = a.backgroundColor;
            this.qed = a.wrh;
            this.pqf = a.mcm;
            this.xka = a.yaz;
            this.rae = a.zid;
            this.sqv = a.vkr;
            this.rpu = a.fud;
            this.cqi = a.font;
            this.xmk = a.oav;
            this.hjv.lir("displays", "#gku", [a.display])
        } catch (b) {
            console.error(b)
        }
    };
    this.dly = function(a) {
        try {
            this.ytp = a.cju.hnh;
            this.lbx = a.yay;
            this.moj = a.cju.xwr;
            this.pzj = a.cju.egt;
            this.itc = a.cju.ioe;
            this.wnt = a.cju.udg;
            this.ktz = a.cju.irs;
            this.ons = a.cju.ssz;
            this.hjv.dse("creditd", "#pki", [a.vzj]);
            this.hjv.dse("betd", "#pki", [a.isg]);
            this.hjv.dse("wind", "#pki", [a.tjn]);
            this.hjv.lir("displays", "#dly", [a.display])
        } catch (b) {
            console.error(b)
        }
    };
    this.epl = function() {
        this.hjv = new unx();
        this.hjv.kji();
        this.hjv.ptx("displays")
    };
    this.day = function(a) {
        this.hjv.xih("creditd", this.vnp(a.vzj, (this.parent.gnh()) ? this.parent.language.qur : this.parent.language.dgg, "---", a.display), ["displays"]);
        this.hjv.xih("betd", this.vnp(a.isg, this.parent.language.wnr.toUpperCase(), "---", a.display), ["displays"]);
        this.hjv.xih("wind", this.vnp(a.tjn, this.parent.language.fyd.toUpperCase(), "---", a.display), ["displays"])
    };
    this.vnp = function(b, e, d, a) {
        var c = new eol();
        c.kji(b, this.context2D, null, e, d);
        c.parent = this;
        c.dly(a);
        return c
    };
    this.dfu = function(a) {
        this.hjv.dse("creditd", "#akm", [(this.parent.gnh()) ? a.qur : a.dgg]);
        this.hjv.dse("betd", "#akm", [a.wnr]);
        this.hjv.dse("wind", "#akm", [a.fyd])
    };
    this.ihj = function(b, a) {
        this.pbo = a;
        this.bsy = b;
        this.jsb()
    };
    this.xpi = function(a) {
        this.pbo = a;
        this.ojj = 0;
        this.jsb()
    };
    this.bik = function(a) {
        this.ojj = a;
        this.jsb()
    };
    this.jsb = function() {
        if (!this.yzw || !this.parent.gpv()) {
            return
        }
        var a = this.context2D;
        a.fillStyle = this.parent.backgroundColor;
        a.fillRect(0, 0, this.width, this.height);
        if (this.bkl) {
            a.drawImage(this.bkl, this.lbx.x, this.lbx.y, this.lbx.width, this.lbx.height)
        }
        this.hjv.ibe("#jsb");
        this.rve(a);
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.rve = function(d) {
        var a = this.ytp.x,
            c = this.ytp.width,
            g = this.ytp.y,
            f = this.pya(this.bsy),
            b = 0;
        d.save();
        nbt.eea.xnj(d, this.parent.language.qvz.toUpperCase(), this.rpu, a + this.itc / 2, g, c / 2, this.moj, this.cqi, this.pzj, this.xmk);
        nbt.eea.pdk(d, this.parent.language.fyd.toUpperCase(), this.rpu, a + c / 2 - this.itc / 2, g, c / 2, this.moj, this.cqi, this.pzj, this.xmk);
        g += this.moj + this.ons / 2;
        for (var e = 0; e < this.ptr; e++) {
            if (this.bsy >= 3) {
                b = this.pbo * this.parent.bsf[this.bsy][f + e];
                this.cxo(d, f + e, b, a, g, c)
            } else {
                this.cxo(d, 0, 0, a, g, c)
            }
            g += this.wnt + this.ons
        }
        d.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.cxo = function(c, d, e, a, f, b) {
        if (e > 0) {
            if (this.ojj == e) {
                nbt.eea.cjr(c, a, f, b, this.wnt, this.ktz, this.xka, this.rae, this.ons);
                nbt.eea.xnj(c, (d < 10) ? "  " + d : d, this.sqv, a + this.itc, f + this.ons, b - 2 * this.itc, this.wnt - this.ons, this.cqi, this.moj, this.xmk);
                nbt.eea.pdk(c, this.parent.nud(e), this.sqv, a + this.itc, f + this.ons, b - 2 * this.itc, this.wnt - this.ons, this.cqi, this.moj, this.xmk)
            } else {
                nbt.eea.cjr(c, a, f, b, this.wnt, this.ktz, this.dpb, this.qed, this.ons);
                nbt.eea.xnj(c, (d < 10) ? "  " + d : d, this.pqf, a + this.itc, f + this.ons, b - 2 * this.itc, this.wnt - this.ons, this.cqi, this.moj, this.xmk);
                nbt.eea.pdk(c, this.parent.nud(e), this.pqf, a + this.itc, f + this.ons, b - 2 * this.itc, this.wnt - this.ons, this.cqi, this.moj, this.xmk)
            }
            if (this.parent.xmu[d][this.bsy]) {
                c.drawImage(this.aju, a + 2 * this.aju.width, f + ((this.wnt - this.aju.height) / 2))
            }
        } else {
            nbt.eea.cjr(c, a, f, b, this.wnt, this.ktz, this.dpb, this.qed, this.ons)
        }
    };
    this.pya = function(d) {
        var c = -1,
            a = 0;
        if (d && d <= 10) {
            for (var b = 0; b <= d; b++) {
                a = this.parent.bsf[d][b];
                if (a > 0) {
                    c = b;
                    break
                }
            }
        }
        return c
    }
}
ybv.prototype = new uib;

function nkb() {
    var a = this;
    this.aju = null;
    this.wvs = null;
    this.dva = null;
    this.dpb = "rgb(0,32,115)";
    this.qed = "rgb(255,244,0)";
    this.pne = "rgb(255,244,0)";
    this.pqf = "rgb(38,58,109)";
    this.cqi = "sans-serif";
    this.xmk = "bold";
    this.ghv = "black";
    this.bkv = "white";
    this.moj = 20;
    this.ktz = 4;
    this.ons = 4;
    this.woj = 45;
    this.bqe = 0;
    this.rih = 6;
    this.gpb = ["E", "X", "T", "R", "A"];
    this.kto = ["B", "A", "L", "L", "S"];
    this.caf = true;
    this.upg = false;
    this.pgv = 0;
    this.wpq = 0;
    this.bio = false;
    this.nop = false;
    this.cdh = 0;
    this.niu = 0;
    this.zsr = 0;
    this.icy = 0;
    this.twa = 0;
    this.hev = 0;
    this.hoj = 0;
    this.gku = function(c) {
        try {
            this.dpb = c.backgroundColor;
            this.qed = c.wrh;
            this.ghv = c.szt;
            this.bkv = c.emu;
            this.pqf = c.mcm;
            this.pne = c.hzu;
            this.cqi = c.font;
            this.xmk = c.oav
        } catch (d) {
            console.error(d)
        }
    };
    this.dly = function(c) {
        try {
            this.moj = c.xwr;
            this.ktz = c.irs;
            this.ons = c.ssz;
            this.woj = c.foz;
            this.bqe = c.xip;
            this.rih = c.uta
        } catch (d) {
            console.error(d)
        }
    };
    this.evh = function() {
        this.caf = true;
        this.upg = false;
        this.pgv = 0;
        this.wpq = 0;
        this.cdh = 0;
        this.nop = false;
        this.jsb()
    };
    this.kxt = function(c, d) {
        this.caf = c;
        if (d && d === true) {
            this.jsb()
        }
    };
    this.iwj = function() {
        return this.caf
    };
    this.jnj = function(d, c) {
        if (d != null && c != null) {
            this.pgv = d;
            this.wpq = c
        } else {
            this.upg = true
        }
        this.jsb()
    };
    this.jsb = function() {
        if (!this.yzw || !this.parent.gpv()) {
            return
        }
        var d = this.context2D,
            c = Math.round((this.width - this.aju.width) / 2),
            g = Math.round((this.height - 2 * this.aju.height) / 2),
            f = Math.round(this.wvs.height / 2),
            e = b(this.cdh);
        nbt.eea.cjr(d, 0, 0, this.width, this.height, this.ktz, this.dpb, this.qed, this.ons);
        if (this.upg == true || this.bio === true) {
            c = Math.round((this.width - this.wvs.width) / 2);
            g = Math.round((this.height / 2 - this.wvs.height));
            d.save();
            d.fillStyle = this.bkv;
            d.beginPath();
            d.arc(c + f, g + f, f, 0, 2 * Math.PI);
            d.arc(c + f, g + f + this.wvs.height + 1, f, 0, 2 * Math.PI);
            d.fill();
            d.restore();
            d.save();
            d.fillStyle = this.ghv;
            d.beginPath();
            d.arc(c + f, g + f, f, 0, 2 * Math.PI);
            d.stroke();
            d.beginPath();
            d.arc(c + f, g + f + this.wvs.height + 1, f, 0, 2 * Math.PI);
            d.stroke();
            d.restore();
            if (this.bio === true) {
                if (this.icy < this.hev) {
                    this.ouj(c, this.icy, this.pgv);
                    this.ouj(c, this.zsr, this.wpq)
                } else {
                    if (this.zsr > this.twa) {
                        this.ouj(c, this.hev, this.pgv);
                        this.ouj(c, this.twa, this.wpq)
                    } else {
                        this.ouj(c, this.hev, this.pgv);
                        this.ouj(c, this.zsr, this.wpq)
                    }
                    d.save();
                    d.fillStyle = this.ghv;
                    d.beginPath();
                    d.arc(c + f, g + f + this.wvs.height + 1, f, 0, 2 * Math.PI);
                    d.stroke();
                    d.restore()
                }
            }
        } else {
            if (this.pgv == 0) {
                if (this.nop) {
                    f = Math.round(this.aju.height / 2);
                    d.save();
                    d.translate(c, g);
                    d.translate(f, f);
                    d.rotate(e);
                    d.drawImage(this.aju, -f, -f);
                    d.translate(-(c), -(g));
                    d.restore();
                    d.save();
                    d.translate(c, g + this.aju.height + 1);
                    d.translate(f, f);
                    d.rotate(e);
                    d.drawImage(this.aju, -f, -f);
                    d.translate(-(c), -(g + this.aju.height + 1));
                    d.restore()
                } else {
                    d.drawImage(this.aju, c, g);
                    d.drawImage(this.aju, c, g + this.aju.height + 1)
                }
            } else {
                f = Math.round(this.wvs.height / 2);
                c = Math.round((this.width - this.wvs.width) / 2);
                g = Math.round((this.height - 2 * this.wvs.height) / 2);
                this.ouj(c, g, this.wpq, (this.parent.noi.dql[this.wpq - 1].nsn() === 3));
                this.ouj(c, g + this.wvs.height + 1, this.pgv, (this.parent.noi.dql[this.pgv - 1].nsn() === 3));
                d.save();
                d.fillStyle = this.ghv;
                d.beginPath();
                d.arc(c + f, g + f, f, 0, 2 * Math.PI);
                d.stroke();
                d.beginPath();
                d.arc(c + f, g + f + this.wvs.height + 1, f, 0, 2 * Math.PI);
                d.stroke();
                d.restore()
            }
        }
        if (this.caf) {
            c = Math.round((this.width - this.aju.width) / 2);
            this.qpy(c)
        }
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    };
    this.ouj = function(c, g, e, f) {
        var d = this.context2D;
        if (f) {
            d.drawImage(this.dva, c, g)
        } else {
            d.drawImage(this.wvs, c, g)
        }
        nbt.eea.fme(d, e, this.pqf, c, g + this.bqe, this.woj, this.woj, this.cqi, this.moj, this.xmk)
    };
    this.qpy = function(d) {
        var c = this.context2D,
            f = this.moj + 1;
        x1 = d / 2;
        x2 = this.width - d / 2;
        y = Math.round((this.height - (5 * f)) / 2);
        c.textAlign = "center";
        c.textBaseline = "bottom";
        c.fillStyle = this.pne;
        c.font = this.xmk + " " + this.moj + "px " + this.cqi;
        for (var e = 0; e < 5; e++) {
            c.fillText(this.gpb[e], x1, y + f);
            c.fillText(this.kto[e], x2, y + f);
            y += f
        }
    };
    this.mxl = function() {
        this.cdh = 0;
        this.caf = true;
        this.upg = false;
        this.niu = 0;
        this.pgv = 0;
        this.wpq = 0;
        this.parent.uck.gyl("show");
        this.hoj = uwy(a.abv)
    };
    this.abv = function() {
        if (a.cdh <= 1080) {
            a.cdh += Math.round(10 + a.niu);
            a.niu += 0.4;
            a.nop = true;
            a.jsb();
            a.hoj = uwy(a.abv)
        } else {
            cwi(a.rbu);
            a.upg = true;
            a.jsb();
            nbt.zbt.hcu()
        }
    };

    function b(c) {
        return c * 0.017453292519943295
    }
    this.ulu = function(d, c) {
        this.upg = false;
        this.pgv = d;
        this.wpq = c;
        this.twa = Math.round((this.height / 2 - this.aju.height));
        this.hev = this.twa + this.aju.height + 1;
        this.zsr = -this.aju.height;
        this.icy = -this.aju.height;
        this.bio = true;
        this.hoj = uwy(this.guf)
    };
    this.guf = function() {
        if (a.zsr <= a.twa) {
            a.jcj();
            a.hoj = uwy(a.guf)
        } else {
            a.parent.uck.gyl("ball2");
            a.parent.noi.ddg(a.wpq);
            a.bio = false;
            cwi(a.hoj);
            a.jsb();
            a.parent.fjn()
        }
    };
    this.jcj = function() {
        if (this.icy < this.hev) {
            this.icy += this.rih;
            this.jsb()
        } else {
            if (this.icy >= this.hev) {
                this.icy = this.hev;
                if (this.zsr == -this.aju.height) {
                    this.parent.uck.gyl("ball1");
                    this.parent.noi.ddg(this.pgv)
                }
            }
            this.zsr += this.rih;
            this.jsb()
        }
    };
    this.stop = function() {
        cwi(this.hoj);
        this.bio = false
    }
}
nkb.prototype = new uib;

function dcy() {
    this.zow = "";
    this.mgb = "";
    this.jum = "";
    this.hie = "";
    this.cqi = "sans-serif";
    this.xmk = "bold";
    this.dpb = "rgb(0,32,115)";
    this.qed = "rgb(98,162,234)";
    this.pqf = "white";
    this.vvs = "rgb(97,177,255)";
    this.ftv = "rgb(255,146,46)";
    this.iwn = "rgb(255,222,0)";
    this.hnd = "rgb(153,175,199)";
    this.lsr = "rgb(1,29,112)";
    this.bgv = "verdana";
    this.nkz = "bold italic";
    this.jzg = "white";
    this.uvk = 58;
    this.toj = 33;
    this.nzj = 1;
    this.glm = 0;
    this.lbi = new hla();
    this.mep = new hla();
    this.ytp = new hla();
    this.moj = 18;
    this.tkw = 26;
    this.ibn = 19;
    this.eyj = 16;
    this.kdx = new hla(20, 430, 560, 160);
    this.lia = new hla(15 + 40, 370, 530, 60);
    this.ons = 2;
    this.ktz = 4;
    this.jeu = 12;
    this.vap = new hla();
    this.gku = function(a) {
        dcy.prototype.gku.call(this, a);
        try {
            this.dpb = a.backgroundColor;
            this.qed = a.wrh;
            this.pqf = a.mcm;
            this.cqi = a.font;
            this.xmk = a.oav;
            this.iwn = a.okk;
            this.hnd = a.gry;
            this.lsr = a.icw;
            this.vvs = a.ktw;
            this.ftv = a.qpk;
            this.bgv = a.drs;
            this.nkz = a.lvm;
            this.jzg = a.xmv
        } catch (b) {
            console.error(b)
        }
    };
    this.dly = function(a) {
        dcy.prototype.dly.call(this, a);
        try {
            this.lbi = a.hbw;
            this.mep = a.xap;
            this.ytp = a.ihy;
            this.uvk = a.ezd;
            this.toj = a.zhu;
            this.nzj = a.kst;
            this.glm = a.vmi;
            this.moj = a.xwr;
            this.pzj = a.egt;
            this.ibn = a.txw;
            this.eyj = a.jzl;
            this.kdx = a.tjn;
            this.lia = a.ooo;
            this.ons = a.ssz;
            this.ktz = a.irs;
            this.jeu = a.mdq;
            this.vap = a.wtn
        } catch (b) {
            console.error(b)
        }
    };
    this.jsb = function() {
        if (!this.yzw()) {
            return
        }
        var k = this.context2D,
            c = this.mgb.length,
            g = 0,
            f = this.mep.y + this.toj / 2 + (this.mep.height - this.pzj * c) / 2,
            b = (nbt.zbt.myh === true) ? nbt.zbt.wnr : nbt.zbt.yjm();
        k.save();
        k.fillStyle = nbt.zbt.backgroundColor;
        k.fillRect(0, 0, this.width, this.height);
        nbt.eea.fme(k, this.zow, this.vvs, this.lbi.x, this.lbi.y, this.lbi.width, this.lbi.height, this.cqi, this.pzj, this.xmk);
        for (var e = 0; e < c; e++) {
            nbt.eea.fme(k, this.mgb.charAt(e), this.ftv, this.mep.x, f, this.mep.width, this.pzj, this.cqi, this.pzj, this.xmk);
            f += this.pzj
        }
        g = this.ytp.x;
        f = this.ytp.y;
        for (var e = 0; e < 10; e++) {
            g = this.ytp.x;
            if (e > 0) {
                nbt.eea.sfx(k, g, f, this.uvk / 2, this.toj, this.ftv, 1, nbt.zbt.backgroundColor, this.nzj, 1);
                nbt.eea.fme(k, "" + (e + 1), this.pqf, g, f + this.glm, this.uvk / 2, this.toj, this.cqi, this.ibn, this.xmk)
            }
            g += this.uvk / 2;
            for (var d = 0; d < 8; d++) {
                if (e == 0) {
                    nbt.eea.sfx(k, g, f, this.uvk, this.toj, this.vvs, 1, nbt.zbt.backgroundColor, this.nzj, 1);
                    nbt.eea.fme(k, (d + 3), this.pqf, g, f + this.glm, this.uvk, this.toj, this.cqi, this.ibn, this.xmk)
                } else {
                    var h = b * nbt.zbt.bsf[d + 3][e + 1],
                        a = null;
                    if (h > 0) {
                        if (nbt.zbt.xmu[e + 1][d + 3]) {
                            a = this.ftv
                        } else {
                            if (e == 9 || (b * nbt.zbt.bsf[d + 3][e + 2]) == 0) {
                                a = this.iwn
                            } else {
                                a = this.hnd
                            }
                        }
                        nbt.eea.sfx(k, g, f, this.uvk, this.toj, a, 1, nbt.zbt.backgroundColor, this.nzj, 1);
                        nbt.eea.fme(k, nbt.zbt.nud(h), this.pqf, g, f + this.glm, this.uvk, this.toj, this.cqi, this.eyj, this.xmk)
                    } else {
                        nbt.eea.sfx(k, g, f, this.uvk, this.toj, this.lsr, 1, nbt.zbt.backgroundColor, this.nzj, 1)
                    }
                }
                g += this.uvk
            }
            f += this.toj
        }
        nbt.eea.cjr(k, this.lia.x, this.lia.y, this.lia.width, this.lia.height, this.ktz, this.ftv, this.pqf, this.ons);
        nbt.eea.cjr(k, this.kdx.x, this.kdx.y, this.kdx.width, this.kdx.height, this.ktz, this.dpb, this.pqf, this.ons);
        k.fillStyle = this.pqf;
        k.textBaseline = "bottom";
        k.textAlign = "center";
        this.ukd(this.hie, new hla(this.lia.x + this.ktz, this.lia.y + this.ktz, this.lia.width - 2 * this.ktz, this.lia.height - 2 * this.ktz), this.eyj, this.cqi);
        this.ukd(this.jum, new hla(this.kdx.x + this.ktz, this.kdx.y + this.ktz, this.kdx.width - 2 * this.ktz, this.kdx.height - 2 * this.ktz), this.moj, this.cqi);
        nbt.eea.fme(k, nbt.zbt.language.xqs.toUpperCase(), this.jzg, this.vap.x, this.vap.y, this.vap.width, this.vap.height, this.bgv, this.jeu, this.nkz);
        k.restore();
        if (this.nsm && this.scy) {
            this.nsm.drawImage(this.scy, this.x, this.y)
        }
    }
}
dcy.prototype = new fhi;

function dqo() {
    var a = this;
    this.hjv = null;
    this.bjp = 0;
    this.mko = null;
    this.kji = function(b, d, c) {
        dqo.prototype.kji.call(this, b, d, c);
        this.epl()
    };
    this.gku = function(b) {
        try {
            this.hjv.lir("buttons", "#gku", [b.ixf]);
            this.hjv.dse("info", "#gku", [b.omm])
        } catch (c) {
            console.error(c)
        }
    };
    this.dly = function(b) {
        try {
            this.hjv.dse("lang", "#pki", [b.rab]);
            this.hjv.dse("quicktip", "#pki", [b.spk]);
            this.hjv.dse("clear", "#pki", [b.tyv]);
            this.hjv.dse("exit", "#pki", [b.xnb]);
            this.hjv.dse("bet", "#pki", [b.isg]);
            this.hjv.dse("start", "#pki", [b.zvz]);
            this.hjv.dse("start", "#dly", [b.tqw]);
            this.hjv.lir("sbuttons", "#dly", [b.ixf]);
            this.hjv.lir("info", "#pki", [b.omm.hnh]);
            this.hjv.lir("info", "#dly", [b.omm])
        } catch (c) {
            console.error(c)
        }
    };
    this.epl = function() {
        this.hjv = new unx();
        this.hjv.kji();
        this.hjv.ptx("buttons");
        this.hjv.ptx("gbuttons");
        this.hjv.ptx("sbuttons");
        this.hjv.ptx("infos")
    };
    this.pex = function(b) {
        this.pht(b);
        this.cvg(b)
    };
    this.pht = function(b) {
        this.hjv.xih("quicktip", this.jwz(b.spk, this.parent.language.omc, this.parent.uck.cft("btn_s"), this.parent.tni, (this.parent.xsu) ? null : this.parent.neu.xfw, b.ixf), ["buttons", "gbuttons", "sbuttons"]);
        this.hjv.xih("clear", this.jwz(b.tyv, this.parent.language.nqv, this.parent.uck.cft("btn_s"), this.parent.rav, (this.parent.xsu) ? null : this.parent.neu.nqv, b.ixf), ["buttons", "gbuttons", "sbuttons"]);
        this.hjv.xih("exit", this.jwz(b.xnb, (nbt.zgl.value50.g === true) ? this.parent.language.hde : this.parent.language.kue, this.parent.uck.cft("btn_s"), this.parent.kjp, (this.parent.xsu) ? null : this.parent.neu.frj, b.ixf), ["buttons", "gbuttons", "sbuttons"]);
        this.hjv.xih("bet", this.jwz(b.isg, this.parent.language.wnr, this.parent.uck.cft("btn_s"), this.parent.sol, (this.parent.xsu) ? null : this.parent.neu.uny, b.ixf), ["buttons", "gbuttons", "sbuttons"]);
        this.hjv.ljc("bet").lwa = 300;
        this.hjv.xih("start", this.jwz(b.zvz, this.parent.language.start, this.parent.uck.cft("btn"), this.parent.cdw, (this.parent.xsu) ? null : this.parent.neu.start, b.tqw), ["buttons", "gbuttons"]);
        this.hjv.lir("gbuttons", "#ecu", [false])
    };
    this.cvg = function(b) {
        var c = new wnf();
        c.kji(b.omm.hnh, this.context2D);
        c.parent = this;
        c.dly(b.omm);
        this.hjv.xih("info", c, ["infos"])
    };
    this.kbv = function(n, m) {
        var l = this.hjv.qbc("buttons"),
            p = this.hjv.ljc("quicktip"),
            o = this.hjv.ljc("clear"),
            d = this.hjv.ljc("bet"),
            b = this.hjv.ljc("start"),
            h = n - this.x,
            f = m - this.y;
        for (var g = 0, k = l.length; g < k; g++) {
            var c = l[g];
            if (h >= c.x && h <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.yzw() == true) {
                if (c.aso() && !c.mkr()) {
                    if (c === d) {
                        c.mat(true, true, false);
                        for (var e = 0; e < k; e++) {
                            l[e].hau(true, false)
                        }
                        c.kuc();
                        this.mko = function() {
                            if (c.kuc() === true) {
                                clearInterval(a.bjp);
                                c.mat(false, true);
                                for (var i = 0; i < k; i++) {
                                    l[i].hau(false)
                                }
                            }
                        };
                        this.bjp = setInterval(this.mko, c.lwa)
                    } else {
                        c.mat(true, true);
                        c.kuc();
                        if (c !== b && c !== o && c !== p) {
                            this.parent.uck.gyl("btn")
                        }
                        for (var e = 0; e < k; e++) {
                            l[e].hau(true)
                        }
                    }
                    return true
                }
            }
        }
        return false
    };
    this.zot = function() {
        var f = this.hjv.qbc("buttons"),
            g = this.hjv.ljc("bet");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.umm() === true) {
                e.mat(false, true);
                if (e === g) {
                    clearInterval(this.bjp);
                    for (var c = 0; c < b; c++) {
                        f[c].hau(false)
                    }
                }
                return true
            }
        }
        return false
    };
    this.qck = function(g) {
        var f = this.hjv.qbc("buttons"),
            h = this.hjv.ljc("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.lii) {
                if (d.aso() && !d.mkr()) {
                    d.mat(true, true);
                    d.kuc();
                    for (var c = 0; c < b; c++) {
                        f[c].hau(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.neu.ipu.urj) {
            if (h && h.aso() && !h.mkr()) {
                this.parent.lhj();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].hau(true)
                }
            }
            return true
        }
        return false
    };
    this.qsz = function() {
        var e = this.hjv.qbc("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.umm() == true) {
                c.mat(false, true);
                return true
            }
        }
        return false
    };
    this.glw = function(k, j, l) {
        var h = this.hjv.qbc("buttons"),
            c = this.hjv.ljc("bet");
        if (k != null && j != null) {
            var e = k - this.x;
            var d = j - this.y;
            for (var f = 0, g = h.length; f < g; f++) {
                var b = h[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.yzw() && b.aso() && !b.mkr()) {
                    return b.kuc
                }
            }
        } else {
            if (l != null) {
                for (var f = 0, g = h.length; f < g; f++) {
                    var b = h[f];
                    if (l == b.lii && b.yzw() && b.aso() && !b.mkr()) {
                        return b.kuc
                    }
                }
                if (l == this.parent.neu.ipu.urj && c && c.yzw() && c.aso() && !c.mkr()) {
                    return this.parent.lhj
                }
            }
        }
        return null
    };
    this.qrc = function(b) {
        this.hjv.lir("gbuttons", "#ecu", [b])
    };
    this.dfu = function(b) {
        this.hjv.dse("start", "#lun", [b.start, false]);
        if (this.parent.tyr() && this.parent.dxx === true) {
            this.hjv.dse("exit", "#lun", [this.parent.language.icp])
        } else {
            this.hjv.dse("exit", "#lun", [(nbt.zgl.value50.g === true) ? this.parent.language.hde : this.parent.language.kue, false])
        }
        this.hjv.dse("quicktip", "#lun", [b.omc, false]);
        this.hjv.dse("clear", "#lun", [b.nqv, false]);
        this.hjv.dse("bet", "#lun", [b.wnr, false]);
        this.jsb()
    };
    this.jwz = function(e, h, g, f, c, d) {
        var b = new ugj();
        b.kji(e, this.context2D, null, g, null, h);
        b.parent = this;
        b.kuc = f;
        b.dly(d);
        if (c) {
            b.lii = c.urj
        }
        return b
    };
    this.ftc = function(d, f, e, c) {
        var b = new enn();
        b.kji(d, this.context2D, null, f, null);
        b.parent = this;
        b.kuc = e;
        if (c) {
            b.lii = c.urj
        }
        return b
    };
    this.xhp = function(c, b) {
        var d = this.hjv.ljc("info");
        if (d) {
            d.dam(b);
            d.qbp(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.bjp)
    };
    this.jsb = function(k, g, l, e) {
        if (!this.yzw() || !this.parent.gpv()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new hla(k, g, l, e) : new hla(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.hjv.eej();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].jsb()
        }
        if (this.parent.xdc === true) {
            this.parent.byv(m, j)
        }
        m.restore();
        if (this.nsm && this.scy) {
            if (c) {
                this.nsm.drawImage(this.scy, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.nsm.drawImage(this.scy, this.x, this.y)
            }
        }
    }
}
dqo.prototype = new uib;
nbt.jcp = {
    kqb: {
        aam: 0,
        xlh: 2,
        ouq: 3,
        fwl: 4
    }
};

function lbz() {
    this.emy = "Keno";
    this.ldf = "Keno";
    this.nnw = nbt.zgl.value30 + "/keno/images/";
    this.dtw = nbt.zgl.value30 + "/keno/sounds/";
    this.bsf = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 50, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 12, 100, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 5, 17, 180, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 15, 60, 500, 0, 0, 0, 0],
        [0, 0, 0, 3, 5, 15, 75, 1000, 0, 0, 0],
        [0, 0, 0, 0, 5, 25, 40, 200, 2000, 0, 0],
        [0, 0, 0, 0, 4, 10, 15, 125, 500, 5000, 0],
        [0, 0, 0, 0, 3, 5, 13, 50, 150, 1500, 15000]
    ];
    this.xmu = [
        [false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, true, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false, false],
        [false, false, false, false, false, false, true, true, true, true, true],
        [false, false, false, false, false, false, false, true, true, true, true],
        [false, false, false, false, false, false, false, false, true, true, true],
        [false, false, false, false, false, false, false, false, false, true, true],
        [false, false, false, false, false, false, false, false, false, false, true],
        [false, false, false, false, false, false, false, false, false, false, false]
    ];
    this.fyd = 0;
    this.dgg = 0;
    this.kcx = [];
    this.rxe = 0;
    this.nfz = 0;
    this.uov = 0;
    this.nln = 0;
    this.dby = [];
    this.dlq = [];
    this.nwu = false;
    this.kqq = null;
    this.vqz = null;
    this.noi = null;
    this.vrn = null;
    this.zck = null;
    this.qeu = null;
    this.itl = null;
    this.dak = null;
    this.noo = 0;
    this.uta = 10;
    this.fkb = 0;
    this.evu = 0;
    this.kbq = 0;
    this.dxx = false;
    this.kqa = false;
    this.urm = 0;
    this.nex = 0;
    this.czq = 0;
    this.ndc = 0;
    this.backgroundColor = "black";
    this.rfy = null;
    this.meb = "";
    this.lvc = true;
    this.xdc = false;
    this.ukp = function() {};
    this.kfd = function() {
        var a = new ohb();
        a.kji();
        return a
    };
    this.uoy = function() {
        this.neu = new mdl()
    };
    this.mbn = function() {
        this.kkk = new lkj().kji(this, nbt.zgl.value6)
    };
    this.lue = function() {
        this.gbn = new lpf().kji(this, nbt.zgl.value6)
    };
    this.zpx = function(a) {
        this.fas = true;
        clearInterval(this.awm);
        if (this.ejt) {
            if (this.uck.dmu === true) {
                this.ksr(this.rvo[this.jor])
            } else {
                this.fpw((this.rvo[this.jor] === 0))
            }
        }
        this.rnk();
        this.sdo();
        this.dfu();
        this.yva()
    };
    this.cix = function() {
        nbt.zbt.zxm();
        nbt.zbt.ohe = true;
        nbt.zbt.dfu();
        nbt.zbt.jsb();
        if (nbt.zgl.value37 && !nbt.zbt.gnh()) {
            nbt.zbt.xev()
        }
    };
    this.rnk = function() {
        if (this.jsn === nbt.jcp.kqb.aam) {
            while (this.nln < this.lid()) {
                this.nln++
            }
            var a = this.rhe(true);
            if (this.nln > a) {
                this.nln = (a < 0) ? 0 : a
            }
        }
        this.wyd()
    };
    this.sdo = function() {
        this.tny();
        this.czu();
        this.oit();
        this.pqk();
        this.uot();
        if (this.jpo.qsm) {
            this.xzl();
            this.bxs()
        }
        if (!this.xsu) {
            if (this.jpo.dur) {
                this.uqf()
            }
            this.oni();
            if (this.evk()) {
                this.cmb()
            }
        } else {
            this.rsw()
        }
        if (!(this.xsu && !this.myh)) {
            this.kck();
            this.ehf()
        }
    };
    this.xzl = function() {
        lbz.prototype.xzl.call(this);
        var a = this.com.ljc("topi");
        if (a) {
            a.umg("language", this.uck.cft("icon_l"), sessionStorage.sessionValue1, [nbt.language.EN, nbt.language.DE, nbt.language.RU, nbt.language.EE, nbt.language.ES, nbt.language.TR, nbt.language.CZ, nbt.language.GR, nbt.language.AT, nbt.language.US, nbt.language.BG, nbt.language.CO, nbt.language.MX, nbt.language.CL, nbt.language.VE, nbt.language.BR, nbt.language.GE, nbt.language.HU, nbt.language.RO, nbt.language.PT]);
            a.szu("help", new String("?"), true);
            if (nbt.zgl.value27 && this.ejt) {
                a.umg("audio", this.uck.cft("icon_a"), this.rvo[this.jor], this.rvo)
            }
            if (((nbt.eea.ito) ? nbt.zgl.value51.m : nbt.zgl.value51.d) && nbt.eea.pfa()) {
                a.szu("fullscreen", this.uck.cft("icon_f"), this.etp)
            }
            a.szu("turbo", this.uck.cft("icon_t"), this.nwu)
        }
    };
    this.bxs = function() {
        lbz.prototype.bxs.call(this);
        var a = this.com.ljc("topb");
        if (a) {
            if (nbt.zgl.value5.length > 1) {
                a.dzi("language", this.language.language, this.djj(nbt.zgl.value5[this.ipq]), this.wzk, this.neu.language, 0, 1)
            }
            if (nbt.zgl.value27) {
                a.dzi("audio", this.language.audio, this.uck.cft("btn_a"), this.whd, this.neu.audio, this.jor, this.rvo.length)
            }
            if (((nbt.eea.ito) ? nbt.zgl.value51.m : nbt.zgl.value51.d) && nbt.eea.pfa()) {
                a.dzi("fullscreen", this.language.etp, this.uck.cft("btn_f"), this.ekh, this.neu.etp, (this.etp) ? 1 : 0, 2)
            }
            a.dzi("turbo", this.language.nwu, this.uck.cft("btn_t"), this.tft, this.neu.nwu, (this.nwu) ? 1 : 0, 2);
            a.cnd("help", this.language.itl, this.uck.cft("btn_p"), this.zlm, this.neu.itl);
            if (nbt.zgl.value12 && !this.gnh()) {
                a.cnd("history", this.language.exe, this.uck.cft("btn_h"), this.cnf, this.neu.exe)
            }
            if (nbt.zgl.value36 && !this.gnh()) {
                a.cnd("statistic", this.language.otg, this.uck.cft("btn_st"), this.mdn, this.neu.otg)
            }
            a.xec()
        }
    };
    this.oit = function() {
        this.kqq = new zfe();
        this.kqq.kji(this.jpo.kqq.hnh, null, this.context2D);
        this.kqq.parent = this;
        this.kqq.bkl = this.uck.cft("logo");
        this.kqq.wvs = this.uck.cft("ball");
        this.kqq.dva = this.uck.cft("yball");
        this.kqq.gky = this.uck.cft("pipe");
        this.kqq.gku(this.style.kqq);
        this.kqq.dly(this.jpo.kqq)
    };
    this.pqk = function() {
        this.vqz = new nkb();
        this.vqz.kji(this.jpo.vqz.hnh, null, this.context2D);
        this.vqz.parent = this;
        this.vqz.aju = this.uck.cft("eball_b");
        this.vqz.wvs = this.uck.cft("ball");
        this.vqz.dva = this.uck.cft("yball");
        this.vqz.gku(this.style.vqz);
        this.vqz.dly(this.jpo.vqz)
    };
    this.czu = function() {
        var a = [];
        a.push(this.uck.cft("white"));
        a.push(this.uck.cft("red"));
        a.push(this.uck.cft("blue"));
        a.push(this.uck.cft("redwin"));
        this.noi = new wfe();
        this.noi.kji(this.jpo.noi.hnh, null, this.context2D, a, this.jpo.noi);
        this.noi.parent = this;
        this.noi.gku(this.style.noi);
        this.noi.dly(this.jpo.noi)
    };
    this.uot = function() {
        this.vrn = new ybv();
        this.vrn.kji(this.jpo.vrn.hnh, null, this.context2D);
        this.vrn.parent = this;
        this.vrn.aju = this.uck.cft("eball_s");
        this.vrn.bkl = this.uck.cft("icon");
        this.vrn.day(this.jpo.vrn);
        this.vrn.gku(this.style.vrn);
        this.vrn.dly(this.jpo.vrn)
    };
    this.tny = function() {
        this.zck = new dqo();
        this.zck.kji(this.jpo.zck.hnh, null, this.context2D);
        this.zck.parent = this;
        this.zck.pex(this.jpo.zck);
        this.zck.xhp(this.rfy, 0);
        this.zck.gku(this.style.zck);
        this.zck.dly(this.jpo.zck)
    };
    this.uqf = function() {
        var a = new qrd();
        a.kji(this.jpo.top.hnh, null, this.context2D);
        a.parent = this;
        this.com.xih("tops", a)
    };
    this.rsw = function() {
        var a = new zjr();
        a.kji(this.jpo.exe.hnh, null, this.context2D);
        a.parent = this;
        a.pex(this.jpo.exe);
        a.gku(this.style.exe);
        this.com.xih("history", a)
    };
    this.kck = function() {
        this.qeu = new thc();
        this.qeu.kji(this.jpo.uvl.hnh, null, this.context2D);
        this.qeu.parent = this;
        this.qeu.rxg(false);
        this.qeu.dly(this.jpo.uvl);
        this.qeu.gku(this.style.uvl)
    };
    this.ehf = function() {
        this.bsd();
        this.bdg();
        this.qeu.pht(this.jpo.uvl, this.style.uvl, this.uck.cft("btn_s"))
    };
    this.bsd = function() {
        if (!this.com.ljc("tops")) {
            this.itl = new dcy();
            this.itl.kji(this.jpo.uvl.itl.hnh, null, this.qeu.context2D, null);
            this.itl.parent = this.qeu;
            this.itl.jum = this.language.upv;
            this.itl.hie = this.language.bng;
            this.itl.mgb = this.language.qvz.toUpperCase();
            this.itl.zow = this.language.zho.toUpperCase();
            this.itl.gku(this.style.uvl.itl);
            this.itl.dly(this.jpo.uvl.itl);
            this.qeu.fmx(this.itl)
        }
    };
    this.bdg = function() {
        var a = this.com.ljc("tops");
        if (a) {
            this.dak = new dcy();
            this.dak.kji(this.jpo.top.dak.hnh, null, a.context2D, null);
            this.dak.parent = a;
            this.dak.jum = this.language.upv;
            this.dak.hie = this.language.bng;
            this.dak.mgb = this.language.qvz.toUpperCase();
            this.dak.zow = this.language.zho.toUpperCase();
            this.dak.gku(this.style.uvl.itl);
            this.dak.dly(this.jpo.top.dak);
            a.fmx(this.dak)
        }
    };
    this.wyd = function() {
        this.rfy = [];
        if (this.gnh() === false && this.meb != "") {
            this.rfy.push(this.meb)
        }
        this.rfy.push(this.language.wta);
        this.rfy.push(this.language.qts);
        this.rfy.push(this.language.mmw + " " + this.nud(this.rxe) + " " + this.language.uhi + " " + this.nud(this.nfz));
        this.rfy.push(this.language.nla)
    };
    this.jes = function() {
        if (!this.ocn) {
            if (this.nsj === false) {
                this.iho.style.marginTop = (-this.height / 2 + this.epy()) + "px";
                this.iho.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.iho.style.left = "0px";
                this.iho.style.top = "0px";
                this.iho.style.marginTop = ((this.piw - this.height) / 2 + this.epy()) + "px";
                this.iho.style.marginLeft = ((this.lyw - this.width) / 2) + "px"
            }
            this.iho.style.width = (this.width > this.lyw) ? this.lyw + "px" : this.width + "px";
            this.iho.style.height = (this.height > this.piw) ? this.piw + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.cji = document.createElement("canvas");
            this.cji.width = this.jpo.zbt.hnh.width;
            this.cji.height = this.jpo.zbt.hnh.height;
            this.gvb = this.cji.getContext("2d");
            this.offsetLeft = this.iho.offsetLeft;
            this.offsetTop = this.iho.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.ocn = true
        }
    };
    this.jxf = function(a) {
        this.jpo = this.jnp(a);
        this.width = this.jpo.canvas.hnh.width;
        this.height = this.jpo.canvas.hnh.height
    };
    this.vji = function() {
        this.style = new bza();
        this.backgroundColor = this.style.zbt.abg
    };
    this.jnp = function(a) {
        this.yjg = a;
        if (a == nbt.jpo.bal) {
            return new oji()
        } else {
            if (a == nbt.jpo.gjg) {
                return new maw()
            } else {
                if (a == nbt.jpo.qxs) {
                    return new tnb()
                } else {
                    if (a == nbt.jpo.edt) {
                        return new lpu()
                    } else {
                        if (a == nbt.jpo.ymb) {
                            return new fza()
                        } else {
                            if (a == nbt.jpo.jzi) {
                                return new biz()
                            } else {
                                if (a == nbt.jpo.mon) {
                                    return new nqt()
                                } else {
                                    if (a == nbt.jpo.ujh) {
                                        return new fie()
                                    } else {
                                        if (a == nbt.jpo.afo) {
                                            return new hcr()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.zht = function(a) {
        if (this.ocn) {
            this.jpc();
            this.rmw(a)
        } else {
            this.nqr()
        }
    };
    this.jpc = function() {
        this.canvas.width = 0;
        if (this.nsj === false) {
            this.iho.style.marginTop = (-this.height / 2 + this.epy()) + "px";
            this.iho.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.iho.style.left = "0px";
            this.iho.style.top = "0px";
            this.iho.style.marginTop = ((this.piw - this.height) / 2 + this.epy()) + "px";
            this.iho.style.marginLeft = ((this.lyw - this.width) / 2) + "px"
        }
        this.iho.style.width = (this.width > this.lyw) ? this.lyw + "px" : this.width + "px";
        this.iho.style.height = (this.height > this.piw) ? this.piw + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (!this.xsu) {
            this.cji.width = this.jpo.zbt.hnh.width;
            this.cji.height = this.jpo.zbt.hnh.height
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.rmw = function(a) {
        this.rjq();
        this.hkt();
        this.ods();
        this.dbo();
        this.geo();
        if (!(this.xsu && !this.myh)) {
            this.gtl()
        }
        if (this.jpo.qsm) {
            this.yxh();
            this.jok()
        }
        if (!this.xsu) {
            if (this.jpo.dur) {
                if (this.com.ljc("tops")) {
                    this.qux()
                } else {
                    this.uqf()
                }
            } else {
                this.com.spd("tops")
            }
            this.cxh();
            if (this.evk()) {
                this.xjd()
            }
        } else {
            this.rsw()
        }
        if (a) {
            this.zoy()
        }
    };
    this.hkt = function() {
        if (this.kqq) {
            this.kqq.pki(this.jpo.kqq.hnh);
            this.kqq.dly(this.jpo.kqq)
        }
    };
    this.ods = function() {
        if (this.vqz) {
            this.vqz.pki(this.jpo.vqz.hnh);
            this.vqz.dly(this.jpo.vqz)
        }
    };
    this.dbo = function() {
        if (this.noi) {
            this.noi.pki(this.jpo.noi.hnh);
            this.noi.dly(this.jpo.noi)
        }
    };
    this.geo = function() {
        if (this.vrn) {
            this.vrn.pki(this.jpo.vrn.hnh);
            this.vrn.dly(this.jpo.vrn)
        }
    };
    this.rjq = function() {
        if (this.zck) {
            this.zck.pki(this.jpo.zck.hnh);
            this.zck.dly(this.jpo.zck)
        }
    };
    this.gtl = function() {
        if (this.qeu) {
            this.qeu.pki(this.jpo.uvl.hnh);
            this.qeu.dly(this.jpo.uvl)
        }
    };
    this.yfu = function() {
        if (this.itl) {
            this.itl.pki(this.jpo.uvl.itl.hnh);
            this.itl.dly(this.jpo.uvl.itl)
        }
    };
    this.jok = function() {
        lbz.prototype.jok.call(this);
        var b = this.com.ljc("topb");
        if (b) {
            if (this.lvc) {
                var a = b.hjv.ljc("help");
                if (a) {
                    a.ecu(!this.jpo.dur)
                }
            }
        }
    };
    this.qux = function() {
        var a = this.com.ljc("tops");
        if (a) {
            a.pki(this.jpo.top.hnh);
            a.uzk(this.jpo.dur)
        }
    };
    this.zoy = function() {
        if (this.com.ljc("tops")) {
            this.qeu.gbt(true);
            this.bdg();
            if (this.qeu.gmy() == 0) {
                this.wyy()
            }
        } else {
            this.dak = null;
            this.qeu.fmx(this.itl, true)
        }
        this.qeu.wod()
    };
    this.nbv = function() {
        lbz.prototype.nbv.call(this);
        if (this.zob() === true) {
            this.uck.lfj(true)
        }
    };
    this.bvb = function() {
        var c = nbt.zgl.value30 + "/basic/images/" + this.jpo.type + "/",
            d = "btn_";
        for (var b = 0, a = nbt.zgl.value5.length; b < a; b++) {
            this.uck.spr(nbt.zgl.value5[b], c + d + nbt.zgl.value5[b] + ".png")
        }
    };
    this.bqy = function() {
        var a = this.nnw + this.jpo.type + "/";
        this.uck.spr("icon", a + "icon_out.png");
        this.uck.spr("white", a + "whitefield.jpg");
        this.uck.spr("blue", a + "bluefield.jpg");
        this.uck.spr("red", a + "redfield.jpg");
        this.uck.spr("redwin", a + "redballfield.jpg");
        this.uck.spr("ball", a + "ball.png");
        this.uck.spr("yball", a + "yellowball.png");
        this.uck.spr("pipe", a + "nupplerbig.png");
        this.uck.spr("eball_s", a + "extraball_small.png");
        this.uck.spr("eball_b", a + "extraball_big.png");
        this.uck.gzw(a, "gui_desktop_v21.json")
    };
    this.tdz = function() {
        var c = this.dtw;
        this.uck.wwd("animation", null, false, c + "animation");
        this.uck.wwd("animation_turbo", null, false, c + "animation_turbo");
        this.uck.wwd("ball", null, false, c + "ball");
        this.uck.wwd("propextra", this.tou, false, c + "proposeextra");
        this.uck.wwd("extball", null, false, c + "showextra");
        this.uck.wwd("gamble", null, false, c + "startextra");
        this.uck.wwd("ball1", null, false, c + "extraball1");
        this.uck.wwd("ball2", null, false, c + "extraball2");
        this.uck.wwd("win", null, false, c + "win");
        this.uck.wwd("startwin", null, false, c + "winstart");
        this.uck.wwd("countup", this.dlo, false, c + "wincountup");
        this.uck.wwd("startcollect", null, false, c + "collect");
        this.uck.wwd("collect", null, false, c + "collect_final");
        this.uck.wwd("clear", null, false, c + "clear");
        this.uck.wwd("quicktip", null, false, c + "quicktip");
        this.uck.wwd("limit", null, false, c + "limit");
        for (var b = 0; b < 10; b++) {
            var a = "hit" + (b + 1);
            this.uck.wwd(a, null, false, c + a)
        }
        c = nbt.zgl.value30 + "/basic/sounds/";
        if (!nbt.zgl.value55) {
            this.uck.wwd("btn", null, false, c + "btn");
            for (var b = 0; b < 12; b++) {
                this.uck.wwd("step" + b, null, false, c + "step" + (b + 1))
            }
            this.uck.wwd("maxstep", null, false, c + "maxstep")
        } else {
            this.uck.wwd("btn", null, false, c + "ama_btn");
            for (var b = 0; b < 12; b++) {
                this.uck.wwd("step" + b, null, false, c + "ama_step")
            }
            this.uck.wwd("maxstep", null, false, c + "ama_step")
        }
        this.uck.wwd("silence", null, false, c + "silence");
        this.uck.wwd("panel_in", null, false, c + "panel_in");
        this.uck.wwd("panel_out", null, false, c + "panel_out");
        this.uck.wwd("audioon", null, false, c + "audio_on")
    };
    this.awh = function(a) {
        if (a == nbt.language.EN || a == nbt.language.US) {
            return new xfu()
        } else {
            if (a == nbt.language.ES || a == nbt.language.CO || a == nbt.language.MX || a == nbt.language.CL || a == nbt.language.VE) {
                return new ftg()
            } else {
                if (a == nbt.language.DE || a == nbt.language.AT) {
                    return new vvt()
                } else {
                    if (a == nbt.language.PT || a == nbt.language.BR) {
                        return new csy()
                    } else {
                        if (a == nbt.language.RU) {
                            return new dhg()
                        } else {
                            if (a == nbt.language.EE) {
                                return new sgz()
                            } else {
                                if (a == nbt.language.TR) {
                                    return new mfz()
                                } else {
                                    if (a == nbt.language.CZ) {
                                        return new tsj()
                                    } else {
                                        if (a == nbt.language.GR) {
                                            return new sro()
                                        } else {
                                            if (a == nbt.language.BG) {
                                                return new uqh()
                                            } else {
                                                if (a == nbt.language.GE) {
                                                    return new hod()
                                                } else {
                                                    if (a == nbt.language.HU) {
                                                        return new yhf()
                                                    } else {
                                                        if (a == nbt.language.RO) {
                                                            return new qsr()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.dfu = function() {
        var b = this.com.ljc("topb"),
            a = this.com.ljc("topi");
        this.wyd();
        this.zck.xhp(this.rfy, 0);
        this.zck.dfu(this.language);
        this.vrn.dfu(this.language);
        if (this.qeu) {
            this.qeu.hjv.dse("return", "#lun", [this.language.ret, false])
        }
        if (this.itl) {
            this.itl.jum = this.language.upv;
            this.itl.hie = this.language.bng;
            this.itl.mgb = this.language.qvz.toUpperCase();
            this.itl.zow = this.language.zho.toUpperCase()
        }
        if (this.dak) {
            this.dak.jum = this.language.upv;
            this.dak.hie = this.language.bng;
            this.dak.mgb = this.language.qvz.toUpperCase();
            this.dak.zow = this.language.zho.toUpperCase()
        }
        if (b) {
            b.hjv.dse("language", "#hue", [this.language.language]);
            b.hjv.dse("audio", "#hue", [this.language.audio]);
            b.hjv.dse("turbo", "#hue", [this.language.nwu]);
            b.hjv.dse("fullscreen", "#hue", [this.language.etp]);
            b.hjv.dse("help", "#hue", [this.language.uvl]);
            b.hjv.dse("history", "#hue", [this.language.exe]);
            b.hjv.dse("statistic", "#hue", [this.language.otg]);
            b.hjv.dse("deposit", "#hue", [this.language.llh])
        }
        if (a) {
            a.hue("freeplay", this.language.qur)
        }
    };
    this.kbv = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.cao) {
            return
        }
        var h = 0,
            f = 0,
            c = false,
            d = this.com.ljc("msg"),
            a = this.com.ljc("stats"),
            i = this.com.ljc("topb"),
            g = this.com.ljc("topi");
        if (b.touches) {
            var e = b.touches[0];
            c = true;
            if (!this.xmx) {
                h = e.pageX - this.offsetLeft;
                f = e.pageY - this.offsetTop
            } else {
                h = Math.round((e.pageX - this.offsetLeft) / this.ved);
                f = Math.round((e.pageY - this.offsetTop) / this.iqe)
            }
        } else {
            if (b.which != 1) {
                return
            }
            if (!this.xmx) {
                h = b.pageX - this.offsetLeft;
                f = b.pageY - this.offsetTop
            } else {
                h = Math.round((b.pageX - this.offsetLeft) / this.ved);
                f = Math.round((b.pageY - this.offsetTop) / this.iqe)
            }
        }
        if (d && d.yzw()) {
            if (d.kbv(h, f)) {
                return
            }
        }
        if (i && i.yzw()) {
            if (i.kbv(h, f)) {
                clearTimeout(this.ndc);
                return
            } else {
                this.pab(this.zck.glw(h, f, null));
                return
            }
        }
        if (g) {
            if (g.kbv(h, f, c)) {
                return
            }
        }
        if (a && a.yzw()) {
            if (a.kbv(h, f)) {
                return
            }
        }
        if (this.qeu && this.qeu.yzw()) {
            if (this.qeu.kbv(h, f)) {
                return
            }
        }
        if (this.zck) {
            if (this.zck.kbv(h, f)) {
                return
            }
        }
        if (this.noi) {
            if (this.noi.kbv(h, f)) {
                return
            }
        }
    };
    this.zot = function(b) {
        var a = this.com.ljc("msg"),
            c = this.com.ljc("topb");
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.cao) {
            return
        }
        if (a && a.yzw()) {
            if (a.zot()) {
                return
            }
        }
        if (c && c.yzw()) {
            if (c.zot()) {
                return
            }
        }
        if (this.qeu && this.qeu.yzw()) {
            if (this.qeu.zot()) {
                return
            }
        }
        if (this.zck) {
            if (this.zck.zot()) {
                return
            }
        }
    };
    this.qck = function(b) {
        var a = this.com.ljc("msg"),
            c = this.com.ljc("topb");
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (a && a.yzw()) {
            if (a.qck(b.keyCode)) {
                return
            }
        }
        if (c) {
            if (c.qck(b.keyCode)) {
                return
            } else {
                if (c.yzw() && c.aso()) {
                    this.pab(this.zck.glw(null, null, b.keyCode));
                    return
                }
            }
        }
        if (this.qeu && this.qeu.yzw()) {
            if (this.qeu.qck(b.keyCode)) {
                return
            }
        }
        if (this.zck) {
            if (this.zck.qck(b.keyCode)) {
                return
            }
        }
    };
    this.qsz = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        var a = this.com.ljc("msg"),
            c = this.com.ljc("topb");
        if (a && a.yzw()) {
            if (a.qsz()) {
                return
            }
        }
        if (this.qeu && this.qeu.yzw()) {
            if (this.qeu.qsz()) {
                return
            }
        }
        if (this.zck) {
            if (this.zck.qsz()) {
                return
            }
        }
        if (c) {
            if (c.qsz()) {
                return
            }
        }
    };
    this.zlm = function() {
        if (!nbt.zbt.qeu.yzw()) {
            nbt.zbt.pab();
            if (nbt.zbt.com.ljc("tops")) {
                nbt.zbt.rbm()
            }
            if (nbt.zbt.qeu.gmy() > 0) {
                nbt.zbt.gdb()
            }
        } else {
            nbt.zbt.wyy()
        }
    };
    this.tni = function() {
        nbt.zbt.noi.fbf();
        nbt.zbt.noi.jsb();
        var a = nbt.zbt.noi.wyo();
        nbt.zbt.vrn.xpi(nbt.zbt.kcx[nbt.zbt.nln]);
        nbt.zbt.vrn.ihj(a, nbt.zbt.yjm())
    };
    this.tft = function() {
        var b = nbt.zbt.com.ljc("topb"),
            a = nbt.zbt.com.ljc("topi");
        nbt.zbt.nwu = !nbt.zbt.nwu;
        if (a) {
            a.oxd("turbo", nbt.zbt.nwu)
        }
        if (b) {
            b.hjv.dse("turbo", "#sqy", [(nbt.zbt.nwu) ? 1 : 0])
        }
    };
    this.rav = function() {
        nbt.zbt.noi.xwm();
        nbt.zbt.noi.jsb();
        var a = nbt.zbt.noi.wyo();
        nbt.zbt.vrn.xpi(nbt.zbt.kcx[nbt.zbt.nln]);
        nbt.zbt.vrn.ihj(a, nbt.zbt.yjm())
    };
    this.kjp = function() {
        if (nbt.zbt.kqa && nbt.zbt.jsn != nbt.jcp.kqb.xlh) {
            nbt.zbt.ggp();
            if (nbt.zbt.yjm() <= nbt.zbt.dgg) {
                nbt.zbt.uck.gyl("gamble");
                nbt.zbt.kkk.xgw()
            } else {
                nbt.zbt.uck.gyl("limit");
                nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.tnt, true]);
                nbt.zbt.zck.hjv.dse("info", "#tlc", [0, 3000])
            }
        } else {
            lbz.prototype.kjp.call(this)
        }
    };
    this.sol = function() {
        var a = 0,
            b = false;
        if (nbt.zbt.nln < nbt.zbt.kcx.length - 1) {
            if (nbt.zbt.nln >= nbt.zbt.rhe(true)) {
                nbt.zbt.nln = 0;
                while (nbt.zbt.nln < nbt.zbt.lid()) {
                    nbt.zbt.nln++
                }
            } else {
                nbt.zbt.nln++
            }
        } else {
            nbt.zbt.nln = 0;
            while (nbt.zbt.nln < nbt.zbt.lid()) {
                nbt.zbt.nln++
            }
        }
        b = nbt.zbt.ilr(nbt.zbt.noi.wyo());
        if (!b) {
            nbt.zbt.nln = 0;
            while (nbt.zbt.nln < nbt.zbt.lid()) {
                nbt.zbt.nln++
            }
        }
        a = nbt.zbt.kcx[nbt.zbt.nln];
        if (a == nbt.zbt.nfz) {
            nbt.zbt.uck.gyl("maxstep")
        } else {
            nbt.zbt.uck.gyl("step" + (nbt.zbt.nln % 12))
        }
        nbt.zbt.vrn.hjv.dse("betd", "#lun", [nbt.zbt.zai(a)]);
        nbt.zbt.vrn.xpi(a);
        nbt.zbt.com.dse("tops", "#jsb");
        if (a >= nbt.zbt.nfz) {
            return true
        }
        return false
    };
    this.lhj = function() {
        var a = 0,
            b = false;
        if (nbt.zbt.nln > 0) {
            if (nbt.zbt.nln <= nbt.zbt.lid()) {
                nbt.zbt.nln = nbt.zbt.kcx.length;
                while (nbt.zbt.nln > nbt.zbt.rhe(true)) {
                    nbt.zbt.nln--
                }
            } else {
                nbt.zbt.nln--
            }
        } else {
            nbt.zbt.nln = nbt.zbt.kcx.length;
            while (nbt.zbt.nln > nbt.zbt.rhe(true)) {
                nbt.zbt.nln--
            }
        }
        b = nbt.zbt.ilr(nbt.zbt.noi.wyo());
        if (!b) {
            nbt.zbt.nln = nbt.zbt.kcx.length;
            while (nbt.zbt.nln > nbt.zbt.rhe(true) || !b) {
                nbt.zbt.nln--;
                b = nbt.zbt.ilr(nbt.zbt.noi.wyo())
            }
        }
        a = nbt.zbt.kcx[nbt.zbt.nln];
        if (a == nbt.zbt.nfz) {
            nbt.zbt.uck.gyl("maxstep")
        } else {
            nbt.zbt.uck.gyl("step" + (nbt.zbt.nln % 12))
        }
        nbt.zbt.vrn.hjv.dse("betd", "#lun", [nbt.zbt.zai(a)]);
        nbt.zbt.vrn.xpi(a);
        nbt.zbt.com.dse("tops", "#jsb");
        if (a <= nbt.zbt.rxe) {
            return true
        }
        return false
    };
    this.cdw = function() {
        if (nbt.zbt.jsn == nbt.jcp.kqb.ouq && nbt.zbt.tyr()) {
            nbt.zbt.zck.qrc(false);
            nbt.zbt.pcz(false);
            nbt.zbt.ggp();
            nbt.zbt.uck.gyl("startcollect");
            nbt.zbt.vqz.evh();
            nbt.zbt.kkk.mft()
        } else {
            var a = nbt.zbt.noi.wyo();
            if (a < 3) {
                nbt.zbt.uck.gyl("limit");
                nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.wta, true]);
                nbt.zbt.zck.hjv.dse("info", "#tlc", [0, 3000])
            } else {
                if (nbt.zbt.yjm() <= nbt.zbt.dgg) {
                    nbt.zbt.vrn.hjv.dse("wind", "#lun", [""]);
                    nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.yya, true]);
                    nbt.zbt.zck.qrc(false);
                    nbt.zbt.pcz(false);
                    nbt.zbt.noi.ecu(false);
                    nbt.zbt.vrn.bik(0);
                    nbt.zbt.vqz.evh();
                    nbt.zbt.noi.euo();
                    nbt.zbt.noi.jsb();
                    if (nbt.zbt.nwu) {
                        nbt.zbt.uck.gyl("animation_turbo")
                    } else {
                        nbt.zbt.uck.gyl("animation")
                    }
                    nbt.zbt.kqq.pym()
                } else {
                    nbt.zbt.uck.gyl("limit");
                    nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.tnt, true]);
                    nbt.zbt.zck.hjv.dse("info", "#tlc", [0, 3000])
                }
            }
        }
    };
    this.url = function() {
        if (nbt.zbt.uck.axv()) {
            nbt.zbt.com.dse("loading", "#stop");
            setTimeout(nbt.zbt.xnv, 100);
            nbt.zbt.uck.gyl("silence");
            if (nbt.eea.pfa()) {
                nbt.zbt.ekh()
            }
        }
    };
    this.gdb = function() {
        this.zck.hjv.dse("info", "#uqp");
        this.pcz(false);
        this.zck.qrc(false);
        this.rhl(false);
        this.qeu.jxl();
        this.qeu.qrc(true)
    };
    this.wyy = function() {
        this.qeu.qrc(false);
        this.zck.qrc(true);
        this.pcz(true);
        this.rhl(true);
        this.qeu.fon();
        this.zck.hjv.dse("info", "#eyh", [0])
    };
    this.rbm = function() {
        var a = this.com.ljc("tops");
        if (a) {
            a.ksk(0);
            this.jsb()
        }
    };
    this.jsb = function(j, g, l, e) {
        var d = (j != null && g != null && l != null && e != null),
            i = (d === true) ? new hla(j, g, l, e) : new hla(this.jpo.zbt.hnh.x, this.jpo.zbt.hnh.y, this.jpo.zbt.hnh.width, this.jpo.zbt.hnh.height),
            n = this.context2D,
            k = (this.myh === true) ? this.style.zbt.jvx : this.style.zbt.backgroundColor,
            m = this.com.ljc("topb"),
            f = this.com.ljc("topi"),
            b = this.com.ljc("stats"),
            c = this.com.ljc("msg"),
            a = this.com.ljc("tops"),
            o = this.com.ljc("history");
        if (this.gpv()) {
            this.xdc = false;
            n.save();
            if (d) {
                n.beginPath();
                n.rect(j, g, l, e);
                n.closePath();
                n.clip()
            }
            n.clearRect(0, 0, this.width, this.height);
            if (this.jpo.orb) {
                nbt.eea.sfx(n, this.jpo.zbt.hnh.x - this.jpo.zbt.ssz, this.jpo.zbt.hnh.y - this.jpo.zbt.ssz, this.jpo.zbt.hnh.width + 2 * this.jpo.zbt.ssz, this.jpo.zbt.hnh.height + 2 * this.jpo.zbt.ssz, k, 1)
            }
            if (o) {
                o.jsb()
            }
            if (f) {
                f.jsb()
            }
            if (a && a.yzw()) {
                a.jsb()
            }
            if (b && b.yzw()) {
                b.jsb()
            } else {
                if (this.qeu != null && this.qeu.yzw()) {
                    this.qeu.jsb()
                } else {
                    nbt.eea.sfx(n, this.jpo.zbt.hnh.x, this.jpo.zbt.hnh.y, this.jpo.zbt.hnh.width, this.jpo.zbt.hnh.height, this.backgroundColor, 1);
                    if (this.kqq) {
                        if (this.kqq.qrh()) {
                            this.kqq.qzj()
                        }
                        this.kqq.jsb()
                    }
                    if (this.vqz) {
                        this.vqz.jsb()
                    }
                    if (this.noi) {
                        this.noi.jsb()
                    }
                    if (this.vrn) {
                        this.vrn.jsb()
                    }
                    if (this.zck) {
                        this.zck.jsb()
                    }
                }
            }
            if (m && m.yzw()) {
                m.jsb()
            }
            if (c) {
                if (c.yzw()) {
                    this.byv(n, i)
                }
                c.jsb()
            }
            n.restore()
        }
    };
    this.byv = function(a, b) {
        this.xdc = true;
        nbt.eea.sfx(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.ada = function() {
        nbt.zbt.jsb()
    };
    this.npq = function(e) {
        var c = 0,
            a = false;
        this.xcc = true;
        this.noi.ecu(false);
        this.jsn = e;
        this.kqa = false;
        if (this.jsn != nbt.jcp.kqb.aam) {
            this.noi.hbf();
            this.kqq.fpi = this.dlq;
            this.noi.ohc(this.dby, this.dlq)
        }
        this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg)]);
        this.vrn.hjv.dse("betd", "#lun", [this.zai(this.kcx[this.nln])]);
        this.vrn.hjv.dse("wind", "#lun", [(this.fyd > 0) ? this.zai(this.fyd) : ""]);
        c = this.noi.wyo();
        a = this.tyr();
        this.vrn.ihj(c, this.yjm());
        this.vrn.bik(this.fyd);
        this.vqz.jnj(0, 0);
        if (this.jsn == nbt.jcp.kqb.ouq) {
            if (a) {
                this.zck.hjv.dse("info", "#ljw", [this.language.krc, true]);
                this.pcz(false);
                this.hcu()
            } else {
                this.zck.hjv.dse("info", "#eyh", [0]);
                this.zck.qrc(true);
                this.pcz(true);
                this.noi.ecu(true);
                this.axi()
            }
        } else {
            if (this.jsn == nbt.jcp.kqb.fwl) {
                this.zck.hjv.dse("info", "#eyh", [0]);
                this.zck.qrc(true);
                this.pcz(true);
                this.noi.ecu(true);
                this.axi()
            } else {
                if (this.jsn == nbt.jcp.kqb.xlh) {
                    var d = this.dlq[20],
                        b = this.dlq[21];
                    this.vqz.jnj(d, b);
                    this.zck.hjv.dse("info", "#eyh", [0]);
                    this.zck.qrc(true);
                    this.pcz(true);
                    this.noi.ecu(true)
                } else {
                    if (this.jsn == nbt.jcp.kqb.aam) {
                        this.zck.hjv.dse("info", "#eyh", [0]);
                        this.zck.qrc(true);
                        this.pcz(true);
                        this.noi.ecu(true);
                        this.axi()
                    }
                }
            }
        }
        this.jsb()
    };
    this.luh = function() {
        this.xcc = false;
        this.kqa = false;
        this.noi.ecu(false);
        this.kqq.fpi = this.dlq;
        this.kqq.qjb();
        if (this.fyd > 0) {
            if (this.vkq()) {
                this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg)])
            } else {
                this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg - this.fyd)])
            }
        } else {
            this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg)])
        }
    };
    this.xjv = function() {
        this.xcc = false;
        this.zck.hjv.dse("info", "#uqp");
        this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg - this.fyd)]);
        this.nex = setTimeout(this.nwh, 800)
    };
    this.zsy = function() {
        this.xcc = false;
        this.kqa = false;
        if (this.fyd > 0) {
            this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg - this.fyd)]);
            this.vrn.bik(this.fyd);
            this.urm = setTimeout(this.dkl, 100)
        } else {
            this.zck.qrc(false);
            this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.dgg)])
        }
    };
    this.nwh = function() {
        var b = nbt.zbt.dlq[20],
            a = nbt.zbt.dlq[21];
        nbt.zbt.kqq.fpi = nbt.zbt.dlq;
        nbt.zbt.vqz.ulu(b, a)
    };
    this.fjn = function() {
        nbt.zbt.oup(false)
    };
    this.izq = function() {
        nbt.zbt.kkk.ekz(nbt.zbt.nln, nbt.zbt.noi.xxp())
    };
    this.yjm = function() {
        return this.kcx[this.nln]
    };
    this.bho = function() {
        this.vrn.ihj(this.noi.wyo(), this.yjm())
    };
    this.oup = function(a) {
        if (this.fyd > 0) {
            this.zck.hjv.dse("info", "#ljw", [this.language.oii, true]);
            if (a) {
                this.uck.gyl("win");
                this.vrn.bik(this.fyd);
                if (this.tyr()) {
                    this.vqz.mxl()
                } else {
                    this.urm = setTimeout(this.dkl, 1000)
                }
            } else {
                this.vrn.bik(this.fyd);
                this.urm = setTimeout(this.dkl, 1000)
            }
        } else {
            this.zck.hjv.dse("info", "#uqp");
            this.zck.hjv.dse("info", "#tlc", [0]);
            this.zck.qrc(true);
            this.pcz(true);
            this.noi.ecu(true)
        }
    };
    this.dkl = function() {
        nbt.zbt.uck.gyl("startwin");
        nbt.zbt.urm = setTimeout(nbt.zbt.eqf, 1000)
    };
    this.eqf = function() {
        nbt.zbt.noo = new Date().getTime();
        nbt.zbt.fkb = nbt.zbt.fyd;
        nbt.zbt.evu = nbt.zbt.dgg - nbt.zbt.fkb;
        nbt.zbt.kbq = 0;
        nbt.zbt.uck.gyl("countup");
        nbt.zbt.urm = uwy(nbt.zbt.ejq)
    };
    this.ejq = function() {
        if (nbt.zbt.fkb > 0) {
            nbt.zbt.jcj();
            nbt.zbt.urm = uwy(nbt.zbt.ejq)
        } else {
            nbt.zbt.uck.aqn("countup");
            nbt.zbt.uck.gyl("collect");
            nbt.zbt.vrn.hjv.dse("creditd", "#lun", [nbt.zbt.zai(nbt.zbt.dgg), true]);
            nbt.zbt.vrn.hjv.dse("wind", "#lun", [(nbt.zbt.fyd > 0) ? nbt.zbt.zai(nbt.zbt.fyd) : "", true]);
            nbt.zbt.zck.hjv.dse("info", "#tlc", [0]);
            nbt.zbt.zck.hjv.dse("exit", "#lun", [(nbt.zgl.value50.g === true) ? nbt.zbt.language.hde : nbt.zbt.language.kue]);
            nbt.zbt.zck.qrc(true);
            nbt.zbt.pcz(true);
            nbt.zbt.noi.ecu(true)
        }
    };
    this.jcj = function() {
        var a = new Date().getTime(),
            b = 0;
        if ((a - this.noo) >= 150) {
            this.noo = a;
            b = 0;
            if (this.fkb < 10) {
                b = 1
            } else {
                b = Math.round(this.fkb / 10)
            }
            this.fkb -= b;
            this.evu += b;
            this.kbq += b;
            this.vrn.hjv.dse("creditd", "#lun", [this.zai(this.evu), true]);
            this.vrn.hjv.dse("wind", "#lun", [(this.kbq > 0) ? this.zai(this.kbq) : "", true])
        }
    };
    this.tyr = function() {
        var c = this.fyd,
            b = this.noi.avw(),
            a = this.noi.wyo();
        if (c >= this.uov) {
            return false
        }
        return this.xmu[b][a]
    };
    this.vkq = function() {
        var b = this.dlq,
            f = this.dby,
            d = 0,
            a = 0,
            g = 0;
        for (var e = 0; e < 10; e++) {
            g = f[e];
            if (g > 0) {
                a += 1;
                for (var c = 0; c < 20; c++) {
                    if (g == b[c]) {
                        d += 1;
                        break
                    }
                }
            }
        }
        return this.xmu[d][a]
    };
    this.hcu = function() {
        this.noo = new Date().getTime();
        this.dxx = true;
        this.kqa = true;
        this.uck.gyl("propextra");
        this.vqz.jnj();
        this.zck.hjv.dse("info", "#ljw", [this.language.krc, true]);
        this.zck.hjv.dse("exit", "#lun", [this.language.icp]);
        this.zck.hjv.dse("start", "#lun", [this.language.jmr]);
        this.zck.hjv.dse("start", "#ecu", [true]);
        this.zck.hjv.dse("exit", "#ecu", [true]);
        this.jsb();
        this.czq = setInterval(this.bgh, 400)
    };
    this.ggp = function() {
        this.dxx = false;
        this.kqa = false;
        clearInterval(this.czq);
        this.uck.aqn("propextra");
        this.zck.hjv.dse("exit", "#lun", [(nbt.zgl.value50.g === true) ? this.language.hde : this.language.kue]);
        this.zck.hjv.dse("start", "#lun", [this.language.start]);
        this.zck.hjv.dse("start", "#ecu", [false]);
        this.zck.hjv.dse("exit", "#ecu", [false]);
        this.vqz.kxt(true, true);
        this.zck.hjv.dse("exit", "#kxt", [false]);
        this.jsb()
    };
    this.bgh = function() {
        var a = false;
        if (nbt.zbt.dxx) {
            a = !nbt.zbt.vqz.iwj();
            nbt.zbt.vqz.kxt(a, true);
            nbt.zbt.zck.hjv.dse("exit", "#kxt", [a])
        } else {
            nbt.zbt.vqz.kxt(true, true);
            nbt.zbt.zck.hjv.dse("exit", "#kxt", [false])
        }
    };
    this.ogc = function() {
        nbt.zbt.uck.gyl("limit");
        nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.hzp, true]);
        nbt.zbt.zck.hjv.dse("info", "#tlc", [0, 3000])
    };
    this.jnw = function() {
        nbt.zbt.uck.gyl("limit");
        nbt.zbt.zck.hjv.dse("info", "#ljw", [nbt.zbt.language.zkk, true]);
        nbt.zbt.zck.hjv.dse("info", "#tlc", [0, 3000])
    };
    this.ilr = function(b) {
        var c = this.yjm(),
            a = c * this.bsf[b][b];
        if (a <= this.uov) {
            return true
        }
        return false
    };
    this.dlo = function() {
        if (nbt.zbt.fkb > 0) {
            nbt.zbt.uck.gyl("countup")
        }
    };
    this.tou = function() {
        if (nbt.zbt.dxx) {
            nbt.zbt.uck.gyl("propextra")
        }
    };
    this.rhl = function(a) {
        this.zck.hjv.lir("buttons", "#uzk", [a]);
        this.jsb()
    };
    this.pcz = function(e) {
        lbz.prototype.pcz.call(this, e);
        var d = this.com.ljc("topb"),
            c = (this.com.ljc("tops") != null);
        if (c) {
            var a = (e && !this.niv);
            if (this.lvc && d) {
                var b = d.hjv.ljc("help");
                if (b) {
                    b.ecu(a && !c)
                }
            }
        }
    };
    this.cil = function(e) {
        lbz.prototype.cil.call(this, e);
        var d = this.com.ljc("topb"),
            c = (this.com.ljc("tops") != null);
        if (c) {
            var a = (e && !this.niv);
            if (this.lvc && d) {
                var b = d.hjv.ljc("help");
                if (b) {
                    b.ecu(a && !c)
                }
            }
        }
    };
    this.wnp = function(e) {
        lbz.prototype.wnp.call(this, e);
        var d = this.com.ljc("topb"),
            c = (this.com.ljc("tops") != null);
        if (c) {
            var a = (e && !this.niv);
            if (this.lvc && d) {
                var b = d.hjv.ljc("help");
                if (b) {
                    b.ecu(a && !c)
                }
            }
        }
    };
    this.bbg = function(a) {
        this.dgg = a;
        if (!this.qeu.yzw()) {
            this.ctd(a, true)
        }
        if (this.dgg > 0) {
            this.vwv()
        } else {
            this.hoi()
        }
    };
    this.ctd = function(b, a) {
        this.vrn.hjv.dse("creditd", "#lun", [this.zai(b), a])
    };
    this.rhe = function(b) {
        for (var c = 0; c < this.kcx.length; c++) {
            var a = this.kcx[c];
            if (a > this.nfz || (b && (this.dgg > 0 && this.dgg < a))) {
                return c - 1
            } else {
                if (a == this.nfz || c == this.kcx.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.lid = function() {
        for (var b = 0; b < this.kcx.length; b++) {
            var a = this.kcx[b];
            if (a >= this.rxe && a < this.nfz) {
                return b
            }
        }
        return -1
    };
    this.stop = function() {
        lbz.prototype.stop.call(this);
        clearTimeout(this.urm);
        cwi(this.urm);
        clearTimeout(this.nex);
        clearInterval(this.czq);
        this.vot();
        if (this.zck != null) {
            this.zck.hjv.dse("exit", "#hkq");
            this.zck.hjv.dse("info", "#uqp");
            this.zck.stop()
        }
        if (this.vqz) {
            this.vqz.stop()
        }
        if (this.kqq) {
            this.kqq.gci()
        }
        this.vbw();
        if (!this.xsu) {
            this.jsb()
        }
    };
    this.ltz = function(a) {
        if (a == nbt.opg.zvp) {
            this.zck.hjv.dse("info", "#ljw", [this.language.tnt, true])
        } else {
            if (a == nbt.opg.mzr) {
                this.zck.hjv.dse("info", "#ljw", [this.language.oxi + " " + this.nud(this.rxe), true])
            } else {
                if (a >= nbt.opg.php) {
                    this.stop();
                    this.zck.qrc(false);
                    this.pcz(false)
                }
            }
        }
        if (a < nbt.opg.php) {
            this.zck.qrc(true);
            this.pcz(true)
        } else {
            this.mhh(a)
        }
    };
    this.mza = function(b, d) {
        var c = this.com.ljc("stats"),
            a = this.com.ljc("history");
        if (this.xkm) {
            if (!this.xsu) {
                if (c && c.yzw()) {
                    c.qrc(false);
                    c.uzk(false)
                }
                if (this.zck != null) {
                    if (this.qeu != null && this.qeu.yzw()) {
                        this.wyy()
                    }
                    this.zck.qrc(false);
                    this.stop();
                    this.zck.hjv.dse("info", "#ljw", [b, true])
                } else {
                    this.vwy(b)
                }
            } else {
                this.stop();
                this.rsw();
                if (a) {
                    a.rdm(true)
                }
                this.aiu(b.toUpperCase())
            }
        } else {
            this.vwy(b)
        }
        if (d) {
            if (!this.xsu && this.kkk.pwv.nxs == 0 && nbt.zgl.value46 > 0) {
                this.par((this.ocn) ? nbt.zgl.value71 : nbt.zgl.value47)
            } else {
                setTimeout(this.kjp, nbt.zgl.value10)
            }
        }
    };
    this.opq = function() {
        return (this.dgg == 0 && (this.jsn == nbt.jcp.kqb.aam || this.jsn == nbt.jcp.kqb.xlh || this.jsn == nbt.jcp.kqb.fwl || (this.jsn == nbt.jcp.kqb.ouq && this.tyr() == false)))
    };
    this.axi = function() {
        if (nbt.zgl.value78) {
            if (nbt.zgl.value78.t === true) {
                this.com.dse("topb", "#uzk", [true]);
                this.osa()
            }
            if (nbt.zgl.value78.d > 0) {
                this.ndc = setTimeout(this.wqw, nbt.zgl.value78.d)
            }
        }
    };
	gameController=this;
    this.wqw = function() {
        nbt.zbt.pab();
        clearTimeout(nbt.zbt.ndc)
    };
    this.osa = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                nbt.zbt.kep(a)
            };
            this.canvas.ontouchmove = function(a) {
                nbt.zbt.kep(a)
            }
        }
    };
    this.vot = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.kep = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        var a = 0,
            e = 0,
            c = this.com.ljc("topb");
        if (b.touches) {
            var d = b.touches[0];
            if (!this.xmx) {
                a = d.pageX - this.offsetLeft;
                e = d.pageY - this.offsetTop
            } else {
                a = Math.round((d.pageX - this.offsetLeft) / this.ved);
                e = Math.round((d.pageY - this.offsetTop) / this.iqe)
            }
        } else {
            if (!this.xmx) {
                a = b.pageX - this.offsetLeft;
                e = b.pageY - this.offsetTop
            } else {
                a = Math.round((b.pageX - this.offsetLeft) / this.ved);
                e = Math.round((b.pageY - this.offsetTop) / this.iqe)
            }
        }
        if (c && c.yzw()) {
            c.cbp(a, e)
        }
    };
    this.ilm = function() {
        this.zck.hjv.dse("info", "#uqp");
        this.zck.qrc(false);
        this.pcz(false);
        this.rhl(false);
        this.com.dse("stats", "#uzk", [true]);
        this.jsb()
    };
    this.pxs = function() {
        this.com.dse("stats", "#qrc", [false]);
        this.com.dse("stats", "#uzk", [false]);
        this.zck.qrc(true);
        this.pcz(true);
        this.rhl(true);
        this.jsb();
        this.zck.hjv.dse("info", "#eyh", [0])
    }
}
lbz.prototype = new ted;

function spp() {
    nbt.zbt = new lbz();
    nbt.zbt.kji({
        jpo: nbt.zgl.value14
    });
    window.focus()
}

function lyv() {
    if (nbt.zbt != null) {
        nbt.zbt.zxm()
    }
}
window.onresize = lyv;
if (nbt.zgl.value9) {
    window.onload = spp
} else {
    spp()
};