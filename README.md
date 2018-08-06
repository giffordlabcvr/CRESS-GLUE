# Circoviridae-GLUE

## Description

This is Circoviridae-GLUE: a GLUE project for the [circoviruses](https://viralzone.expasy.org/11?outline=all_by_species) (family Circoviridae ).

GLUE is an open source, data-centric bioinformatics environment specialised for developing virus genome data resources (VGDR).

Circoviruses are small, non-enveloped viruses with circular, single stranded DNA (ssDNA) genomes ~1.8 to ~2.1 kilobases (kb) in length. Circovirus genomes encode two major proteins: replication-associated protein (Rep) and capsid (Cap), responsible for genome replication and particle formation respectively. Transcription is bidirectional with the rep gene being encoded in the forward sense, and the cap gene being encoded in the complementary sense.

This GLUE project contains reference information for the circovirus family, including:

* A set of circovirus reference sequences linked to auxiliary data.
* A comprehensive list of circovirus genome features and their specific locations on full genome reference sequences.
* Alignments of circovirus reference sequences arranged hierarchically by clade.

Who can use this resource, and for what?

Circoviridae-GLUE can be used a straightforward data repository, with no requirement for use of the GLUE software framework.

In addition, however, the Circoviridae-GLUE project can be developed within the GLUE framework by extending the core dataset with new data and functionality. So far we have used Circoviridae-GLUE to develop the following GLUE extension projects.

[Circoviridae-EVE](https://giffordlabcvr.github.io/Circoviridae-EVE/) - a GLUE project for endogenous circoviral elements.


## Installation

You can install Circoviridae-GLUE on computers running Windows, MacOSX or Linux.

1. Install GLUE, based on the [GLUE installation instructions](http://tools.glue.cvr.ac.uk/#/installation). 
2. Once GLUE is installed and working, you should download Offline Circoviridae-GLUE and load it in to GLUE.
3. Clone the Circoviridae-GLUE repository into your `gluetools/projects` directory.
4. Within the `gluetools/projects/Circoviridae-GLUE` directory, start GLUE and build the Circoviridae-GLUE extension by issuing the following command in GLUE:

```
Mode path: /
GLUE> run file circoviridae.glue
```
5. This should run to completion and produce the `OK` result.


## Contributors

Robert J. Gifford (robert.gifford@glasgow.ac.uk)

Josh Singer (josh.singer@glasgow.ac.uk)

Tristan Dennis (t.dennis.1@research.gla.ac.uk)

William de Souza (wmarciel2@gmail.com)


## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)
