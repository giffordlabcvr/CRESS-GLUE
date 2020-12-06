// list the EVE reference sequences
var listSeqResult = glue.command(["list", "sequence", "-w", "source.name = 'ncbi-curated-circo-bfdv'"]);

// extract from the result a list of sequence IDs.
var seqIds = glue.getTableColumn(listSeqResult, "sequenceID");

// for each sequence ID
_.each(seqIds, function(seqId) {

	glue.inMode("sequence/ncbi-curated-circo-bfdv/"+seqId, function() {
	
		glue.log("INFO", "Entering sequence table data for EVE reference:", seqId );

		glue.command(["set", "field", "full_name", "Beak and feather disease virus"]);
		glue.command(["set", "field", "family", "Circoviridae"]);
		glue.command(["set", "field", "genus", "Circovirus"]);
		glue.command(["set", "field", "clade", "Avian"]);

	});

});


