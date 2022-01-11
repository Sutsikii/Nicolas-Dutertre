

// les variables // 


var allchamp = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","ChoGath","Corki","Darius","Diana","Dr. Mundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","KaiSa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","KhaZix","Kindred","Kled","KogMaw","LeBlanc","Lee Sin","Leona","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu and Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Renekton","Rengar","Riven","Rumble","Ryze","Sejuani","Senna","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"]

var Top = ["Aatrox", "Akali", "Akshan", "Camille", "Cassiopeia", "Cho'Gath", "Darius", "Dr.Mundo", "Ekko", "Fiora", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jarvan", "Jax", "Jayce", "Kayle", "Kennen", "Kled", "Lee Sin", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Poppy", "Quinn", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sett", "Shen", "Shyvana", "Singed", "Sion", "Tamh Kench", "Teemo", "Trundle", "Tryndamere", "Udyr", "Urgot", "Vayne", "Viego", "Vladimir", "Volibear", "Wukong", "Yasuo", "Yone", "Yorick"]

var jungle = ["Amumu", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlestick", "Gragas", "Graves", "Hecarim", "Ivern", "Jarvan IV", "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lilia", "Maître Yi", "Nidalee", "Nocturne", "Nunu et Willump", "Olaf", "Poppy", "Qiyana", "Rammus", "Rek'Sai", "Rengar", "Sejuani", "Shaco", "Shyvana", "Skarner", "Taliyah", "Talon", "Trundle", "Udyr", "Vi", "Viego", "Volibear", "Warwick", "Xin Zhao", "Zac", "Zed"]

var mid  =  ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Azir", "Cassiopeia", "Corki", "Ekko", "Fizz", "Galio", "Heimerdinger", "Irelia", "Jayce", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malzahar", "Neeko", "Orianna", "Qiyana", "Ryze", "Sylas", "Syndra", "Talon", "Twisted Fate", "Veigar", "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Zoé"]

var adc = ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kai'sa", "Kalista", "Kog'maw", "Lucian", "Miss Fortune", "Samira", "Sivir", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Yasuo", "Ziggs"]

var support = ["Alistar", "Bard", "Blitzcrank", "Brand", "Braum", "Galio", "Janna", "Karma", "Leona", "Lulu", "Lux", "Maokai", "Morgana", "Nami", "Nautilus", "Pantheon", "Pyke", "Rakan", "Rell", "Senna", "Séraphine", "Sona", "Soraka", "Swain", "Taric", "Thresh", "Vel'koz", "Vex", "Xerath", "Yuumi", "Zilean", "Zyra"]

// Fonction // 

function getSelectValue(){
    var selectedValue = document.getElementById("lane-choice").value; 
    console.log(selectedValue);
    if (selectedValue == "top"){
        document.getElementById('validation').addEventListener("click", laValidation);
        function laValidation(){
        var randomTop = Math.floor(Math.random()*Top.length );
        var randomValueTop = Top[randomTop];
        var leChampion = randomValueTop;
        document.getElementById('champion-choisis').innerHTML = leChampion;
    }
    }
    else if (selectedValue == "support"){
        document.getElementById('validation').addEventListener("click", laValidation);
        function laValidation(){
        var randomSupport = Math.floor(Math.random()*support.length);
        var randomValueSupport = support[randomSupport];
        var leChampion = randomValueSupport;
        document.getElementById('champion-choisis').innerHTML = leChampion;
    }
    }
    else if (selectedValue == "adc"){
        document.getElementById('validation').addEventListener("click", laValidation);
        function laValidation(){
        var randomAdc = Math.floor(Math.random()*adc.length);
        var randomValueAdc = adc[randomAdc];
        var leChampion = randomValueAdc;
        document.getElementById('champion-choisis').innerHTML = leChampion;
    }
    }
    else if (selectedValue == "mid"){
        document.getElementById('validation').addEventListener("click", laValidation);
        function laValidation(){
        var randomMid = Math.floor(Math.random()*mid.length);
        var randomValueMid = mid[randomMid];
        var leChampion = randomValueMid;
        document.getElementById('champion-choisis').innerHTML = leChampion;
    }
    }
    else if (selectedValue == "jungle"){
        document.getElementById('validation').addEventListener("click", laValidation);
        function laValidation(){
    
        var randomJungle = Math.floor(Math.random()*jungle.length);
        var randomValueJungle = jungle[randomJungle];
        var leChampion = randomValueJungle;
        document.getElementById('champion-choisis').innerHTML = leChampion;
    }
    }
}