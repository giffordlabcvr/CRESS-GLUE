# CRESS-GLUE

## Overview

Welcome to CRESS-GLUE, a sequence-oriented resource for comparative genomic analysis of circular Rep-encoding single-stranded DNA (CRESS DNA) viruses (phylum Cressdnaviricota), developed using the [GLUE software framework](https://github.com/giffordlabcvr/gluetools).

**[GLUE](https://github.com/giffordlabcvr/gluetools)** is an open, integrated software toolkit designed for storing and interpreting sequence data. It supports the creation of bespoke projects, incorporating essential data items for comparative genomic analysis, such as sequences, multiple sequence alignments, genome feature annotations, and other associated data.

Projects are loaded into the GLUE "engine," forming a relational database that represents the semantic relationships between data items. This foundation supports systematic comparative analyses and the development of sequence-based resources.

**CRESS-GLUE** contains CRESS feature definitions, alignments, and reference sequences for all CRESS virus species.

This **CRESS-GLUE**  project can be extended with additional layers, openly available via GitHub, including:

  - **[CRESS-GLUE-EVE](https://github.com/giffordlabcvr/CRESS-GLUE-EVE)**: extends CRESS-GLUE through the incorporation of CRESS DNA virus-derived **endogenous viral elements (EVEs)**.

For more details, please see the **[User Guide](https://github.com/giffordlabcvr/CRESS-GLUE/wiki)**.

* * * * *

## Key Features


- **GLUE Framework Integration**: Built on the GLUE software framework, CRESS-GLUE offers an extensible platform for efficient, standardized, and reproducible computational genomic analysis of CRESS DNA viruses.

- **Phylogenetic Structure**: Sequence data in CRESS-GLUE is organized in a phylogenetically-structured manner, allowing users to explore evolutionary relationships easily.

- **Rich Annotations**: Annotated reference sequences enable rigorous comparative genomic analysis related to conservation, adaptation, structural context, and genotype-to-phenotype associations.
  
- **Reproducibility**: Ensures fully reproducible analyses through data standards and a relational database.
  
- **Reusable Data Objects**: High-value data items such as multiple sequence alignments are prepared once and reused.
  
- **Validation**: Enforces high data integrity through cross-validation.
  
- **Standardisation of Genomic Coordinates**: All sequences use the coordinate space of a chosen reference sequence.
  
- **Predefined Reference Sequences**: Includes fully-annotated reference sequences for CRESS species.
  
- **Alignment Trees**: Links alignments constructed at distinct taxonomic levels, maintaining a standardised coordinate system.

* * * * *

Installation
------------

To install CRESS-GLUE, follow the instructions provided in the **[User Guide](https://github.com/giffordlabcvr/CRESS-GLUE/wiki)**.

You can choose between:

-   **[Docker-based installation](https://github.com/giffordlabcvr/CRESS-GLUE/wiki/Docker-Installation)** for ease of deployment.
-   **[Native installation](https://github.com/giffordlabcvr/CRESS-GLUE/wiki/Native-Installation)** for traditional setup.

CRESS-GLUE can be installed as a prebuilt database for quick setup or constructed from scratch for more customization.

* * * * *

## Usage

For detailed instructions on how to use Parvovirus-GLUE for comparative genomic analysis, please see the **[User Guide](https://github.com/giffordlabcvr/CRESS-GLUE/wiki)**.

* * * * *

## Contributing

We welcome contributions from the community! If you're interested in contributing to CRESS-GLUE, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)

* * * * *

## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

* * * * *

## Contact

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/CRESS-GLUE/issues).

* * * * *
