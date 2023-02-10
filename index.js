const swears = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "wtf", "wth", "willy", "xrated", "xxx", "4R5E", "5H1T", "5HIT", "A55", "ANAL", "ANUS", "AR5E", "ARRSE", "ARSE", "ASS", "ASS-FUCKER", "ASSES", "ASSFUCKER", "ASSFUKKA", "ASSHOLE", "ASSHOLES", "ASSWHOLE", "A_S_S", "B!TCH", "B00BS", "B17CH", "B1TCH", "BALLBAG", "BALLS", "BALLSACK", "BASTARD", "BEASTIAL", "BEASTIALITY", "BELLEND", "BESTIAL", "BESTIALITY", "BI+CH", "BIATCH", "BITCH", "BITCHER", "BITCHERS", "BITCHES", "BITCHIN", "BITCHING", "BLOODY", "BLOW JOB", "BLOWJOB", "BLOWJOBS", "BOIOLAS", "BOLLOCK", "BOLLOK", "BONER", "BOOB", "BOOBS", "BOOOBS", "BOOOOBS", "BOOOOOBS", "BOOOOOOOBS", "BREASTS", "BUCETA", "BUGGER", "BUM", "BUNNY FUCKER", "BUTT", "BUTTHOLE", "BUTTMUCH", "BUTTPLUG", "C0CK", "C0CKSUCKER", "CARPET MUNCHER", "CAWK", "CHINK", "CIPA", "CL1T", "CLIT", "CLITORIS", "CLITS", "CNUT", "COCK", "COCK-SUCKER", "COCKFACE", "COCKHEAD", "COCKMUNCH", "COCKMUNCHER", "COCKS", "COCKSUCK", "COCKSUCKED", "COCKSUCKER", "COCKSUCKING", "COCKSUCKS", "COCKSUKA", "COCKSUKKA", "COK", "COKMUNCHER", "COKSUCKA", "COON", "COX", "CRAP", "CUM", "CUMMER", "CUMMING", "CUMS", "CUMSHOT", "CUNILINGUS", "CUNILLINGUS", "CUNNILINGUS", "CUNT", "CUNTLICK", "CUNTLICKER", "CUNTLICKING", "CUNTS", "CYALIS", "CYBERFUC", "CYBERFUCK", "CYBERFUCKED", "CYBERFUCKER", "CYBERFUCKERS", "CYBERFUCKING", "D1CK", "DAMN", "DICK", "DICKHEAD", "DILDO", "DILDOS", "DINK", "DINKS", "DIRSA", "DLCK", "DOG-FUCKER", "DOGGIN", "DOGGING", "DONKEYRIBBER", "DOOSH", "DUCHE", "DYKE", "EJACULATE", "EJACULATED", "EJACULATES", "EJACULATING", "EJACULATINGS", "EJACULATION", "EJAKULATE", "F U C K", "F U C K E R", "F4NNY", "FAG", "FAGGING", "FAGGITT", "FAGGOT", "FAGGS", "FAGOT", "FAGOTS", "FAGS", "FANNY", "FANNYFLAPS", "FANNYFUCKER", "FANYY", "FATASS", "FCUK", "FCUKER", "FCUKING", "FECK", "FECKER", "FELCHING", "FELLATE", "FELLATIO", "FINGERFUCK", "FINGERFUCKED", "FINGERFUCKER", "FINGERFUCKERS", "FINGERFUCKING", "FINGERFUCKS", "FISTFUCK", "FISTFUCKED", "FISTFUCKER", "FISTFUCKERS", "FISTFUCKING", "FISTFUCKINGS", "FISTFUCKS", "FLANGE", "FOOK", "FOOKER", "FUCK", "FUCKA", "FUCKED", "FUCKER", "FUCKERS", "FUCKHEAD", "FUCKHEADS", "FUCKIN", "FUCKING", "FUCKINGS", "FUCKINGSHITMOTHERFUCKER", "FUCKME", "FUCKS", "FUCKWHIT", "FUCKWIT", "FUDGE PACKER", "FUDGEPACKER", "FUK", "FUKER", "FUKKER", "FUKKIN", "FUKS", "FUKWHIT", "FUKWIT", "FUX", "FUX0R", "F_U_C_K", "GANGBANG", "GANGBANGED", "GANGBANGS", "GAYLORD", "GAYSEX", "GOATSE", "GOD-DAM", "GOD-DAMNED", "GODDAMN", "GODDAMNED", "HARDCORESEX", "HELL", "HESHE", "HOAR", "HOARE", "HOER", "HOMO", "HORE", "HORNIEST", "HORNY", "HOTSEX", "JACK-OFF", "JACKOFF", "JAP", "JERK-OFF", "JISM", "JIZ", "JIZM", "JIZZ", "KAWK", "KNOB", "KNOBEAD", "KNOBED", "KNOBEND", "KNOBHEAD", "KNOBJOCKY", "KNOBJOKEY", "KOCK", "KONDUM", "KONDUMS", "KUM", "KUMMER", "KUMMING", "KUMS", "KUNILINGUS", "L3I+CH", "L3ITCH", "LABIA", "LUST", "LUSTING", "M0F0", "M0FO", "M45TERBATE", "MA5TERB8", "MA5TERBATE", "MASOCHIST", "MASTER-BATE", "MASTERB8", "MASTERBAT*", "MASTERBAT3", "MASTERBATE", "MASTERBATION", "MASTERBATIONS", "MASTURBATE", "MO-FO", "MOF0", "MOFO", "MOTHAFUCK", "MOTHAFUCKA", "MOTHAFUCKAS", "MOTHAFUCKAZ", "MOTHAFUCKED", "MOTHAFUCKER", "MOTHAFUCKERS", "MOTHAFUCKIN", "MOTHAFUCKING", "MOTHAFUCKINGS", "MOTHAFUCKS", "MOTHER FUCKER", "MOTHERFUCK", "MOTHERFUCKED", "MOTHERFUCKER", "MOTHERFUCKERS", "MOTHERFUCKIN", "MOTHERFUCKING", "MOTHERFUCKINGS", "MOTHERFUCKKA", "MOTHERFUCKS", "MUFF", "MUTHA", "MUTHAFECKER", "MUTHAFUCKKER", "MUTHER", "MUTHERFUCKER", "N1GGA", "N1GGER", "NAZI", "NIGG3R", "NIGG4H", "NIGGA", "NIGGAH", "NIGGAS", "NIGGAZ", "NIGGER", "NIGGERS", "NOB", "NOB JOKEY", "NOBHEAD", "NOBJOCKY", "NOBJOKEY", "NUMBNUTS", "NUTSACK", "ORGASIM", "ORGASIMS", "ORGASM", "ORGASMS", "P0RN", "PAWN", "PECKER", "PENIS", "PENISFUCKER", "PHONESEX", "PHUCK", "PHUK", "PHUKED", "PHUKING", "PHUKKED", "PHUKKING", "PHUKS", "PHUQ", "PIGFUCKER", "PIMPIS", "PISS", "PISSED", "PISSER", "PISSERS", "PISSES", "PISSFLAPS", "PISSIN", "PISSING", "PISSOFF", "POOP", "PORN", "PORNO", "PORNOGRAPHY", "PORNOS", "PRICK", "PRICKS", "PRON", "PUBE", "PUSSE", "PUSSI", "PUSSIES", "PUSSY", "PUSSYS", "RECTUM", "RETARD", "RIMJAW", "RIMMING", "S HIT", "S.O.B.", "SADIST", "SCHLONG", "SCREWING", "SCROAT", "SCROTE", "SCROTUM", "SEMEN", "SEX", "SH!+", "SH!T", "SH1T", "SHAG", "SHAGGER", "SHAGGIN", "SHAGGING", "SHEMALE", "SHI+", "SHIT", "SHITDICK", "SHITE", "SHITED", "SHITEY", "SHITFUCK", "SHITFULL", "SHITHEAD", "SHITING", "SHITINGS", "SHITS", "SHITTED", "SHITTER", "SHITTERS", "SHITTING", "SHITTINGS", "SHITTY", "SKANK", "SLUT", "SLUTS", "SMEGMA", "SMUT", "SNATCH", "SON-OF-A-BITCH", "SPAC", "SPUNK", "S_H_I_T", "T1TT1E5", "T1TTIES", "TEETS", "TEEZ", "TESTICAL", "TESTICLE", "TIT", "TITFUCK", "TITS", "TITT", "TITTIE5", "TITTIEFUCKER", "TITTIES", "TITTYFUCK", "TITTYWANK", "TITWANK", "TOSSER", "TURD", "TW4T", "TWAT", "TWATHEAD", "TWATTY", "TWUNT", "TWUNTER", "V14GRA", "V1GRA", "VAGINA", "VIAGRA", "VULVA", "W00SE", "WANG", "WANK", "WANKER", "WANKY", "WHOAR", "WHORE", "WILLIES", "WTF", "WTH", "WILLY", "XRATED", "XXX",, "4R5e", "5H1t", "5HIt", "A55", "ANAL", "ANuS", "AR5e", "aRRse", "ARse", "Ass", "ASs-FuCKeR", "aSsES", "aSSFuCKEr", "ASsFUKKA", "aSSHoLe", "aSsHOLes", "AsswHolE", "a_s_S", "B!TCh", "b00BS", "b17Ch", "b1tCh", "bAllBaG", "bAlLS", "BALLsack", "BasTARd", "BEAStial", "bEASTIALiTy", "beLLEnD", "BEsTIaL", "BEsTIality", "Bi+ch", "biAtCH", "BiTCH", "bitChEr", "BiTChers", "bitches", "bItchin", "BitChIng", "blooDY", "bLOw jOb", "bloWJOB", "bLowjoBs", "BOIOlaS", "bOLLoCk", "BOllOk", "bonEr", "bOOb", "bOobS", "boOOBs", "BOOoobs", "BOOoOOBs", "BoOOooOOBs", "bREaSTS", "buCEtA", "BugGeR", "Bum", "BUnNY fUCkER", "butt", "BUttHOle", "bUTTMUCH", "butTplUg", "c0Ck", "C0CKSUckeR", "CarPet munCHEr", "cawk", "Chink", "cipA", "cL1T", "CLit", "clitoRIs", "CLitS", "CNut", "cOCK", "COCk-SuCkER", "cocKfacE", "CockhEad", "cockMuNCH", "COckMuncHer", "coCks", "CocKSucK", "coCKsucked", "COcKsuckEr", "CocKSuckINg", "CocksUcKs", "CocKSuKA", "CoCKSUkka", "cOK", "CokmUnchER", "CoKSUcka", "COon", "COx", "CraP", "CuM", "cumMer", "CUmmiNG", "cUMS", "CUMshOt", "CUNIlInGus", "CuNiLlINGUS", "cUNNILINGuS", "CUnT", "CUNtlICK", "CUnTlickEr", "CunTLicKiNG", "CUnTS", "cYALIS", "CYBERFuc", "cYberFUcK", "cybERfucKEd", "cYbeRfUCKER", "cYbErfucKERs", "cYbERFuckiNg", "d1CK", "dAMN", "dick", "DiCkHEad", "DIldO", "dIlDOs", "diNK", "diNKs", "DIRsA", "dLCk", "DOG-fUcKer", "DOgGIN", "DoGGINg", "DonkeYrIBBER", "dooSh", "dUchE", "DykE", "eJaCulATe", "ejaCuLATED", "ejAcUlATEs", "EJACuLATInG", "EjACUlaTiNgS", "eJaCULaTIon", "eJAKUlate", "f u C k", "F u C K e R", "F4nNy", "fAg", "faGgIng", "FAggitT", "fAgGOt", "FAggs", "fAgOT", "fAgoTs", "FAgS", "fAnNy", "FAnNyFLapS", "FaNnyFUcKEr", "FAnyy", "FatASs", "fCuK", "fcukER", "fcUKing", "FeCk", "fEcKEr", "FELCHiNG", "FeLLate", "felLaTio", "fINGerfucK", "FInGeRfuCkEd", "fINGErfuCker", "FINGErfuCkErS", "finGERFuckInG", "fINGErfuCkS", "fIStfUCk", "fisTfucKED", "FIStFuCKEr", "fIsTFuckErS", "FIstFUcking", "FIstFuckInGs", "fistFUCkS", "fLanGE", "fooK", "fOOker", "fUcK", "fUCka", "fUCkEd", "fUCKeR", "FuCkErS", "FUCkHEad", "fUCkhEADS", "FUcKIN", "FuCkiNG", "fUckINgs", "fucKiNGsHiTMotHERFucker", "fuCKMe", "fUcKS", "fuCkWhit", "fucKWIT", "fUdgE PACkEr", "fuDgepaCker", "FUk", "fuKer", "fUKKeR", "fUkKiN", "fUKs", "fuKwHIt", "FUkWiT", "FUX", "FuX0R", "F_u_C_k", "GANgBaNG", "GangBaNGEd", "GAnGBANGS", "GAYLOrd", "gaYseX", "goAtse", "gOD-dam", "goD-DamNEd", "gOddAMN", "GODDAMnEd", "HardCoREsEx", "HelL", "HEShE", "HoaR", "hoARe", "Hoer", "HomO", "hORE", "HORniEST", "HoRNY", "hOtSEx", "jacK-off", "JACkOFf", "JaP", "jerk-oFf", "jiSM", "JIZ", "jiZM", "jIZZ", "KAWK", "knOb", "kNOBeaD", "kNObEd", "KnOBEND", "KnObHEAd", "KnOBjOcKy", "KnOBJOKeY", "koCK", "kONdUM", "kOndumS", "Kum", "kUmMer", "kummING", "kUMS", "KUNilingUs", "L3I+Ch", "L3ITch", "lABIA", "lUSt", "LUstinG", "M0f0", "m0fo", "m45tErBATE", "Ma5tERB8", "mA5TerBaTe", "MasOchIST", "MastER-BatE", "MaSterb8", "MasteRBAT*", "MasTERBAT3", "MASTeRBAtE", "masterbATIoN", "masterbATiOnS", "MaStUrbate", "Mo-FO", "Mof0", "moFO", "MOtHAFUcK", "motHAfuckA", "mOthaFUcKAs", "mOthAfucKAZ", "moTHaFuckEd", "MOthafuckeR", "MOThAfuCkErs", "MOTHAfuCkIn", "MOThAFUCkIng", "MOThAfUCkINgS", "motHaFuckS", "mOtheR FuCKeR", "MOThErfUcK", "MotherfUCkEd", "mOtHerFUCkEr", "moThERFUCKers", "MotheRfUckIN", "MotheRFuCKInG", "MothERfUcKiNgs", "moTherFUCKkA", "MOTHERFUcKs", "MUFf", "muthA", "MuthAfeCKeR", "MutHaFuCkKer", "mUTHeR", "muTherFUCker", "n1Gga", "N1ggEr", "NAzI", "NIGG3r", "NiGG4h", "NiGgA", "NigGAH", "niGGas", "nIGGAz", "nigGER", "NiGgErs", "NOB", "nob JOKEY", "nObHeAd", "nObJOcky", "nOBjoKEy", "NuMBnuTs", "NutSaCK", "OrGAsiM", "orgASIMS", "OrgAsM", "ORGaSMS", "p0Rn", "pAWN", "pECkER", "peNIs", "pEniSfUcKEr", "pHonESeX", "pHUcK", "pHUK", "phuKeD", "pHukinG", "phukKEd", "pHuKKinG", "phUks", "PHuQ", "PIGfUCKEr", "pimpIS", "PiSs", "PiSsEd", "pisSER", "piSsERs", "PIsSeS", "PissflApS", "PIssIN", "PISsINg", "PisSoff", "PoOp", "pOrn", "PorNO", "poRnogRaPhY", "PORNOS", "PRiCk", "PrICKs", "PrON", "PUbE", "pusSe", "pUSsI", "pUsSiES", "PuSsY", "PUssYs", "rEcTum", "ReTard", "RImjAw", "RiMMInG", "S HiT", "s.o.b.", "SadISt", "SCHlONg", "scrEwiNG", "SCroAt", "sCRote", "scroTum", "SeMen", "seX", "SH!+", "Sh!T", "Sh1t", "SHag", "ShAgGEr", "ShaGGIN", "ShAGgiNg", "shemaLe", "sHi+", "sHIT", "sHItDIck", "SHIte", "shiTeD", "SHiTeY", "ShITFUCK", "shItfuLL", "shItHEad", "SHiTing", "ShItIngS", "SHiTS", "SHittEd", "ShitTeR", "ShitteRs", "sHiTTiNG", "sHItTings", "ShITTY", "sKaNk", "sLUt", "SlUTS", "smEgMA", "SMut", "snAtch", "SON-OF-A-bITcH", "SpaC", "SpUnK", "S_h_i_t", "T1tT1e5", "T1TtiEs", "TEEts", "Teez", "TeStiCal", "tEsticle", "Tit", "TitfuCk", "TIts", "TiTt", "tIttIE5", "tITtiEfuckER", "tITtIES", "TITTYfucK", "TIttYWank", "tITWAnK", "TossER", "turd", "tW4t", "TwAT", "TWaThEaD", "twAtty", "tWUnt", "TWUNtEr", "V14Gra", "v1gRA", "VagINA", "VIaGRa", "VUlVa", "W00Se", "wAng", "WanK", "WaNkeR", "waNkY", "WhOAr", "WhOrE", "wilLIEs", "wtF", "wth", "WiLLY", "XRated", "xXx",, "4r5E", "5h1T", "5hiT", "A55", "anaL", "ANus", "AR5e", "aRrsE", "arsE", "ASs", "ASS-FUCkeR", "asseS", "assFucker", "assFUKKA", "asshoLE", "asSHOles", "AsswHOlE", "a_S_s", "b!tCh", "B00BS", "b17CH", "b1tCh", "balLbAG", "bALls", "bAllsacK", "bAstarD", "beasTiAl", "BeAStiAlitY", "BeLLend", "besTiaL", "BesTIaliTY", "bI+Ch", "BIaTCH", "bitcH", "BItCHER", "bITCherS", "bitches", "bitChiN", "BitCHinG", "BLOODy", "BloW JOb", "blOWjOb", "BLoWjoBS", "boiolaS", "boLLock", "BolloK", "boNER", "bOOB", "BoOBS", "bOoObs", "bOOoOBS", "booOoobS", "BooOOOoobS", "BrEAStS", "BUCetA", "buGgEr", "buM", "buNNy fuCKEr", "Butt", "butthole", "ButtmUcH", "bUtTpLUG", "c0cK", "C0cksUcKEr", "CaRPET mUncHEr", "CAwk", "chinK", "CiPa", "cL1t", "cLIT", "CLitORis", "ClItS", "CnUt", "cOcK", "cOCK-SuCkeR", "COckfACE", "cocKheaD", "cockmUNCH", "COCkmunCHer", "cockS", "coCksuCk", "CoCkSUCKeD", "CoCKsUcker", "cocksuCKInG", "coCkSucKs", "CoCkSUka", "CoCkSukkA", "cOK", "coKmUNCHER", "COksUCka", "cOOn", "COX", "cRaP", "CUm", "cUmMeR", "Cumming", "CumS", "CUmshoT", "CuNiLIngUS", "CUNIlLinGus", "CUnNIlIngUS", "cUNT", "cUNTLicK", "CUntlIckeR", "cuNTLickInG", "cUNtS", "CyAlIs", "cYBerFuc", "cybeRfuCk", "CYBErFuCked", "CYBERfUCkEr", "cYbErFUCKeRS", "CybeRFuCKING", "D1ck", "dAMn", "DiCk", "DickheaD", "dildo", "DILDOS", "dINK", "diNKs", "dIrsa", "dLcK", "dOg-FuckeR", "dOggIn", "DOgginG", "dONkEyRIBBEr", "dOOSH", "DuCHe", "DYKE", "EjaCuLate", "EjaCuLatED", "ejacUlaTes", "eJAcULATiNg", "EjAcuLAtIngs", "ejaCuLaTioN", "ejakUlaTE", "F u c k", "F u c K E r", "f4NNY", "fAg", "FAggInG", "fAgGItt", "fAGGOt", "fAggS", "fagOt", "fAGots", "FaGs", "fAnnY", "fAnnYFLAps", "faNnYfUcKER", "fAnyy", "fAtAsS", "Fcuk", "FCuKER", "fcUkiNg", "feCk", "fECKER", "FElching", "FellaTe", "felLaTio", "FiNgerFUCK", "FINGerFUcKEd", "fIngeRFUCkeR", "fINGERFUCkeRs", "finGeRFUckiNg", "fIngerFucKS", "FistfuCk", "FIStfUCked", "fIsTFuCKeR", "FIStfucKers", "FISTfucKInG", "fiSTFUckiNGS", "FIStfUCKS", "FLANgE", "FOOk", "FookEr", "fUck", "fuCkA", "FUCkEd", "fuckER", "fuckErS", "fuCKheaD", "FuCkhEADs", "FuCkIN", "fuCkiNG", "FUcKIngs", "fUCkinGsHitMOtherFUCkeR", "fucKme", "fuCkS", "FuCkWHIT", "FuCKwiT", "FUdgE PaCKEr", "fUdgEPaCKeR", "FuK", "fUKEr", "fUKkeR", "FUkKIN", "FukS", "FUKWHIT", "fukWiT", "Fux", "fuX0r", "F_U_c_K", "gAngBaNG", "gangBANGeD", "gANgBANgs", "gaylOrD", "gAYSex", "goAtsE", "GoD-dAm", "god-DaMNED", "goddAmN", "gODDAMNeD", "HaRDcoreSex", "helL", "heshE", "hoar", "hOaRE", "HOER", "hoMO", "HORE", "HoRNiest", "hORny", "hoTSEX", "JacK-Off", "jacKOFF", "Jap", "jerK-ofF", "jism", "jIz", "JiZm", "jizZ", "KAWK", "KnOB", "KnObEad", "KnoBeD", "kNObeNd", "KNobheAd", "KnoBJoCKY", "kNobjOkeY", "Kock", "kONDuM", "konDUms", "kuM", "KUMMEr", "kUmMING", "KuMS", "kUNILiNguS", "l3I+cH", "L3ITCH", "LabIa", "LusT", "lustINg", "m0f0", "m0fO", "M45TeRbate", "Ma5TeRb8", "mA5terbaTE", "masOchIsT", "mAstEr-batE", "mAStERb8", "mastErBAT*", "MastErBaT3", "MaSTErbATE", "MastErBaTIOn", "mAsTERBAtioNs", "maStURBate", "Mo-FO", "mOf0", "mofO", "mOThaFuCk", "mOThAFUCka", "mOthAfuCKAS", "MoThafUCkaZ", "MoThafUCKEd", "Mothafucker", "MOTHaFUCKErs", "mOthaFuckIN", "MOtHAfUckINg", "motHAFUCKINGs", "MOthAFUCkS", "MotHER FucKeR", "MotheRFUCK", "mOtHErFuCkEd", "MOTHERfuCKER", "mothErfucKerS", "MothErFuCkin", "motherfuCKinG", "MoTHErfuCkINGs", "MOTHERfUCKka", "motHeRFuCKs", "muff", "MutHa", "mUtHAfeCker", "mUthAfuCkkER", "MUThEr", "MutHeRfUCkeR", "N1GGA", "N1GGeR", "NaZi", "nIgg3r", "NIgG4h", "niGGA", "NiGgah", "NigGAS", "nIggaZ", "niGGEr", "NIGGeRs", "nob", "nOB joKEy", "noBHEAd", "NobjOcKy", "noBJOkeY", "nUMBnUtS", "NUtsAcK", "OrgasIM", "orgasIMs", "ORgASm", "orgaSMS", "P0Rn", "pawN", "pECKer", "penis", "PeNiSFuCker", "pHOnESEx", "pHuck", "Phuk", "phuKED", "phuKInG", "PhUKkED", "phUkKinG", "Phuks", "phuQ", "pIgFucKEr", "pIMpiS", "PIsS", "PiSSed", "pisseR", "PiSSeRs", "PIssES", "PisSflApS", "pissIN", "PisSiNG", "PIssOFF", "poOp", "PORn", "porno", "PoRnogRAPhY", "PoRnOs", "pRICK", "pRiCKS", "PRON", "pube", "PUSse", "pusSi", "PuSsIEs", "PussY", "PussYS", "rECtum", "rEtARD", "riMJaW", "RIMminG", "s HiT", "S.O.B.", "SaDISt", "SchLOng", "sCREwIng", "scroAT", "Scrote", "sCROTUM", "sEmeN", "sEX", "sh!+", "Sh!T", "Sh1t", "ShAg", "sHaGGer", "shAGgiN", "shAGgINg", "sHEMaLe", "sHi+", "sHiT", "sHitDiCK", "ShITE", "SHiteD", "SHItey", "ShITFuCk", "sHItFULL", "shIThEad", "shItinG", "shItINgs", "ShiTS", "sHitteD", "shItTeR", "sHiTteRs", "SHITTING", "shITtInGs", "sHiTty", "skank", "sluT", "slUTS", "SmeGMA", "SMUt", "SnAtcH", "sOn-oF-A-BITch", "SpaC", "sPUNK", "s_h_i_t", "t1TT1E5", "T1TTies", "tEEts", "teEZ", "TEsTIcaL", "TeSTiClE", "TiT", "TiTFucK", "TiTs", "tItt", "TittIe5", "TiTTieFuCkeR", "TitTiES", "TiTTYfuCk", "TiTtYWANk", "titWank", "TOSSER", "tuRD", "Tw4T", "twAt", "TwAtHead", "twattY", "TWuNT", "TWUNtEr", "v14gRA", "V1Gra", "vagInA", "vIAgrA", "VulvA", "w00sE", "WanG", "waNK", "wANkER", "WanKy", "wHOaR", "wHoRE", "wilLiEs", "wTF", "wTh", "WiLlY", "XrAtEd", "XxX"]
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const Filter = require('swears');

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver)

const gamedirectory = path.join(__dirname, "html");
const vPass = "test"

app.use(express.static(gamedirectory));

httpserver.listen(3000);

var rooms = {};
var usernames = {};

io.on('connection', function(socket){

  socket.on("join", function(room, username){
    if (username != ""){
      let justUsernames = []
      let roomNames = []
      let usernameValid = true
      for (let val in rooms){
        roomNames.push(rooms[val])
      }
      for (let val in usernames){
        justUsernames.push(usernames[val])
      }
      if (justUsernames.includes(username) && roomNames[justUsernames.indexOf(username)] === room){
        usernameValid = false
        socket.emit("chatError", socket.id, "badUser")
      }
      
      if (usernameValid){
        rooms[socket.id] = room;
        usernames[socket.id] = username;
        socket.leaveAll();
        socket.join(room);
        io.in(room).emit("recieve", username + " has entered this room.");
        socket.emit("join", room);
      }
    }
  })

  socket.on("disconnecting", (reason) => {
    const room = rooms[socket.id]
    const username = usernames[socket.id]
    delete rooms[socket.id];
    delete usernames[socket.id];
    io.in(room).emit("recieve", username + " has left the room.");
  });

  socket.on("send", function(message){
    const d = new Date()
    let hour = d.getHours()
    let tD = "am"
    if(message.includes("swears") = true){
			message = "[MESSAGE CENSORED]"
		}
			
    io.in(rooms[socket.id]).emit("recieve", usernames[socket.id] + ": " + message);

    //I know that some of the if conditions are useless but I want to make sure everything is accounted for.
    if (hour === 0){
      hour = 12
      tD = "am"
    } else if (hour < 12){
      hour = hour
      tD = "am"
    } else if (hour === 12){
      hour = hour
      tD = "pm"
    } else if (hour > 12){
      hour = hour - 12
      tD = "pm"
    }
    console.log(usernames[socket.id] + ": " + message + ", Room: " + rooms[socket.id] + ", Timestamp: " + d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear() + " " + hour + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + " " + tD)
  })

  socket.on("broadcast", function(message){
    const d = new Date()
    let hour = d.getHours()
    let tD = "am"
    const filter = new Filter();
    const fMessage = filter.clean(message);
    io.emit("recieve", "Broadcasted From Room " + rooms[socket.id] + ": " + usernames[socket.id] + ": " + message);

    //I know that some of the if conditions are useless but I want to make sure everything is accounted for.
    if (hour === 0){
      hour = 12
      tD = "am"
    } else if (hour < 12){
      hour = hour
      tD = "am"
    } else if (hour === 12){
      hour = hour
      tD = "pm"
    } else if (hour > 12){
      hour = hour - 12
      tD = "pm"
    }
    console.log(usernames[socket.id] + ": " + message + ", Broadcasted from Room: " + rooms[socket.id] + ", Timestamp: " + d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear() + " " + hour + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + " " + tD)
  })

  socket.on("recieve", function(message){
    socket.emit("recieve", message);
  })

  socket.on("verify", function(pass){
    if (pass === vPass){
      socket.emit("vResp", "success")
    } else {
      socket.emit("vResp", "fail")
    }
  })

  socket.on("kickRequest", function(username){
    io.in(rooms[socket.id]).emit("kick", username)
  })

  socket.on("checkKick", function(username){
    if (username.split(" ")[0] == usernames[socket.id]){
      socket.leave(rooms[socket.id])
      socket.disconnect()
    }
  })
})
