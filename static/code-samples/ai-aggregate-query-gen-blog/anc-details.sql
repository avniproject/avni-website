-- CSV:Requirements,,,,,,,,,,, ANC details,,,,,,,,,,, Sector,Registered in AWC,BP Measured,Ultrasound,Abdominal observation,PW Weight,Sugar test,HB test,Urine,,, Sectot A,3,2,2,2,2,2,2,,,, Sector B,4,3,3,3,3,3,3,,,, Sector C,5,5,5,5,5,5,5,,,, ,,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,, "Filter: Gender, Block, Age group, Type of village, high risk condition",,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,Chart 5: ANC details, ,,,,,,,"chart in %, table in number",,,,(in chart give above filter plus all table columns) ,,,,,,,,,,, ,,,,,,,,,,, ,,,,,,,,,,, Analysis,,,,,,,,,,, FIlter,"1. Type of Village PPK Village (Yes/No) PVTG Village (Yes/No) SAMPURNA Village (Yes/No) Geographically hard to reach village (Yes/No) 2. Project/Block (By default) 3. Age Range 4. High risk condition 5. Date Range (Filter based on the scheduled encounter) 6. Table Columns (BP Measured, Ultrasound Observation, Weight, Sugar Test, HB Test, Urine) - (Linelist only) 7. Exit Status 8. Sector",Bar Graph (Count & Percentages),,,,,,,,,"For Graph Requirements: https://ancodk.sharepoint.com/:x:/s/ajidjs/EcuB5xkNLndddjkxdtwbqcBwkBgdwrg5bP7p6uxuGkmqlmAA?rtime=2EjQ1qlp3Eg Refer ANC Details sheet from the above link" ,,,,,,,,,,, Dimensions,Concepts,"Data Sources (Form in Avni)","Value (Count, Mean , Percentage...)",Data Logic for Avni Developer,Comments,,,,,, Sector,,,,,,,,,,, ,,,,,,,,,,, Indicator name,"Data Sources (Form in Avni)","X axis (breakdown /series )","Y axis Value (Count, Mean , Percentage...)",Data Logic for Avni Developer,Linking of dashboard filter to indicator logic,"Doubts from Avni team","Clarifications from Client",,,Current Month records in linelist., Number of pregnancy registered in AWC.,"Form - Pregnancy Enrollment Concept - Is the beneficiary registered in AWC?",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of pregnant women eligible for ANC. If a month is selected in a filter, then show just for the that month.",,,,,,, No of PW weighed,"Form - ANC Concept - Weight of women",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women weighed and enrolled for pregnancy, based on the current month or selected month.",,,,,Latest,, No of PW tested for BP,"Form - ANC Program Encounter Concept - BP Measured",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women tested for BP and enrolled for pregnancy, based on the current month or selected month.",,,,,Latest,, No of PW tested for Hb,"Form - ANC Program Encounter Concept - HB",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women tested for BP and enrolled for pregnancy,  based on the current month or selected month.",,,,,Latest,, "No of PW tested for Glucose,","Form - ANC Program Encounter Concept - Sugar test",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women tested for Glucose and enrolled for pregnancy,  based on the current month or selected month.",,,,,Latest,, No of PW tested for urine,"Form - ANC Program Encounter Concept - Urine test",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women tested for Urine and enrolled for pregnancy,  based on the current month or selected month.",,,,,Latest,, No of PW abdominal observation/ultrasound,"Form - ANC Program Encounter Concept - Abdominal observation",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women with abdominal observation and enrolled for pregnancy,  based on the current month or selected month.",,,,,Latest,, No of PW ultrasound taken,"Form - ANC Program Encounter Concept - Abdominal observation",Sectorwise distribution of pregnant women.,Number of pregnant women.,"Total count of women whose ultrasound is taken and enrolled for pregnancy,  based on the current month or selected month.",,,,,Latest,, ,,,,,,,,,,, ,,,,,,,,,,, Fields to display in linelist,,,,,,,,,,, Column Name,Concept,,,,,,,,,, PII ,Data Source,Data Type,Logic/Comment,Estimate,,,,,,, Type of mother,Individual Registration,Text,,,,,,,,, Pregnancy Enrolment Date,,Text,,,,,,,,, Estimated Delivery Date,Pregnancy Enrollment ,Date,,,,,,,,, High Risk Condition,Pregnancy Enrollment ,Date,,,,,,,,, "Type of Village - PPK Village PVTG Village SAMPURNA Village Geographically hard to reach village",Reference Link: https://docs.google.com/spreadsheets/d/dfdfsdfMrFq7B8Kd_aqIeg72KW4j29PCI5zI/edit#gid=644314954,Text,,,,,,,,, Weight,,Text,,,,,,,,, BP,,Text,,,,,,,,, HB,,Text,,,,,,,,, Glucose,,Text,,,,,,,,, Urine,,Text,,,,,,,,, PW abdominal observation/ultrasound,,Text,,,,,,,,, Exit Status,,,,,,,,,,, ,,,,,,,,,,, Description,,,,,,,,,,, The ANC Detail Report is based on the registrations done at AWC and various observations taken of pregnant women.,,,,,,,,,,, "Linelist only filter will only impact the linelist and will not imapct the aggregate report and graph. Rest other filters will impact aggregate report, linelist and graph.",,,,,,,,,,, Date range filter is based on the ANC encounter date.,,,,,,,,,,, "Sectors are automatically populated when project or block filters are selected, but they can also be selected individually without selecting a project or block.",,,,,,,,,,, "Linelist displays data upto 200 records at once and can be paginated to next page. Linelist can be downloaded, to view all the records at once.",,,,,,,,,,, "The count of pregnant women who have exited the program can be determined using the exited filter. However, by default, the data reflects all the pregnant women who are in the program and who have exited the program. If Yes is selected in exited filter, then it will display only the exited pregnant women in both aggregate and linelist report and if No is selected, then it will display all the pregnant women which are currently enrolled in the program.",,,,,,,,,,,

-- Aggregate:
WITH anc_encounter AS (
    SELECT
        anc.individual_id,
        anc.program_enrolment_id,
        ROW_NUMBER() OVER (PARTITION BY anc.program_enrolment_id ORDER BY anc.encounter_date_time DESC NULLS LAST) AS visit_no,
        anc."Weight of women" AS "Weight",
        anc."BP measured",
        anc."BP Systolic Current Month",
        anc."BP Diastolic Current Month",
        anc."HB test",
        anc."HB",
        anc."Sugar test",
        anc."Sugar test (value)",
        anc."Urine test",
        anc."Abdominal observation" AS "Abdominal observation/Ultrasound"
    FROM apfodisha.individual_pregnancy_anc anc
    WHERE anc.is_voided = FALSE
      AND anc.encounter_date_time IS NOT NULL
        {% if from_dttm is not none %}
      AND anc.earliest_visit_date_time > '{{ from_dttm }}'
      {% endif %}
      {% if to_dttm is not none %}
      AND anc.earliest_visit_date_time < '{{ to_dttm }}'
      {% endif %}
)
SELECT
    i.id,
    CONCAT(i.first_name, ' ', i.last_name) AS "Full Name",
    i.date_of_birth AS "Dob",
    EXTRACT(YEAR FROM AGE(i.date_of_birth)) AS "Age",
    ip.enrolment_date_time AS "Pregnancy Enrolment Date",
    CASE
        WHEN ip."High risk condition" IS NULL THEN 'Normal Mother'
        ELSE 'High Risk Mother'
        END AS "Type of Mother",
    ip."Is the beneficiary registered in the AWC?",
    ip."Estimated date of delivery",
    ip."High risk condition" AS "High risk conditions",
    awc."Project/Block",
    awc."Sector",
    awc."AWC",
    village."Block",
    village."GP",
    village."Village/Hamlet",
    village."Geographically hard to reach village",
    village."PPK Village",
    village."PVTG Village",
    village."SAMPURNA Village",
    COUNT(i.id) OVER (PARTITION BY awc."Sector") AS total_count,
    CASE
        WHEN ip.program_exit_date_time IS NULL THEN 'No'
        ELSE 'Yes'
        END AS "Exit Status",
    anc.*
FROM apfodisha.individual_pregnancy ip
         JOIN apfodisha.individual i
              ON ip.individual_id = i.id
                  AND i.is_voided = FALSE
                  AND ip.is_voided = FALSE
         JOIN apfodisha.address village
              ON i.address_id = village.id
         JOIN public.group_subject gs
              ON gs.member_subject_id = i.id
                  AND gs.is_voided = FALSE
         JOIN apfodisha.household house
              ON gs.group_subject_id = house.id
                  AND house.is_voided = FALSE
         JOIN apfodisha.address awc
              ON awc.uuid = house."AWC Name"
                  AND awc.is_voided = FALSE
         LEFT JOIN anc_encounter anc
                   ON anc.program_enrolment_id = ip.id
                       AND anc.visit_no = 1
WHERE 1=1
    {% set my_list = filter_values('High risk condition') %}
  {% if my_list is not none and my_list|length > 0 %}
  {% set result = "'" ~ my_list|join(", ") ~ "'" %}
  AND ip."High risk condition" IN ({{ my_list|map('quote')|join(', ') }})
  {% endif %}


-- Linelist :
WITH anc_encounter AS (
    SELECT
        anc.individual_id,
        anc.program_enrolment_id,
        ROW_NUMBER() OVER (PARTITION BY anc.program_enrolment_id ORDER BY anc.encounter_date_time DESC NULLS LAST) AS visit_no,
        anc."Weight of women" AS "Weight",
        anc."BP measured",
        anc."BP Systolic Current Month",
        anc."BP Diastolic Current Month",
        anc."HB test",
        anc."HB",
        anc."Sugar test",
        anc."Sugar test (value)",
        anc."Urine test",
        anc."Abdominal observation" AS "Ultrasound taken"
    FROM apfodisha.individual_pregnancy_anc anc
    WHERE anc.is_voided = FALSE
      AND anc.encounter_date_time IS NOT NULL

)
SELECT
    i.id,
    CONCAT(i.first_name, ' ', i.last_name) AS "Full Name",
    i.date_of_birth AS "Dob",
    EXTRACT(YEAR FROM AGE(i.date_of_birth)) AS "Age",
    ip.enrolment_date_time AS "Pregnancy Enrolment Date",
    CASE
        WHEN ip."High risk condition" IS NULL THEN 'Normal Mother'
        ELSE 'High Risk Mother'
        END AS "Type of Mother",
    ip."Is the beneficiary registered in the AWC?",
    ip."Estimated date of delivery",
    ip."High risk condition" AS "High risk conditions",
    awc."Project/Block",
    awc."Sector",
    awc."AWC",
    village."Block",
    village."GP",
    village."Village/Hamlet",
    village."Geographically hard to reach village",
    village."PPK Village",
    village."PVTG Village",
    village."SAMPURNA Village",
    COUNT(i.id) OVER (PARTITION BY awc."Sector") AS total_count,
    CASE
        WHEN ip.program_exit_date_time IS NULL THEN 'No'
        ELSE 'Yes'
        END AS "Exit Status",
    anc.*
FROM apfodisha.individual_pregnancy ip
         JOIN apfodisha.individual i
              ON ip.individual_id = i.id
                  AND i.is_voided = FALSE
                  AND ip.is_voided = FALSE
         JOIN apfodisha.address village
              ON i.address_id = village.id
         JOIN public.group_subject gs
              ON gs.member_subject_id = i.id
                  AND gs.is_voided = FALSE
         JOIN apfodisha.household house
              ON gs.group_subject_id = house.id
                  AND house.is_voided = FALSE
         JOIN apfodisha.address awc
              ON awc.uuid = house."AWC Name"
                  AND awc.is_voided = FALSE
         LEFT JOIN anc_encounter anc
                   ON anc.program_enrolment_id = ip.id
                       AND anc.visit_no = 1
WHERE 1=1


