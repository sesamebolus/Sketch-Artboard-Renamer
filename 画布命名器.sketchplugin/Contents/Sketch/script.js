const sketch = require('sketch');
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers;

if(selectedLayers.layers[0].type == 'SymbolInstance') {
	targetSymbol = selectedLayers.layers[0];
	targetArtboard = selectedLayers.layers[1];
} else {
	targetSymbol = selectedLayers.layers[1];
	targetArtboard = selectedLayers.layers[0];
}

var symbol_to_artboard_with_number = function(context) {
	var newName = targetSymbol.overrides[0].value + '_'  + targetSymbol.overrides[1].value;
	console.log(newName);
	targetArtboard.name = newName;
}

var symbol_to_artboard_without_number = function(context) {
	var newName = targetSymbol.overrides[0].value;
	console.log(newName);
	targetArtboard.name = newName;
}

var artboard_to_symbol_with_number = function(context) {
	var newName = targetArtboard.name;
	console.log(newName);
	targetSymbol.overrides[1].value = newName;
}


var artboard_to_symbol_without_number = function(context) {
	var newName = targetArtboard.name;
	console.log(newName);
	targetSymbol.overrides[0].value = newName;
}