WITH adolescent_enrolment AS (
    SELECT
        i.id,
        i.date_of_birth,
        ae.enrolment_date_time,
        ae."From where he/she going to school?",
        ae.program_exit_date_time,
        ae."Reason for exit",
        i.gender,
        a.title AS block,
        a."Sector",
        a."Village/Hamlet" AS village,
        a."Faliya"
    FROM adjnpct.individual i
             JOIN adjnpct.individual_adolescent ae ON i.id = ae.individual_id
             JOIN adjnpct.address a ON i.address_id = a.id
    WHERE i.is_voided = false AND ae.is_voided = false
),
     adolescent_exit AS (
         SELECT
             id,
             program_exit_date_time,
             "Reason for exit"
         FROM adjnpct.individual_adolescent_exit
         WHERE is_voided = false
     )

SELECT
    COUNT(ae.id) AS "Total Adolescent Enrolment",
    COUNT(CASE WHEN EXTRACT(YEAR FROM AGE(ae.date_of_birth)) >= 19 THEN 1 END) AS "Completed 19 years",
    COUNT(CASE WHEN i."Marital Status" IN ('Married', 'Engaged') THEN 1 END) AS "Marriage/Engagement",
    COUNT(CASE WHEN ex."Reason for exit" = 'Death' THEN 1 END) AS "Death",
    COUNT(CASE WHEN ae."From where he/she going to school?" = 'Hostel' THEN 1 END) AS "Hostel",
    COUNT(CASE WHEN ae.program_exit_date_time IS NOT NULL THEN 1 END) AS "Exited"
FROM adolescent_enrolment ae
         LEFT JOIN adjnpct.individual i ON ae.id = i.id
         LEFT JOIN adolescent_exit ex ON ae.id = ex.id
WHERE
    {% if from_dttm is not none %}
    ae.enrolment_date_time >= '{{ from_dttm }}'
    {% endif %}
    {% if to_dttm is not none %}
  AND ae.enrolment_date_time < '{{ to_dttm }}'
    {% endif %}
    {% if gender is not none %}
  AND ae.gender = '{{ gender }}'
    {% endif %}
    {% if block is not none %}
  AND ae.block = '{{ block }}'
    {% endif %}
    {% if sector is not none %}
  AND ae."Sector" = '{{ sector }}'
    {% endif %}
    {% if village is not none %}
  AND ae.village = '{{ village }}'
    {% endif %}
    {% if faliya is not none %}
  AND ae."Faliya" = '{{ faliya }}'
    {% endif %}
    {% if age_range_start is not none and age_range_end is not none %}
  AND EXTRACT(YEAR FROM AGE(ae.date_of_birth)) BETWEEN {{ age_range_start }} AND {{ age_range_end }}
    {% endif %}
    {% if adolescent_stage is not none %}
  AND CASE
    WHEN EXTRACT(YEAR FROM AGE(ae.date_of_birth)) BETWEEN 10 AND 13 THEN 'Early Adolescence'
    WHEN EXTRACT(YEAR FROM AGE(ae.date_of_birth)) BETWEEN 14 AND 17 THEN 'Mid Adolescence'
    WHEN EXTRACT(YEAR FROM AGE(ae.date_of_birth)) BETWEEN 18 AND 19 THEN 'Late Adolescence'
END = '{{ adolescent_stage }}'
    {% endif %}
    {% if exited is not none %}
    AND (ae.program_exit_date_time IS NOT NULL) = {{ exited }}
    {% endif %}
    {% if marital_status is not none %}
    AND i."Marital Status" = '{{ marital_status }}'
    {% endif %}
