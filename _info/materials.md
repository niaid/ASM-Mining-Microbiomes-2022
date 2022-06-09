---
hometitle: "2. Analyse Data"
title: "Materials"
layout: service
date: 2022-05-02T12:33:46+10:00
featured: true
weight: 1
split: "."
---

These are the materials, data, results etc we will use in the workshop.

## Datasets

| Type | Globus Link to FASTQ folder                              | Mapping file                                             | QC Results | Nephele Results | Biom |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ----------- | -------- | -------- |
| 16S      | <a href="https://app.globus.org/file-manager?origin_id=f93d54fe-ac6d-4382-b174-2516b9e8795f&origin_path=%2F" onclick='copyURI(event)'>Copy 16S globus link</a>                          | <a href="../../download/16S_bangladesh_short_40samples.txt" download>16S_bangladesh_short_40samples.txt</a> | [02f269e1c0da](https://nephele.niaid.nih.gov/results/02f269e1c0da){:target="_blank"} | [5dce63b4e486](https://nephele.niaid.nih.gov/results/5dce63b4e486){:target="_blank"} | [16s_bangladesh.biom](../../download/16s_bangladesh.biom) |
| WGS      | <a href="https://app.globus.org/file-manager?origin_id=92363c64-bb7b-4343-9503-90339e8330a0&origin_path=%2F" onclick='copyURI(event)'>Copy Globus link to hmp</a> | <a href="../../download/hmp_mapping_file.txt" title="8 sample hmp mapping file" download>hmp_mapping_file.txt</a> | [b48330f17142](https://nephele.niaid.nih.gov/results/b48330f17142){:target="_blank"} | [ee60339cb24b](https://nephele.niaid.nih.gov/results/ee60339cb24b){:target="_blank"} <br /> small size: [download](https://poorani-bcbb.s3.amazonaws.com/ASM-Mining-Microbiomes-2022/hmp_wgs_PipelineResults.ee60339cb24b_small.tar.gz) | [wgsa_hmp_8_sample.biom](../../download/wgsa_hmp_8_sample.biom) |
{:class="table-big table-bordered table-dark-header"}

- **16S:** 40 16S V4 amplicon samples from the [Bangladesh 5yr dataset on MicrobiomeDB](https://microbiomedb.org/mbio/app/record/dataset/DS_01668ecdbf).

  | TreatmentGroup | Month |  N |
  |:---------------|------:|---:|
  | infant         |    10 | 10 |
  | baby           |    20 | 10 |
  | toddler        |    30 | 10 |
  | five years     |    60 | 10 |
  {:class="table-bordered"}

  - [Output notes](../../info/pipeline_outputs/#dada2-16s)

    

<br />

- **WGS:** The shotgun metagenomics data are 8 samples from the [HMP phase I (WGS) dataset on MicrobiomeDB](https://microbiomedb.org/mbio/app/record/dataset/DS_0ebad58741).

  | TreatmentGroup | body_site                   | body_product | N |
  |:---------------|:----------------------------|:-------------|--:|
  | Oral swab      | Buccal mucosa               | Mucus        | 2 |
  | Stool          | Colon                       | Feces        | 2 |
  | Nostril swab   | Nares                       | Mucus        | 2 |
  | Skin swab      | Right retroauricular crease | Sebum        | 2 |  
  {:class="table-bordered"}

  - [Output notes](../../info/pipeline_outputs/#wgsa-v2)
