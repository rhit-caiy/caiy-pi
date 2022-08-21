var rhit = rhit || {};

rhit.historyManager=null;
rhit.methodManager=null;
rhit.methodTypeManager=null;
rhit.reciteManager=null;
rhit.reciteController=null;
rhit.recordManager=null;
rhit.fbAuthManager=null;
rhit.pi="1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472156951623965864573021631598193195167353812974167729478672422924654366800980676928238280689964004824354037014163149658979409243237896907069779422362508221688957383798623001593776471651228935786015881617557829735233446042815126272037343146531977774160319906655418763979293344195215413418994854447345673831624993419131814809277771038638773431772075456545322077709212019051660962804909263601975988281613323166636528619326686336062735676303544776280350450777235547105859548702790814356240145171806246436267945612753181340783303362542327839449753824372058353114771199260638133467768796959703098339130771098704085913374641442822772634659470474587847787201927715280731767907707157213444730605700733492436931138350493163128404251219256517980694113528013147013047816437885185290928545201165839341965621349143415956258658655705526904965209858033850722426482939728584783163057777560688876446248246857926039535277348030480290058760758251047470916439613626760449256274204208320856611906254543372131535958450687724602901618766795240616342522577195429162991930645537799140373404328752628889639958794757291746426357455254079091451357111369410911939325191076020825202618798531887705842972591677813149699009019211697173727847684726860849003377024242916513005005168323364350389517029893922334517220138128069650117844087451960121228599371623130171144484640903890644954440061986907548516026327505298349187407866808818338510228334508504860825039302133219715518430635455007668282949304137765527939751754613953984683393638304746119966538581538420568533862186725233402830871123282789212507712629463229563989898935821167456270102183564622013496715188190973038119800497340723961036854066431939509790190699639552453005450580685501956730229219139339185680344903982059551002263535361920419947455385938102343955449597783779023742161727111723643435439478221818528624085140066604433258885698670543154706965747458550332323342107301545940516553790686627333799585115625784322988273723198987571415957811196358330059408730681216028764962867446047746491599505497374256269010490377819868359381465741268049256487985561453723478673303904688383436346553794986419270563872931748723320837601123029911367938627089438799362016295154133714248928307220126901475466847653576164773794675200490757155527819653621323926406160136358155907422020203187277605277219005561484255518792530343513984425322341576233610642506390497500865627109535919465897514131034822769306247435363256916078154781811528436679570611086153315044521274739245449454236828860613408414863776700961207151249140430272538607648236341433462351897576645216413767969031495019108575984423919862916421939949072362346468441173940326591840443780513338945257423995082965912285085558215725031071257012668302402929525220118726767562204154205161841634847565169998116141010029960783869092916030288400269104140792886215078424516709087000699282120660418371806535567252532567532861291042487761825829765157959847035622262934860034158722980534989650226291748788202734209222245339856264766914905562842503912757710284027998066365825488926488025456610172967026640765590429099456815065265305371829412703369313785178609040708667114965583434347693385781711386455873678123014587687126603489139095620099393610310291616152881384379099042317473363948045759314931405297634757481193567091101377517210080315590248530906692037671922033229094334676851422144773793937517034436619910403375111735471918550464490263655128162288244625759163330391072253837421821408835086573917715096828874782656995995744906617583441375223970968340800535598491754173818839994469748676265516582765848358845314277568790029095170283529716344562129640435231176006651012412006597558512761785838292041974844236080071930457618932349229279650198751872127267507981255470958904556357921221033346697499235630254947802490114195212382815309114079073860251522742995818072471625916685451333123948049470791191532673430282441860414263639548000448002670496248201792896476697583183271314251702969234889627668440323260927524960357996469256504936818360900323809293459588970695365349406034021665443755890045632882250545255640564482465151875471196218443965825337543885690941130315095261793780029741207665147939425902989695946995565761218656196733786236256125216320862869222103274889218654364802296780705765615144632046927906821207388377814233562823608963208068222468012248261177185896381409183903673672220888321513755600372798394004152970028783076670944474560134556417254370906979396122571429894671543578468788614445812314593571984922528471605049221242470141214780573455105008019086996033027634787081081754501193071412233908663938339529425786905076431006383519834389341596131854347546495569781038293097164651438407007073604112373599843452251610507027056235266012764848308407611830130527932054274628654036036745328651057065874882256981579367897669742205750596834408697350201410206723585020072452256326513410559240190274216248439140359989535394590944070469120914093870012645600162374288021092764579310657922955249887275846101264836999892256959688159205600101655256375678";
rhit.max=rhit.pi.length;// 10000 digits

function htmlToElement(html){
	var template=document.createElement('template');
	html=html.trim();
	template.innerHTML=html;
	return template.content.firstChild;
}

rhit.LoginPageController = class {
	constructor() {
		console.log("login page controller");
		document.querySelector("#rosefireButton").onclick=(event)=>{
			rhit.fbAuthManager.signIn();
		};
	}
}

rhit.MenuController=class{
	constructor(){
		document.querySelector("#start").addEventListener("click",(event)=>{
			window.location.href="/selectPage.html";
		});
		document.querySelector("#history").addEventListener("click",(event)=>{
			window.location.href=`/history.html`;//?uid=${rhit.fbAuthManager.uid}
		});
		document.querySelector("#index").addEventListener("click",(event)=>{
			window.location.href="/search.html";
		});
		document.querySelector("#display").addEventListener("click",(event)=>{
			window.location.href="/display.html";
		});
		document.querySelector("#method").addEventListener("click",(event)=>{
			window.location.href=`/method.html`;//?uid=${rhit.fbAuthManager.uid}
		});
		document.querySelector("#methodType").addEventListener("click",(event)=>{
			window.location.href=`/methodType.html`;//?uid=${rhit.fbAuthManager.uid}
		});
		document.querySelector("#algorithm").addEventListener("click",(event)=>{
			window.location.href="/algorithm.html";
		});
		document.querySelector("#about").addEventListener("click",(event)=>{
			window.location.href="/about.html";
		});
		document.querySelector("#signOut").addEventListener("click",(event)=>{
			rhit.fbAuthManager.signOut();
			window.location.href="/";
		});
	}
	
}

rhit.SelectPageController=class{
	constructor(){
		document.querySelector("#start").addEventListener("click",(event)=>{
			this.startIndex=parseInt(document.querySelector("#startIndex").value);
			this.autoCheck=document.getElementById("autocheck").checked;
			console.log("in select page, start index",this.startIndex,"auto check",this.autoCheck);
			if(this.startIndex!=null&&this.startIndex>0&&this.startIndex<rhit.max&&this.startIndex%1==0){
				window.location.href=`/recitePage.html?startindex=${this.startIndex}&autocheck=${this.autoCheck}&input=`;
			}else{
				console.log("invalid start index");
			}
		});
		document.querySelector("#history").addEventListener("click",(event)=>{
			window.location.href="/history.html";
		});
	}
}




rhit.ReciteManager=class{
	constructor(startIndex,autocheck,input){
		this.startIndex=startIndex;
		this.autocheck=true;
		this.input=input;
		if(autocheck=="false"){
			this.autocheck=false;
		}
		console.log("recite manager",this.startIndex);
		document.getElementById("autocheck").checked=this.autocheck;
		rhit.reciteController=new rhit.ReciteController(this.startIndex);
		document.querySelector("#input").value=this.input;
		if(input){
			document.querySelector("#digitText").innerHTML=`load from history, start from digit ${this.startIndex} and next is ${this.startIndex+this.input.length}`;
		}else{
			document.querySelector("#digitText").innerHTML=`start from digit ${this.startIndex}, previous is ${rhit.reciteController.previous()}`;
		}
		document.querySelector("#input").onkeyup=function(){
			this.input=document.querySelector("#input").value;
			rhit.reciteController.check(this.input);
			console.log(rhit.reciteController.getWrong());
			if(document.getElementById("autocheck").checked){
				document.querySelector("#wrongText").innerHTML="digits go wrong: "+rhit.reciteController.getWrong();
			}
			document.querySelector("#hintText").innerHTML="";
			document.querySelector("#digitText").innerHTML=rhit.reciteController.state(false);
		}
		document.querySelector("#autocheck").addEventListener("click",(event)=>{
			this.autocheck=document.getElementById("autocheck").checked;
			console.log("auto check",this.autocheck);
		});
		document.querySelector("#check").addEventListener("click",(event)=>{
			document.querySelector("#wrongText").innerHTML="digits go wrong: "+rhit.reciteController.getWrong();
			document.querySelector("#digitText").innerHTML=rhit.reciteController.state(true);
		});
		document.querySelector("#save").addEventListener("click",(event)=>{
			console.log("save");
			this.input=document.querySelector("#input").value;
			rhit.historyManager=new rhit.HistoryManager();
			console.log("input",this.input);
			rhit.historyManager.add(this.input,this.startIndex,this.input.length,rhit.reciteController.correctNum,rhit.reciteController.getWrong());
			document.querySelector("#hintText").innerHTML="saved";
		});
		document.querySelector("#hint").addEventListener("click",(event)=>{
			console.log("hint");
			let i=rhit.reciteController.hint();
			console.log(i);
			document.querySelector("#hintText").innerHTML=i;
		});
		document.querySelector("#confirmExit").addEventListener("click",(event)=>{
			console.log("leave");
			window.location.href="/menu.html";
		});
	}
}

rhit.ReciteController=class{
	constructor(startIndex){
		this.startIndex=startIndex;
		console.log("recite controller",startIndex);
		this.wrongDigits=[];
		this.correctNum=0;
		this.totalNum=0;
		this.wrongNum=0;
	}
	check(input){
		this.wrongDigits=[];
		this.totalNum=input.length;
		this.correctNum=0;
		this.wrongNum=0;
		console.log("input",input);
		console.log("correct",rhit.pi.substring(this.startIndex-1,this.startIndex+input.length-1));
		for(let i=0;i<this.totalNum;i++){
			if(input.charAt(i)!=rhit.pi.charAt(this.startIndex+i-1)){
				this.wrongDigits.push(i+1);
				this.wrongNum++;
			}else{
				this.correctNum++;
			}
		}
		console.log(this.wrongDigits);
	}
	getWrong(){
		return this.wrongDigits;
	}
	getCorrectNum(){
		return this.correctNum;
	}
	hint(){
		return rhit.pi.charAt(this.startIndex+this.totalNum-1);
	}
	state(extra){
		let stateString=`start from digit ${this.startIndex}, current length ${this.totalNum}, next digit ${this.startIndex+this.totalNum}`;
		if(extra){
			stateString+=`, correct rate is ${this.correctNum}/${this.totalNum}`
		}
		return stateString;
	}
	previous(){
		let r=rhit.pi.substring(this.startIndex-11,this.startIndex-1);
		if(this.startIndex<10){
			r="3."+r;
		}
		console.log("previous",r);
		return r;
	}
}

rhit.searchPageManager=class{
	constructor(){
		document.querySelector("#max").innerHTML=`search in first ${rhit.max} digits`;
		document.querySelector("#numberPatternButton").addEventListener("click",()=>{
			const pattern=document.querySelector("#numberPattern").value;
			const index=rhit.pi.indexOf(pattern)+1;
			if(index==0){
				document.querySelector("#indexText").innerHTML="not found";
			}else{
				document.querySelector("#indexText").innerHTML=index;
			}
		});
		document.querySelector("#digitIndexButton").addEventListener("click",()=>{
			const index=document.querySelector("#digitIndex").value;
			if(index.includes("-")){
				const i=index.indexOf("-");
				const start=parseInt(index.substring(0,i));
				const end=parseInt(index.substring(i+1,index.length));
				console.log(i,start,end);
				if(start%1==0&&end%1==0){
					document.querySelector("#digitText").innerHTML=rhit.pi.substring(start-1,end);
				}
			}else{
				if(parseInt(index)%1==0){
					document.querySelector("#digitText").innerHTML=rhit.pi.charAt(parseInt(index)-1);
				}
			}
		});
	}
}

rhit.displayPageManager=class{
	constructor(){
		document.querySelector("#backspaceInput").value="100";
		document.querySelector("#spaceInput").value="10";
		document.querySelector("#firstIndexInput").value="1";
		document.querySelector("#lastIndexInput").value="1000";
		document.querySelector("#show").addEventListener("click",()=>{
			const line=document.querySelector("#backspaceInput").value;
			const length=document.querySelector("#spaceInput").value;
			const start=document.querySelector("#firstIndexInput").value;
			const end=document.querySelector("#lastIndexInput").value;
			const partialPi=rhit.pi.substring(start-1,end);
			console.log("show from",start,"to",end);
			if(line%1==0&&length%1==0&&start%1==0&&end%1==0){
				var displayPi="<div>";
				if(start<=1){
					displayPi+="3."
				}
				var c=0;
				for(let i=0;i<partialPi.length;i++){
					displayPi=displayPi+partialPi.charAt(i);
					c++;
					if((i+1)%line==0){
						displayPi+="</div><div>";
						c=0;
					}else if(c%length==0){
						displayPi+=" ";
						c=0;
					}
				}
				displayPi+="</div><div></div>";
				document.querySelector("#piDigits").innerHTML=displayPi;
			}
		});
	}
}

rhit.HistoryController=class{
	constructor(){
		console.log("construct history controller");
		rhit.historyManager.beginListening(this.updateList.bind(this));
	}
	_createCard(hist){
		console.log(hist);
		return htmlToElement(`<div class="mb-2 card">
        	<div class="card-body">
          		<h5 class="card-title">digit: ${hist.startIndex}-${hist.startIndex+hist.length}</h5>
          		<div class="text-muted">correct rate: ${hist.correct}/${hist.length}</div>
				  <div class="text-muted">${hist.comment}</div>
        	</div>
      	</div>`);
	}

	updateList() {
		const newList=htmlToElement("<div id='historyContainer'></div>");
		for(let i=0;i<rhit.historyManager.length;i++){
			const hist=rhit.historyManager.getHistoryAtIndex(i);
			const newCard=this._createCard(hist);
			newCard.onclick=(event)=>{
				console.log("click",hist.id);
				window.location.href=`/record.html?id=${hist.id}`;
			}
			newList.appendChild(newCard);
		}

		const oldList = document.querySelector("#historyContainer");
		oldList.removeAttribute("id");
		oldList.hidden = true;
		oldList.parentElement.appendChild(newList);
	}
}

rhit.history=class{
	constructor(id,digits,startIndex,length,correct,incorrects,comment){
		this.id=id;
		this.digits=digits;
		this.startIndex=startIndex;
		this.length=length;
		this.correct=correct;
		this.incorrects=incorrects;
		this.comment=comment;
	}
}

rhit.HistoryManager = class {
	constructor() {
	  this._uid=rhit.fbAuthManager.uid;
	  this._documentSnapshots = [];
	  this._ref = firebase.firestore().collection("History");
	  this._unsubscribe=null;
	}
	add(digits,startIndex,length,correct,incorrects) {
		console.log("add",digits,startIndex,length,correct,incorrects);
		this._ref.add({
			["author"]:rhit.fbAuthManager.uid,
			["digits"]:digits,
			["startIndex"]:startIndex,
			["length"]:length,
			["correct"]:correct,
			["incorrects"]:incorrects,
			["time"]: firebase.firestore.Timestamp.now(),
			["comment"]:""
		}).then(function (docRef) {
			console.log("Document added with ID: ", docRef.id);
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	beginListening(changeListener) {
		console.log("updated");
		let query=this._ref.orderBy("time","desc").limit(100);
		if(this._uid){
			query=query.where("author","==",this._uid);
		}
		this._unsubscribe=query.onSnapshot((querySnapshot) => {
			this._documentSnapshots=querySnapshot.docs;
			changeListener();  
		});
	}
	stopListening() {
		this._unsubscribe();
	}

	get length() {
		return this._documentSnapshots.length;
	}
	getHistoryAtIndex(index) {
		const docSnapshot=this._documentSnapshots[index];
		const hist=new rhit.history(
			docSnapshot.id,
			docSnapshot.get("digits"),
			docSnapshot.get("startIndex"),
			docSnapshot.get("length"),
			docSnapshot.get("correct"),
			docSnapshot.get("incorrects"),
			docSnapshot.get("comment")
		);
		return hist;
	}
}

rhit.RecordController=class{
	constructor(){
		document.querySelector("#update").onclick=()=>{
			console.log("update");
			const comment=document.querySelector("#comment").value;
			rhit.recordManager.update(comment);
		}
		document.querySelector("#explore").onclick=()=>{
			console.log("explore");
			window.location.href=`/recitePage.html?startindex=${rhit.recordManager.startIndex}&autocheck=false&input=${rhit.recordManager.digits}`;
		}
		document.querySelector("#delete").onclick=()=>{
			console.log("delete");
			rhit.recordManager.delete().then(()=>{
				console.log("delete successful");
				window.location.href=`/history.html`;
			}).catch((error) => {
				console.error("Error removing document: ", error);
			});
		}
		rhit.recordManager.beginListening(this.updateView.bind(this));
	}
	updateView(){
		document.querySelector("#digits").innerHTML="digits after decimal of "+rhit.recordManager.startIndex+"-"+(rhit.recordManager.startIndex+rhit.recordManager.length);
		document.querySelector("#input").innerHTML=rhit.recordManager.digits;
		document.querySelector("#correct").innerHTML="correct rate "+rhit.recordManager.correct+"/"+rhit.recordManager.length;
		if(rhit.recordManager.incorrects==0){
			document.querySelector("#incorrect").innerHTML="";
		}else{
			document.querySelector("#incorrect").innerHTML="incorrect digits "+rhit.recordManager.incorrects;
		}
		document.querySelector("#time").innerHTML="created at  "+rhit.recordManager.time.toDate();
		document.querySelector("#comment").value=rhit.recordManager.comment;
	}
}

rhit.RecordManager=class{
	constructor(id){
		this._ref = firebase.firestore().collection("History").doc(id);
		this._documentSnapshot={};
		this._unsubscribe=null;
	}
	beginListening(changeListener) {
		this._unsubscribe=this._ref.onSnapshot((doc)=>{
			if(doc.exists){
				console.log(doc.data());
				this._documentSnapshot=doc;
				changeListener();
			}else{
				console.log("no document");
			}
		});
	}
	stopListening() {
	  this._unsubscribe();
	}
	update(comment) {
		console.log("add comment",comment);
		this._ref.update({
			["comment"]: comment
		}).then(()=> {
			console.log("Document updated");
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	delete() {
		return this._ref.delete();
	}
	get author(){
		return this._documentSnapshot.get("author");
	}
	get startIndex(){
		return this._documentSnapshot.get("startIndex");
	}
	get length(){
		return this._documentSnapshot.get("length");
	}
	get digits(){
		return this._documentSnapshot.get("digits");
	}
	get incorrects(){
		return this._documentSnapshot.get("incorrects");
	}
	get correct(){
		return this._documentSnapshot.get("correct");
	}
	get time(){
		return this._documentSnapshot.get("time");
	}
	get comment(){
		return this._documentSnapshot.get("comment");
	}
}

rhit.MethodController=class{
	constructor(){
		console.log("construct method controller");
		document.querySelector("#submitAddMethod").onclick=()=>{
			console.log("add method");
			const startIndex=document.querySelector("#from").value;
			const endIndex=document.querySelector("#to").value;
			const comment=document.querySelector("#initialComment").value;
			const methodTypes=document.querySelectorAll('input[type="checkbox"]');
			var mt=[];
			for(let tag of methodTypes){
				if(tag.checked){
					mt.push(tag.value);
				}
			}
			document.querySelector("#from").value="";
			document.querySelector("#to").value="";
			document.querySelector("#initialComment").value="";
			document.querySelector("#tempDigitText").innerHTML="";
			console.log("add",startIndex,endIndex,comment,mt);
			rhit.methodManager.add(startIndex,endIndex,comment,mt);
		}
		document.querySelector("#digitButton").onclick=()=>{
			console.log("show digits");
			const startIndex=document.querySelector("#from").value;
			const endIndex=document.querySelector("#to").value;
			document.querySelector("#tempDigitText").innerHTML=rhit.pi.substring(startIndex-1,endIndex);
		}
		$("#addMethodDialog").on("shown.bs.modal", (event)=> {
			console.log("shown");
			var methodSelection="";
			for(let i=0;i<rhit.methodTypeManager.length;i++){
				methodSelection+=`<input type="checkbox" value="${rhit.methodTypeManager.getMethodTypeAtIndex(i).id}">${rhit.methodTypeManager.getMethodTypeAtIndex(i).name}`;
			}
			document.querySelector("#methodType").innerHTML=methodSelection;
		});
		rhit.methodManager.beginListening(this.updateList.bind(this));
		rhit.methodTypeManager.beginListening(this.updateList.bind(this));
	}
	_createCard(m){
		console.log(m);
		return htmlToElement(
			`<div class="mb-2 card">
				<div class="card-body">
				<h5 class="card-title" id="range">from ${m.startIndex} to ${m.endIndex}</h5>
				<div><span>${rhit.pi.substring(m.startIndex-1,m.endIndex)}</span>
					<button id="delete" type="button" class="float-right btn">
						<i class="material-icons">delete</i>
					</button>
				</div>
				<div>method used:</div>
				<button id="add" type="button" class="float-right btn">
					<i class="material-icons">edit</i>
				</button>
				<ul class="tag-area clearfix" id="methodUsedContainer"></ul>
				<div id="methodTypeSelect"></div>
				<div>comment:</div>
				<textarea id="comment" cols="80" rows="3">${m.comment}</textarea>
				</div>
				<button type="button" class="btn btn-secondary" id="updateComment">update</button>
			</div>`)
	}
	updateList(){
		const newList=htmlToElement("<div id='methodContainer'></div>");
		for(let i=0;i<rhit.methodManager.length;i++){
			const m=rhit.methodManager.getMethodAtIndex(i);
			const newCard=this._createCard(m);
			var tags="";
			console.log("ids of method type of it",m.methodType);
			for(let j=0;j<m.methodType.length;j++){
				const methodType=rhit.methodTypeManager.getMethodTypeById(m.methodType[j]);
				if(methodType){
					const methodTypeName=methodType.name;
					const methodTypeDescription=methodType.description;
					tags+=`<li class="tag">
					<a href="/methodType.html?id=${methodTypeName}Card" title="${methodTypeDescription}">${methodTypeName}</a>
					</li>`
				}
			}
			newCard.querySelector("#add").onclick=()=>{
				console.log("add new method");
				var methodSelection="";
				for(let i=0;i<rhit.methodTypeManager.length;i++){
					methodSelection+=`<input type="checkbox" value="${rhit.methodTypeManager.getMethodTypeAtIndex(i).id}">${rhit.methodTypeManager.getMethodTypeAtIndex(i).name}`;
				}
				methodSelection+=`<button id="confirmMT" type="button" class="btn">
					<i class="material-icons">done</i>
				</button>
				<button id="cancelMT" type="button" class="btn">
					<i class="material-icons">cancel</i>
				</button>`;
				newCard.querySelector("#methodTypeSelect").innerHTML=methodSelection;
				for(var tag of newCard.querySelectorAll('input[type="checkbox"]')){
					if(m.methodType.includes(tag.value)){
						tag.checked=true;
					}
				}
				newCard.querySelector("#confirmMT").onclick=()=>{
					console.log("confirm change");
					const methodTypes=newCard.querySelectorAll('input[type="checkbox"]');
					var mt=[];
					for(let tag of methodTypes){
						if(tag.checked){
							mt.push(tag.value);
						}
					}
					rhit.methodManager.updateMethodType(m.id,mt)
					newCard.querySelector("#methodTypeSelect").innerHTML="";
				}
				newCard.querySelector("#cancelMT").onclick=()=>{
					newCard.querySelector("#methodTypeSelect").innerHTML="";
				}
			}
			newCard.querySelector("#methodUsedContainer").innerHTML=tags;
			newCard.querySelector("#updateComment").onclick=()=>{
				const comment=newCard.querySelector("#comment").value;
				rhit.methodManager.update(m.id,comment);
			}
			newCard.querySelector("#delete").onclick=()=>{
				console.log("delete",m.id);
				rhit.methodManager.delete(m.id);
			}
			newList.appendChild(newCard);
		}

		const oldList = document.querySelector("#methodContainer");
		oldList.removeAttribute("id");
		oldList.hidden = true;
		oldList.parentElement.appendChild(newList);
	}
}

rhit.Method=class{
	constructor(id,startIndex,endIndex,comment,methodType){
		this.id=id;
		this.startIndex=startIndex;
		this.endIndex=endIndex;
		this.comment=comment;
		this.methodType=methodType;
	}
}

rhit.MethodManager=class{
	constructor() {
		this._uid=rhit.fbAuthManager.uid;
		this._documentSnapshots = [];
		this._ref = firebase.firestore().collection("Method");
		this._unsubscribe = null;
	}
	add(startIndex,endIndex,comment,methodType){
		this._ref.add({
			["author"]:rhit.fbAuthManager.uid,
			["startIndex"]:startIndex,
			["endIndex"]:endIndex,
			["comment"]:comment,
			["methodType"]:methodType
		}).then((docRef)=>{
			console.log("ID: ",docRef.id);
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	beginListening(changeListener) {
		console.log("updated");
		let query=this._ref.orderBy("startIndex").limit(100);
		if(this._uid){
			query=query.where("author","==",this._uid);
		}
		this._unsubscribe=query.onSnapshot((querySnapshot) => {
			this._documentSnapshots=querySnapshot.docs;
			changeListener();  
		});
	}
	stopListening() {
		this._unsubscribe();
	}
	update(id,comment) {
		console.log("add comment",comment);
		this._ref.doc(id).update({
			["comment"]: comment
		}).then(()=> {
			console.log("Document updated");
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	updateMethodType(id,methodType){
		this._ref.doc(id).update({
			["methodType"]:methodType
		}).then(()=> {
			console.log("Document updated");
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	delete(id) {
		console.log("delete: ",id);
		this._ref.doc(id).delete();
	}
	get length() {
		return this._documentSnapshots.length;
	}
	getMethodAtIndex(index){
		const docSnapshot=this._documentSnapshots[index];
		const m=new rhit.Method(
			docSnapshot.id,
			docSnapshot.get("startIndex"),
			docSnapshot.get("endIndex"),
			docSnapshot.get("comment"),
			docSnapshot.get("methodType")
		);
		return m;
	}
}

rhit.MethodTypeController=class{
	constructor(){
		document.querySelector("#submitAddMethodType").onclick=()=>{
			console.log("add method type");
			const name=document.querySelector("#methodName").value;
			const description=document.querySelector("#methodDescription").value;
			const comment=document.querySelector("#methodComment").value;
			document.querySelector("#methodName").value="";
			document.querySelector("#methodDescription").value="";
			document.querySelector("#methodComment").value="";
			rhit.methodTypeManager.add(name,description,comment);
		}
		rhit.methodTypeManager.beginListening(this.updateList.bind(this));
		
	}
	_createCard(mt){
		console.log(mt);
		return htmlToElement(`<div class="mb-2 card" id="${mt.name}Card">
        <div class="card-body">
		  <div></div>
          <h5 class="card-title"><span>${mt.name}</span>
            <button id="delete" type="button" class="float-right btn deleteButton">
              <i class="material-icons">delete</i>
            </button>
          </h5>
          <div>description:</div>
          <textarea id="description" cols="80" rows="3">${mt.description}</textarea>
          <div>comment:</div>
          <textarea id="comment" cols="80" rows="3">${mt.comment}</textarea>
        </div>
        <button type="button" class="btn btn-secondary" id="update">update</button>
      </div>`);
	}
	updateList(){
		const newList=htmlToElement("<div id='methodTypeContainer'></div>");
		for(let i=0;i<rhit.methodTypeManager.length;i++){
			const mt=rhit.methodTypeManager.getMethodTypeAtIndex(i);
			const newCard=this._createCard(mt);
			newCard.querySelector("#delete").onclick=(event)=>{
				console.log("delete",mt.id);
				rhit.methodTypeManager.delete(mt.id);
			}
			newCard.querySelector("#update").onclick=()=>{
				const description=newCard.querySelector("#description").value;
				const comment=newCard.querySelector("#comment").value;
				rhit.methodTypeManager.update(mt.id,description,comment);
			}
			newList.appendChild(newCard);

			
		}
		const oldList = document.querySelector("#methodTypeContainer");
		oldList.removeAttribute("id");
		oldList.hidden = true;
		oldList.parentElement.appendChild(newList);

		
		var links="";
		for(let i=0;i<rhit.methodTypeManager.length;i++){
			const mt=rhit.methodTypeManager.getMethodTypeAtIndex(i);
			links+=`<li>
			<a href="#${mt.name}Card">
				<span>${mt.name}</span>
			</a>
			</li>`;
		}
		const newIndex=htmlToElement("<div id='methodTypeContainer'></div>");
		document.querySelector("#indexContainer").innerHTML=links;
		oldList.removeAttribute("id");
		oldList.hidden = true;
		oldList.parentElement.appendChild(newList);


		const urlParams=new URLSearchParams(window.location.search);
		console.log("url param",urlParams.get("id"));
		
		console.log(document.querySelector("#methodTypeContainer").innerHTML);
		if(urlParams.get("id")){
			const id=urlParams.get("id");
			console.log("jump");
			window.location.hash=`#${urlParams.get("id")}`
		}
		window.scrollBy(0,-50);
	}
}

rhit.MethodType=class{
	constructor(id,name,description,comment){
		this.id=id;
		this.name=name;
		this.description=description;
		this.comment=comment;
	}
}

rhit.MethodTypeManager=class{
	constructor(){
		this._uid=rhit.fbAuthManager.uid;
		this._documentSnapshots = [];
		this._ref = firebase.firestore().collection("MethodType");
		this._unsubscribe = null;
	}
	add(name,description,comment){
		this._ref.add({
			["author"]:rhit.fbAuthManager.uid,
			["name"]:name,
			["description"]:description,
			["comment"]:comment
		}).then((docRef)=>{
			console.log("ID: ",docRef.id);
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	beginListening(changeListener) {
		console.log("updated");
		let query=this._ref.orderBy("name").limit(100);
		if(this._uid){
			query=query.where("author","==",this._uid);
		}
		this._unsubscribe=query.onSnapshot((querySnapshot) => {
			this._documentSnapshots=querySnapshot.docs;
			changeListener();  
		});
	}
	stopListening() {
		this._unsubscribe();
	}
	update(id,description,comment){
		this._ref.doc(id).update({
			["description"]:description,
			["comment"]: comment
		}).then(()=> {
			console.log("Document updated");
		}).catch(function (error) {
			console.error("Error adding document: ", error);
		});
	}
	delete(id) {
		console.log("delete: ",id);
		this._ref.doc(id).delete();
	}
	get length() {
		return this._documentSnapshots.length;
	}
	getMethodTypeAtIndex(index){
		const docSnapshot=this._documentSnapshots[index];
		const mt=new rhit.MethodType(
			docSnapshot.id,
			docSnapshot.get("name"),
			docSnapshot.get("description"),
			docSnapshot.get("comment")
		);
		return mt;
	}
	getMethodTypeById(id){
		for(var i=0;i<this.length;i++){
			console.log(this._documentSnapshots[i].id);
			if(this._documentSnapshots[i].id==id){
				return this.getMethodTypeAtIndex(i);
			}
		}
		return null;
	}
}

rhit.AlgorithmPageController=class{
	constructor(){
		document.querySelector("#Gauss-Legendre").onclick=()=>{
			window.location.href="/Gauss-Legendre.html";
		}
		document.querySelector("#Chudnovsky").onclick=()=>{
			window.location.href="/Chudnovsky.html";
		}
	}
}

rhit.GaussLegendreController=class{
	constructor(){
		this.n=0;
		this.a=1;
		this.b=1/Math.SQRT2;
		this.t=1/4;
		this.p=1;
		this.a1;
		this.b1;
		this.t1;
		this.p1;
		this.pi=(this.a+this.b)**2/(4*this.t);
		document.querySelector("#valueContainer").innerHTML+=`
			<div class="row justify-content-center">
				<div class="col">${this.n}</div>
				<div class="col">${this.a}</div>
				<div class="col">${this.b}</div>
				<div class="col">${this.t}</div>
				<div class="col">${this.p}</div>
				<div class="col">${this.pi}</div>
			</div>`;
		console.log(this.n,this.a,this.b,this.t,this.p,this.pi);
		document.querySelector("#step").onclick=()=>{
			this.n++;
			this.a1=(this.a+this.b)/2;
			this.b1=Math.sqrt(this.a*this.b);
			this.t1=this.t-this.p*(this.a1-this.a)**2
			this.p1=2*this.p;
			this.a=this.a1;
			this.b=this.b1;
			this.t=this.t1;
			this.p=this.p1;
			this.pi=(this.a+this.b)**2/(4*this.t);
			document.querySelector("#n").innerHTML=`n=${this.n}`;
			console.log(document.querySelector("#valueContainer"));
			console.log(this.n,this.a,this.b,this.t,this.p,this.pi);
			document.querySelector("#valueContainer").innerHTML+=`
			<div class="row justify-content-center">
				<div class="col">${this.n}</div>
				<div class="col">${this.a}</div>
				<div class="col">${this.b}</div>
				<div class="col">${this.t}</div>
				<div class="col">${this.p}</div>
				<div class="col">${this.pi}</div>
			</div>`;
		}
	}
}

rhit.ChudnovskyController=class{
	constructor(){
		this.q=0;
		this.c=426880*Math.sqrt(10005);
		this.l=13591409;
		this.x=1;
		this.m=1;
		this.l1;
		this.x1;
		this.m1;
		this.sum=this.m*this.l/this.x;
		this.pi=this.c/this.sum;
		document.querySelector("#valueContainer").innerHTML+=`
			<div class="row justify-content-center">
				<div class="col">${this.q}</div>
				<div class="col">${this.l}</div>
				<div class="col">${this.x}</div>
				<div class="col">${this.m}</div>
				<div class="col">${this.pi}</div>
			</div>`;
		console.log(this.q,this.c,this.l,this.x,this.m,this.pi);
		document.querySelector("#step").onclick=()=>{
			this.q++;
			this.l1=this.l+545140134;
			this.x1=this.x*(-262537412640768000);
			this.m1=this.m*((12*this.q-2)*(12*this.q-6)*(12*this.q-10)/this.q);
			this.sum+=(this.m1*this.l1/this.x1);
			this.l=this.l1;
			this.x=this.x1;
			this.m=this.m1;
			this.pi=this.c/this.sum;
			document.querySelector("#q").innerHTML=`q=${this.q}`;
			console.log(this.l,this.x,this.m,this.pi);
			document.querySelector("#valueContainer").innerHTML+=`
			<div class="row justify-content-center">
				<div class="col">${this.q}</div>
				<div class="col">${this.l}</div>
				<div class="col">${this.x}</div>
				<div class="col">${this.m}</div>
				<div class="col">${this.pi}</div>
			</div>`;
		}
	}
}

rhit.FbAuthManager = class {
	constructor() {
	  this._user = null;
	  console.log("new FbAuthManager");
	}
	beginListening(changeListener) {
		firebase.auth().onAuthStateChanged((user) => {
			this._user=user;
			changeListener();
		});
	}
	signIn() {
		Rosefire.signIn("594bbcc0-02fb-4d8e-b151-4d0809eb17e7", (err, rfUser) => {
			if (err) {
				console.log("Rosefire error!", err);
				return;
			}
			console.log("Rosefire success!", rfUser);

			firebase.auth().signInWithCustomToken(rfUser.token).catch((error) => {
				if (error.code === 'auth/invalid-custom-token') {
					console.log("The token you provided is not valid.");
				} else {
					console.log("signInWithCustomToken error", error.message);
				}
			});
		});

		
	}
	signOut() {
		firebase.auth().signOut().catch((error) => {
			console.log("signout error");
		});
	}
	get isSignedIn() {
		return !!this._user;
	}
	get uid() {
		return this._user.uid;
	}
}

rhit.checkForRedirects=function(){
	if(document.querySelector("#loginPage")&&rhit.fbAuthManager.isSignedIn){
		window.location.href="/menu.html";
	}
	if(!document.querySelector("#loginPage") && !rhit.fbAuthManager.isSignedIn){
		window.location.href="/";
	}
}

rhit.initializePage=function(){
	const urlParams=new URLSearchParams(window.location.search);
	if(document.querySelector("#loginPage")){
		console.log("login page");
		new rhit.LoginPageController();
		rhit.startFirebaseUI();
	}
	if(document.querySelector("#menu")){
		console.log("menu");
		new rhit.MenuController();
	}
	if(document.querySelector("#selectPage")){
		console.log("select page");
		new rhit.SelectPageController();
	}
	if(document.querySelector("#recitePage")){
		const startIndex=parseInt(urlParams.get("startindex"));
		const autocheck=urlParams.get("autocheck");
		const input=urlParams.get("input");
		console.log("recite page, variables",startIndex,autocheck);
		rhit.reciteManager=new rhit.ReciteManager(startIndex,autocheck,input);
	}
	if(document.querySelector("#searchPage")){
		console.log("search page");
		new rhit.searchPageManager();
	}
	if(document.querySelector("#displayPage")){
		console.log("display page");
		new rhit.displayPageManager();
	}
	if(document.querySelector("#aboutPage")){
		console.log("about page");
	}
	if(document.querySelector("#historyPage")){
		console.log("history page");
		rhit.historyManager=new rhit.HistoryManager();
		new rhit.HistoryController();
	}
	if(document.querySelector("#recordPage")){
		console.log("record page/single history");
		const id=urlParams.get("id");
		if(!id){
			window.location.href="/history.html";
		}
		rhit.recordManager=new rhit.RecordManager(id);
		new rhit.RecordController();
	}
	if(document.querySelector("#methodPage")){
		console.log("method page");
		rhit.methodTypeManager=new rhit.MethodTypeManager();
		rhit.methodManager=new rhit.MethodManager();
		new rhit.MethodController();
	}
	if(document.querySelector("#methodTypePage")){
		console.log("method type page");
		rhit.methodTypeManager=new rhit.MethodTypeManager();
		new rhit.MethodTypeController();
	}
	if(document.querySelector("#algorithmPage")){
		console.log("algorithm page");
		new rhit.AlgorithmPageController();
	}
	if(document.querySelector("#Gauss-LegendrePage")){
		new rhit.GaussLegendreController();
	}
	if(document.querySelector("#ChudnovskyPage")){
		new rhit.ChudnovskyController();
	}
}

rhit.main = function () {
	console.log("Ready");
	rhit.fbAuthManager=new rhit.FbAuthManager();
	rhit.fbAuthManager.beginListening(() => {
		console.log("signed in",rhit.fbAuthManager.isSignedIn);
		rhit.checkForRedirects();
		rhit.initializePage();
	});
};

rhit.startFirebaseUI=function(){
	var uiConfig = {
        signInSuccessUrl: '/menu.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
    };
	// Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
}

rhit.main();
