---
title: More Info
layout: page
description: Info and Links
bodyClass: page-about
---

1. **Q:** Do you have any other datasets that would be interesting to look at?  
   **A:** Here is an additional dataset to try.  Perhaps try with Nephele QIIME2 Deblur (16S) or BioBakery (WGS).

  - Shaffer, J. P. <i>et al.</i> (2022) <i>A comparison of six DNA extraction protocols for 16S, ITS, and shotgun metagenomic sequencing of microbial communities</i>. preprint. Microbiology. doi: [10.1101/2022.03.07.483343](https://doi.org/10.1101/2022.03.07.483343).

  - 8 extraction protocols and a variety of sample types – we will look at human fecal and saliva samples

| Type | Globus Link to FASTQ folder                                  | Mapping file                                                 | Nephele Results                                              |
   | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | 16S  | <a href="https://app.globus.org/file-manager?origin_id=f93d54fe-ac6d-4382-b174-2516b9e8795f&origin_path=%2Fqiita12201Human%2F" onclick='copyURI(event)'>Copy 16S globus link</a> | <a href="../download/mapping_singleend_16S_qiita_12201Human.txt" download>mapping_singleend_16S_qiita_12201Human.txt</a> | [49b79917c2d7](https://nephele.niaid.nih.gov/results/49b79917c2d7){:target="_blank"} |
   | WGS  | <a href="https://app.globus.org/file-manager?origin_id=4bcc17e6-1d3f-4367-990a-8833f79627ab&origin_path=%2F" onclick='copyURI(event)'>Copy WGS globus link</a>                                         | <a href="../download/extraction_test_mapping_file_wgs_subset.txt" download>extraction_test_mapping_file_wgs_subset.txt</a> |                                                              |  
{:class="table-big table-bordered table-dark-header"}

{:start="2"}
2. **Q:** If I have a biom file, but the metadata is incorrect?  How do I fix it before submitting to MicrobiomeDB?

   **A:** [Nephele's diversity downstream analysis pipeline](https://nephele.niaid.nih.gov/user_guide_pipes/#da_pipes) can modify the biom file's metadata based on the mapping file that you submit.  So, you can submit the corrected metadata in the mapping file, and it will replace the existing metadata in the biom file.


3. Come see the Nephele WGSA v2 pipeline poster on Saturday, June 11:
    <a href="../images/illustrations/poster_handout_adobe_small.pdf" title="click here to see the full sized image" target="_blank"><img src="../images/illustrations/poster_handout_small.png" alt="nephele poster EEB1107"  class="intro-image" style="max-width: 50%"/></a>

4. [Please fill out our survey!]({{ site.data.contact.survey_link  }})

5. [ASM Microbe Workshop description](https://www.abstractsonline.com/pp8/#!/10522/session/73)

6. [Register for Nephele & MicrobiomeDB accounts](../info/account)

