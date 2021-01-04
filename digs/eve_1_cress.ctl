Begin SCREENDB;
	db_name=eve_1_circo;
	mysql_server=localhost;
ENDBLOCK;

BEGIN SCREENSETS;
	query_aa_fasta=/home2/giff01r/DIGS/projects/eve/final_fasta/circo_probes.faa;
	#reference_aa_fasta=/home2/giff01r/DIGS/projects/eve/final_fasta/circo_refs.faa;
	reference_aa_fasta=/home2/giff01r/DIGS/projects/eve/NCBI_viruses_none-missing.faa;
	output_path=./tmp/;
	bitscore_min_tblastn=60;
	seq_length_minimum=40;
	defragment_range=10;
	consolidate_range=3000;
	blast_threads=8;
ENDBLOCK;

BEGIN TARGETS;
	Agnatha/
	Actinopterygii/
	Sarcopterygii/
	Chondrichthyes/
	Amphibia/
	Squamata/
	Crocodilia/
	Aves/
	Mammalia/
	Annelida/
	Ascidiacea/
	Arthropoda/
	Cnidaria/
	Ctenophora/
	Echinodermata/
	Hemichordata/
	Mollusca/
	Nematoda/
	Porifera/
	Priapulida/
	Rotifera/
	Tardigrada/
	Tunicata/
	Placozoa/
	Onychophora/
	Platyhelminthes_rg/
	Platyhelminthes/
	Xenacoelomorpha/
ENDBLOCK;

