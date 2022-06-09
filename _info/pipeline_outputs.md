---
title: Nephele Pipeline Notes
layout: page
description: Notes on Nephele pipeline outputs
bodyClass: page-about
featured: false
---
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
## DADA2 16S

1. [Details page](https://nephele.niaid.nih.gov/details_dada2/)
2. Logfile has all the important messages.
3. Quality profiles: 
   - green is the mean quality score, orange are the quartiles
   - greyscale heat map
4. Next step is filtering and trimming.
   - Trimmed 10 bp from left of read, filtered reads with maxEE $$<= 5$$  (maximum "expected errors" where $$EE = \sum(10^{(-Q/10)})$$)
   - In the logfile, look for `reads.in` and `reads.out` table to see how many reads survived.
5. Learns the error rates - the default parameters of DADA2 were optimized for  Illumina data.  If you have other data types, consult the [DADA2 package help](https://benjjneb.github.io/dada2/index.html).  In Nephele, we also have the option for Ion Torrent data where we use [these parameters](https://benjjneb.github.io/dada2/faq.html#can-i-use-dada2-with-my-454-or-ion-torrent-data).
6. Dereplicate and run *dada* to denoise the reads. Then merge the pairs.  In Nephele, for efficiency, we follow the [Big Data workflow](https://benjjneb.github.io/dada2/bigdata.html) that processes each sample separately.
7. Filter sequences below 75bp (shorter sequences sometimes cause the pipeline to fail in the chimeral removal step).  Remove [chimeric sequences](https://drive5.com/usearch/manual/chimeras.html) using "consensus" method which identifies potential "bimeras" (these are chimeras that are made up of 2 sequences that don't belong together) in samples individually, and then uses a consensus "vote" over all samples to confirm.  How many reads survive? 
8. Produce final ASVs in *seq.fasta.*
9. Taxonomic assignment using rdp - k-mer based method with SILVA 132.  Species are assigned by *exact match only.*
10. Simple diversity analyses in graphs folder. Build tree with [QIIME2 align-to-tree-mafft-fasttree](https://docs.qiime2.org/2020.11/plugins/available/phylogeny/align-to-tree-mafft-fasttree/).  For more, see what you can do in MicrobiomeDB, and for more stats, see Nephele's [Downstream Analysis pipeline](https://nephele.niaid.nih.gov/user_guide_pipes/#da_pipes).

## WGSA v2

1. [Details page](https://nephele.niaid.nih.gov/details_wgsa/)
2. Main logfile is less helpful here.
3. TEDreads folder has fastp log files and decontamination (host read removal).  [How to read a Kraken2 report](https://github.com/DerrickWood/kraken2/wiki/Manual#sample-report-output-format).
4. TAXprofiles has taxonomic profiling of raw reads 
   - merged_tables
   - `merged_Counts+Lineage.txt` is the table used for the biom table submitted to MicrobiomeDB
   - diversity plots
5. asmbMetaSpades has assemblies and individual sample gene annotations
   - spades.log is easier to read than main log file
   - [AMRFinder](https://www.ncbi.nlm.nih.gov/pathogens/antimicrobial-resistance/) output - SRR060021_asmb (stool sample) has some AMR genes
     - [CARD](https://card.mcmaster.ca/home)
6. PWYprofiles has functional annotation of (metabolic) pathways
   - inferred using [MinPath](https://github.com/mgtools/MinPath) ([maximum parsimony to find the minimal set](https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1000465.g001) of pathways that explain the genes) and mapping of EC numbers (in _asmb/genes/annotations) to [MetaCyc pathways](https://metacyc.org/)
   - [BRENDA](https://www.brenda-enzymes.org/)











