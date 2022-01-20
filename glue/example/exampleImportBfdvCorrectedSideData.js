var infiles = [ "tabular/virus/bfdv-data-updated.tsv" ];


// Get the sequence source mappings (i.e. which in ncbi-refseqs, ncbi-curated, etc)
var epvRefseqResultMap = {};
get_sequence_source_mappings(epvRefseqResultMap);


for(var i = 0; i < infiles.length; i++) {

	var infile = infiles[i];

	// Load EVE data from tab file 
	var loadResult;
	glue.inMode("module/cressTabularUtility", function() {
		loadResult = glue.tableToObjects(glue.command(["load-tabular", infile]));
		//glue.log("INFO", "load result was:", loadResult);
	});

	_.each(loadResult, function(isolateObj) {

        var sequenceID = isolateObj.sequenceID;
        var sourceName = epvRefseqResultMap[sequenceID];
		glue.log("INFO", "Entering sequence table data for isolate:", sequenceID, " from source '", sourceName, "'");
		glue.inMode("custom-table-row/isolate/"+sequenceID, function() {

        	var isolateUpdate = isolateObj.isolate_update;
       	    var isolate = isolateObj.isolate;
		    //glue.log("INFO", "FIELD: isolate_id:", isolateUpdate);	    
		    if (isolateUpdate != 'unchanged') {		    	
				glue.log("INFO", "Updating isolate_id field to:", isolate);
				glue.command(["set", "field", "isolate_id", isolate]);				
		    }

        	var countryUpdate = isolateObj.country_update;
        	var country = isolateObj.country;
		    //glue.log("INFO", "FIELD: country:", countryUpdate);	    
		    if (countryUpdate != 'unchanged') {		    	
				glue.log("INFO", "Updating country field to:", country);
				glue.command(["set", "field", "country", country]);				
		    }
		    
		    
        	var hostUpdated  = isolateObj.host_sci_name_update;
        	var host  = isolateObj.host_sci_name;
		    if (hostUpdated != 'unchanged') {		    	
				glue.log("INFO", "Updating host_sci_name field to:", host);
				glue.command(["set", "field", "host_sci_name", host]);				
		    }
		    
		    
		    
		    
		    

		});

	});

}



// Populate a map with sequenceID -> sourceName pairs
function get_sequence_source_mappings(epvRefseqResultMap) {

	var resultList = glue.tableToObjects(glue.command(["list","sequence","sequenceID","source.name"]));	
		
	_.each(resultList,function(resultObj){

		//glue.log("INFO", "This result is:", resultObj);
		var sequenceID = resultObj["sequenceID"];
		var sourceName = resultObj["source.name"];
		//var sourceName = ["ncbi-refseqs"];
		epvRefseqResultMap[sequenceID] = sourceName;

	});
	
}


