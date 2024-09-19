create table if not exists adjnpct.individual_adolescent_adolescent_followup_cancel
(
    id                       integer,
    uuid                     text,
    is_voided                boolean,
    created_by_id            integer,
    last_modified_by_id      integer,
    created_date_time        timestamp with time zone,
    last_modified_date_time  timestamp with time zone,
    organisation_id          integer,
    name                     text,
    individual_id            integer,
    address_id               integer,
    earliest_visit_date_time timestamp with time zone,
    max_visit_date_time      timestamp with time zone,
    encounter_date_time      timestamp with time zone,
    encounter_location       point,
    cancel_date_time         timestamp with time zone,
    cancel_location          point,
    legacy_id                text,
    latest_approval_status   text,
    program_enrolment_id     integer,
    "Cancel Reason"          text,
    "Other Reason"           text,
    "Gender"                 text
);

alter table adjnpct.individual_adolescent_adolescent_followup_cancel
    owner to openchs;

create index if not exists "adjnpct_34458959-4e70-4530-8938-40115668ec2c_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (id);

create index if not exists "adjnpct_1b2cf6ee-da25-4e3b-918c-882c31d52c5c_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (uuid);

create index if not exists "adjnpct_f0b125f6-45ad-4cb6-9b36-1848adee1ff0_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (created_by_id);

create index if not exists "adjnpct_c841e814-f422-44cb-8e46-3de7b5bdb8f6_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (last_modified_by_id);

create index if not exists "adjnpct_e767623f-bd4b-4a86-96cf-ed0e4b7d4fd6_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (organisation_id);

create index if not exists "adjnpct_14ebb4a5-3231-4043-b67a-41183db407d8_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (individual_id);

create index if not exists "adjnpct_9678a8d6-a6ec-41b5-820d-75180e859550_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (address_id);

create index if not exists "adjnpct_44aad281-638c-4e92-878e-0cd89a3d8b16_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (encounter_date_time);

create index if not exists "adjnpct_27cad3db-3e9c-4810-82df-0b312c6a9121_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (cancel_date_time);

create index if not exists "adjnpct_6c5a6195-eb2d-452e-9f5e-98e89d32744d_idx"
    on adjnpct.individual_adolescent_adolescent_followup_cancel (program_enrolment_id);

grant delete, insert, references, select, trigger, truncate, update on adjnpct.individual_adolescent_adolescent_followup_cancel to adjnpct;

create table if not exists adjnpct.individual_adolescent_exit
(
    id                                  integer,
    uuid                                text,
    is_voided                           boolean,
    created_by_id                       integer,
    last_modified_by_id                 integer,
    created_date_time                   timestamp with time zone,
    last_modified_date_time             timestamp with time zone,
    organisation_id                     integer,
    individual_id                       integer,
    address_id                          integer,
    enrolment_date_time                 timestamp with time zone,
    program_exit_date_time              timestamp with time zone,
    enrolment_location                  point,
    exit_location                       point,
    legacy_id                           text,
    latest_approval_status              text,
    "Cause of death"                    text,
    "Please specify the Cause of death" text,
    "Reason for exit"                   text,
    "Date of death"                     date,
    "Gender"                            text
);

alter table adjnpct.individual_adolescent_exit
    owner to openchs;

create index if not exists "adjnpct_7e703194-f880-42b3-832f-9d9c17c43c3a_idx"
    on adjnpct.individual_adolescent_exit (id);

create index if not exists "adjnpct_6bd3ef5f-1da0-44dd-97ff-4b2eaf8809ac_idx"
    on adjnpct.individual_adolescent_exit (uuid);

create index if not exists "adjnpct_29ab8980-7cba-423e-a1cb-df8f7fc776ce_idx"
    on adjnpct.individual_adolescent_exit (created_by_id);

create index if not exists "adjnpct_3b4c0f76-6ee1-492d-b445-13a47f6c9b7a_idx"
    on adjnpct.individual_adolescent_exit (last_modified_by_id);

create index if not exists "adjnpct_b7bf99c2-692b-41ee-9ae7-32129dfa2d20_idx"
    on adjnpct.individual_adolescent_exit (organisation_id);

create index if not exists "adjnpct_689db860-df0c-4bff-9da3-a37df08de83b_idx"
    on adjnpct.individual_adolescent_exit (individual_id);

create index if not exists "adjnpct_19d0b008-537c-4423-9702-ef84f3c29325_idx"
    on adjnpct.individual_adolescent_exit (address_id);

create index if not exists "adjnpct_b8b8c81a-8e59-4f7b-a385-8504a1dde42d_idx"
    on adjnpct.individual_adolescent_exit (enrolment_date_time);

create index if not exists "adjnpct_13599d82-c306-4e8e-8b01-7d5e96536243_idx"
    on adjnpct.individual_adolescent_exit (program_exit_date_time);

grant delete, insert, references, select, trigger, truncate, update on adjnpct.individual_adolescent_exit to adjnpct;

create table if not exists adjnpct.individual_adolescent
(
    id                                                      integer,
    uuid                                                    text,
    is_voided                                               boolean,
    created_by_id                                           integer,
    last_modified_by_id                                     integer,
    created_date_time                                       timestamp with time zone,
    last_modified_date_time                                 timestamp with time zone,
    organisation_id                                         integer,
    individual_id                                           integer,
    address_id                                              integer,
    enrolment_date_time                                     timestamp with time zone,
    program_exit_date_time                                  timestamp with time zone,
    enrolment_location                                      point,
    exit_location                                           point,
    legacy_id                                               text,
    latest_approval_status                                  text,
    "From where is he/she going to the job?"                text,
    "What kind of job is he/she doing?"                     text,
    "Education of the Beneficiary"                          text,
    "Please specify the other Education of the Beneficiary" text,
    "Please specify the other activity he/she is doing"     text,
    "Which kind of activity he/she is doing?"               text,
    "From where he/she going to school?"                    text,
    "Where is he/she doing job?"                            text,
    "Studying where?"                                       text,
    "Gender"                                                text
);

alter table adjnpct.individual_adolescent
    owner to openchs;

create index if not exists "adjnpct_a61951f1-b9d3-4b9e-a947-79a041591a14_idx"
    on adjnpct.individual_adolescent (id);

create index if not exists "adjnpct_4f1a8b49-a81d-4828-aee9-92d0a9ba09f1_idx"
    on adjnpct.individual_adolescent (uuid);

create index if not exists "adjnpct_acca4223-997c-4284-8dd5-1e0cb2b7bafd_idx"
    on adjnpct.individual_adolescent (created_by_id);

create index if not exists "adjnpct_5532e7cb-c23e-45b1-a435-6cdc284417ed_idx"
    on adjnpct.individual_adolescent (last_modified_by_id);

create index if not exists "adjnpct_186e0036-e819-4022-ae64-f3b3cd5787b5_idx"
    on adjnpct.individual_adolescent (organisation_id);

create index if not exists "adjnpct_09447947-cd2f-4535-8ce5-3a17cddc5d86_idx"
    on adjnpct.individual_adolescent (individual_id);

create index if not exists "adjnpct_87902fae-a182-4dd1-9033-26f7e743c163_idx"
    on adjnpct.individual_adolescent (address_id);

create index if not exists "adjnpct_46782ee4-8d76-48f9-b267-60565da68eb8_idx"
    on adjnpct.individual_adolescent (enrolment_date_time);

create index if not exists "adjnpct_1004442f-3521-4b56-964d-d4886db89cd8_idx"
    on adjnpct.individual_adolescent (program_exit_date_time);

grant delete, insert, references, select, trigger, truncate, update on adjnpct.individual_adolescent to adjnpct;

create table if not exists adjnpct.individual
(
    id                                                  integer,
    uuid                                                text,
    is_voided                                           boolean,
    created_by_id                                       integer,
    last_modified_by_id                                 integer,
    created_date_time                                   timestamp with time zone,
    last_modified_date_time                             timestamp with time zone,
    organisation_id                                     integer,
    address_id                                          integer,
    registration_date                                   date,
    first_name                                          text,
    last_name                                           text,
    registration_location                               point,
    legacy_id                                           text,
    latest_approval_status                              text,
    middle_name                                         text,
    date_of_birth                                       date,
    date_of_birth_verified                              boolean,
    gender                                              text,
    "Aadhaar Card Available?"                           text,
    "Specially abled"                                   text,
    "Who is the decision making person in the family"   text,
    "PMJAY card"                                        text,
    "Please specify the other Long-term illness"        text,
    "Mobile number"                                     text,
    "Ration card"                                       text,
    "Any long-term illnesses"                           text,
    "Marital status"                                    text,
    "Is the mother of the beneficiary Alive?"           text,
    "Toilet facility present"                           text,
    "Please specify the other Source of drinking water" text,
    "Long-term illness"                                 text,
    "Mother's Education"                                text,
    "Source of drinking water"                          text,
    "Please specify the other Subcaste"                 text,
    "Is the father of the beneficiary alive?"           text,
    "Please specify the other Addiction"                text,
    "Occupation of father"                              text,
    "Very poor family"                                  text,
    "Please specify the other Occupation of father"     text,
    "Number of family members"                          numeric,
    "Caste"                                             text,
    "Subcaste"                                          text,
    "Please specify the other Occupation of mother"     text,
    "Specially abled - Please specify"                  text,
    "Using the toilet regularly"                        text,
    "Occupation of mother"                              text,
    "Please specify the other disability"               text,
    "Satipati family"                                   text,
    "Religion"                                          text,
    "Please specify the other Religion"                 text,
    "Gender"                                            text,
    "Addiction"                                         text,
    "Addiction - Please specify"                        text
);

alter table adjnpct.individual
    owner to openchs;

create index if not exists "adjnpct_5cefc37a-b99a-4a83-a7ad-ac00425820d7_idx"
    on adjnpct.individual (id);

create index if not exists "adjnpct_d794d69b-d285-4abd-9c8f-2b293fc985af_idx"
    on adjnpct.individual (uuid);

create index if not exists "adjnpct_5873b2ea-35b8-47e7-b723-97c98afc2513_idx"
    on adjnpct.individual (created_by_id);

create index if not exists "adjnpct_5920db27-272f-4484-940c-54c99972d266_idx"
    on adjnpct.individual (last_modified_by_id);

create index if not exists "adjnpct_0187b62c-8e31-45db-81db-a90a280e0bb3_idx"
    on adjnpct.individual (organisation_id);

create index if not exists "adjnpct_bbfa8780-fc69-4104-af74-672457c2b56a_idx"
    on adjnpct.individual (address_id);

create index if not exists "adjnpct_94fba5fd-3a75-44e4-9558-796a979be64c_idx"
    on adjnpct.individual (registration_date);

create index if not exists "adjnpct_0024d55c-4bc8-439b-ac18-1dceef72f6b2_idx"
    on adjnpct.individual (date_of_birth);

grant delete, insert, references, select, trigger, truncate, update on adjnpct.individual to adjnpct;

create table if not exists adjnpct.individual_adolescent_adolescent_followup
(
    id                                                               integer,
    uuid                                                             text,
    is_voided                                                        boolean,
    created_by_id                                                    integer,
    last_modified_by_id                                              integer,
    created_date_time                                                timestamp with time zone,
    last_modified_date_time                                          timestamp with time zone,
    organisation_id                                                  integer,
    name                                                             text,
    individual_id                                                    integer,
    address_id                                                       integer,
    earliest_visit_date_time                                         timestamp with time zone,
    max_visit_date_time                                              timestamp with time zone,
    encounter_date_time                                              timestamp with time zone,
    encounter_location                                               point,
    cancel_date_time                                                 timestamp with time zone,
    cancel_location                                                  point,
    legacy_id                                                        text,
    latest_approval_status                                           text,
    program_enrolment_id                                             integer,
    "Did a counseling about balanced diet happen?"                   text,
    "Height"                                                         numeric,
    "M.U.A.C"                                                        numeric,
    "If using home cloth, is she counselled about haza (1100966895)" text,
    "If yes, then what kind of treatment did you get?"               text,
    "If yes, then write the complaints"                              text,
    "Have menses started?"                                           text,
    "How many clothes do you change in day during menses?"           text,
    "Do you go to school during menses?"                             text,
    "illness details"                                                text,
    "Is he/she taking Albendazole tablet?"                           text,
    "Referred to which hospital?"                                    text,
    "Who gave the treatment?"                                        text,
    "Is he/she having any of the following symptoms?"                text,
    "Who gave the treatment"                                         text,
    "HB"                                                             numeric,
    "Nutritional status as per growth chart"                         text,
    "Where do you put these clothes up to the next menses?"          text,
    "Do you get sanitary pads from government?"                      text,
    "Do you have foul smelling menses?"                              text,
    "Do you have white discharge during menses?"                     text,
    "How do you clean the menstrual cloth?"                          text,
    "Do you have pain in hypogastrium during menses?"                text,
    "For how many days?"                                             numeric,
    "Didn’t need to be refer to a hospital but neede (2000915947)"   text,
    "Please specify, the other who gave treatment for illness"       text,
    "Is he/she taking Vitamin B complex tablets?"                    text,
    "Is he/she is taking Folic acid tablets?"                        text,
    "Is he/she is taking Vitamin B12 /Vitamin C tablets?"            text,
    "Is he/she is taking the iron tablet?"                           text,
    "Status of Anemia as per HB"                                     text,
    "Weight"                                                         numeric,
    "Is information about growth chart shared?"                      text,
    "Are you given information about menstrual hygiene?"             text,
    "Do you have any other complain during menses?"                  text,
    "Age at Menarche"                                                numeric,
    "If yes, then mention the date"                                  date,
    "Any kind of illness occurred since last visit?"                 text,
    "Is he/she taking too much cold drinks/ fast food?"              text,
    "If yes, then did you talk about the damage caused by it?"       text,
    "Does he/she has iron tablet with them?"                         text,
    "If Yes, then how frequently?"                                   text,
    "BMI"                                                            numeric,
    "What kind of clothes do you use during menses?"                 text,
    "Do you have regular menses?"                                    text,
    "Where do you dry the menstrual clothes after washing?"          text,
    "Has the adolescent received the tetanus vaccine?"               text,
    "Do girls get refreshment in Angandwadi?"                        text,
    "Do you eat refreshments?"                                       text,
    "Is he/she needs to be Referred?"                                text,
    "Referral Date"                                                  date,
    "Treated where?"                                                 text,
    "Please specify, the other who gave treatment for the symptoms"  text,
    "Received treatment?"                                            text,
    "Gender"                                                         text
);

alter table adjnpct.individual_adolescent_adolescent_followup
    owner to openchs;

create index if not exists "adjnpct_3a450159-5709-44c8-9a37-20e552cbe833_idx"
    on adjnpct.individual_adolescent_adolescent_followup (id);

create index if not exists "adjnpct_8859f15b-6893-4e1b-b3a7-c3bb1bff640b_idx"
    on adjnpct.individual_adolescent_adolescent_followup (uuid);

create index if not exists "adjnpct_c004eb88-f6af-4c7e-ba2b-e5904439f4a0_idx"
    on adjnpct.individual_adolescent_adolescent_followup (created_by_id);

create index if not exists "adjnpct_6555a7e8-898a-4846-a4ee-1ccb9fb34251_idx"
    on adjnpct.individual_adolescent_adolescent_followup (last_modified_by_id);

create index if not exists "adjnpct_0b12bc79-6b25-4248-8b80-aab31889ce31_idx"
    on adjnpct.individual_adolescent_adolescent_followup (organisation_id);

create index if not exists "adjnpct_b41d3f04-5182-44dd-bca4-b3d95ee19f6a_idx"
    on adjnpct.individual_adolescent_adolescent_followup (individual_id);

create index if not exists "adjnpct_fb3e651d-7d1b-4211-98f6-de0dadbfa7e9_idx"
    on adjnpct.individual_adolescent_adolescent_followup (address_id);

create index if not exists "adjnpct_cc5ca9d4-f309-47f6-8df6-7232ade66366_idx"
    on adjnpct.individual_adolescent_adolescent_followup (encounter_date_time);

create index if not exists "adjnpct_975ddba5-ba67-4f68-bc81-7d9bf7f58200_idx"
    on adjnpct.individual_adolescent_adolescent_followup (cancel_date_time);

create index if not exists "adjnpct_f4911546-6b47-4955-b666-946e8acce528_idx"
    on adjnpct.individual_adolescent_adolescent_followup (program_enrolment_id);

grant delete, insert, references, select, trigger, truncate, update on adjnpct.individual_adolescent_adolescent_followup to adjnpct;

create table if not exists adjnpct.address
(
    "Block"                 text,
    "PHC"                   text,
    "Subcentre"             text,
    "Village"               text,
    "Faliya"                text,
    gps_coordinates         point,
    "Block id"              integer,
    "PHC id"                integer,
    "Subcentre id"          integer,
    "Village id"            integer,
    "Faliya id"             integer,
    id                      integer,
    uuid                    text,
    is_voided               boolean,
    created_by_id           integer,
    last_modified_by_id     integer,
    created_date_time       timestamp with time zone,
    last_modified_date_time timestamp with time zone,
    organisation_id         integer
);

alter table adjnpct.address
    owner to openchs;

grant delete, insert, references, select, trigger, truncate, update on adjnpct.address to adjnpct;

create table if not exists adjnpct.media
(
    id                      serial,
    uuid                    text,
    is_voided               boolean,
    created_by_id           integer,
    last_modified_by_id     integer,
    created_date_time       timestamp with time zone,
    last_modified_date_time timestamp with time zone,
    organisation_id         integer,
    address_id              numeric,
    image_url               text,
    sync_parameter_key1     text,
    sync_parameter_value1   text,
    sync_parameter_key2     text,
    sync_parameter_value2   text,
    subject_type_name       text,
    encounter_type_name     text,
    program_name            text,
    concept_name            text,
    entity_id               integer,
    subject_first_name      text,
    subject_last_name       text,
    subject_middle_name     text
);

alter table adjnpct.media
    owner to openchs;

grant select, update, usage on sequence adjnpct.media_id_seq to adjnpct;

grant delete, insert, references, select, trigger, truncate, update on adjnpct.media to adjnpct;

create table if not exists adjnpct.sync_telemetry
(
    id                      serial,
    uuid                    text,
    is_voided               boolean,
    created_by_id           integer,
    last_modified_by_id     integer,
    created_date_time       timestamp with time zone,
    last_modified_date_time timestamp with time zone,
    organisation_id         integer,
    user_id                 integer,
    sync_status             text,
    sync_start_time         timestamp with time zone,
    sync_end_time           timestamp with time zone,
    device_name             text,
    android_version         text,
    app_version             text,
    device_info             text,
    sync_source             text,
    latest_approval_status  text
);

alter table adjnpct.sync_telemetry
    owner to openchs;

grant select, update, usage on sequence adjnpct.sync_telemetry_id_seq to adjnpct;

grant delete, insert, references, select, trigger, truncate, update on adjnpct.sync_telemetry to adjnpct;

create table if not exists adjnpct.users
(
    id                      integer,
    username                text,
    catchment_id            integer,
    email                   text,
    phone_number            text,
    name                    text,
    uuid                    text,
    is_voided               boolean,
    created_by_id           integer,
    last_modified_by_id     integer,
    created_date_time       timestamp with time zone,
    last_modified_date_time timestamp with time zone,
    organisation_id         integer
);

alter table adjnpct.users
    owner to openchs;

grant delete, insert, references, select, trigger, truncate, update on adjnpct.users to adjnpct;

create table if not exists adjnpct.media_analysis
(
    uuid                   text,
    image_url              text,
    is_valid_url           boolean,
    is_present_in_storage  boolean,
    is_thumbnail_generated boolean,
    is_having_duplicates   boolean
);

alter table adjnpct.media_analysis
    owner to openchs;

grant delete, insert, references, select, trigger, truncate, update on adjnpct.media_analysis to adjnpct;
