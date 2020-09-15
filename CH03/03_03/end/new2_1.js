var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var hunora = {
    name: 'Hunora',
    weapon: 'swords',
    strength: 4,
    agility: 5
};
console.log(hunora);
var gojin = {
    name: 'Gojin',
    weapon: 'staff'
};
console.log(gojin);
var vreegKing = {
    size: 250,
    ocean: 'Pacific',
    snout: 'Big'
};
console.log(vreegKing);
var snout = vreegKing.snout, vreegQueen = __rest(vreegKing, ["snout"]);
vreegQueen.ocean = 'Atlantic';
console.log(vreegQueen);
var monsters = __assign({}, vreegKing, vreegQueen);
console.log(monsters);
// export default class GojinAdventures extends Component {
//     render() {
//         return (
//             <div> </div>
//         )
//     }
// } 
