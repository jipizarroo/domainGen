/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var sites = [];
  //function domain(pronoun, adj, noun) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        sites.push("www." + pronoun[i] + adj[x] + noun[y] + ".com");
        document.getElementById("oli").innerHTML = sites;
      }
    }
  }
  //}
  //console.log(domain(pronoun, adj, noun));
};
