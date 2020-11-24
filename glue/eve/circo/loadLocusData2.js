// Load EVE data from tab file 
var loadResult;
glue.inMode("module/cressTabularUtility", function() {
	loadResult = glue.tableToObjects(glue.command(["load-tabular", "tabular/eve/ecv-circo-side-data.tsv"]));
	// glue.log("INFO", "load result was:", loadResult);
});

_.each(loadResult, function(eveObj) {

    // glue.log("INFO", "eveObj was:", eveObj);

	glue.inMode("custom-table-row/locus_data/"+eveObj.sequenceID, function() {
	
		glue.command(["set", "field", "scaffold", eveObj.scaffold]);
		glue.command(["set", "field", "start_position", eveObj.extract_start]);
		glue.command(["set", "field", "end_position", eveObj.extract_end]);
		glue.command(["set", "field", "orientation", eveObj.orientation]);
		glue.command(["set", "field", "host_sci_name", eveObj.organism]);
	});

	glue.inMode("sequence/fasta-digs-circo-ecv/"+eveObj.sequenceID, function() {
	
		glue.command(["set", "field", "name", eveObj.sequenceID]);
		glue.command(["set", "field", "full_name", eveObj.sequenceID]);
		glue.command(["set", "field", "family", "Circoviridae"]);
		glue.command(["set", "field", "clade", "NK"]);
		glue.command(["set", "field", "genus", "Circovirus"]);
	});

});
