// This file is auto-generated by @hey-api/openapi-ts

export const $DAGCollectionResponse = {
  properties: {
    dags: {
      items: {
        $ref: "#/components/schemas/DAGResponse",
      },
      type: "array",
      title: "Dags",
    },
    total_entries: {
      type: "integer",
      title: "Total Entries",
    },
  },
  type: "object",
  required: ["dags", "total_entries"],
  title: "DAGCollectionResponse",
  description: "DAG Collection serializer for responses.",
} as const;

export const $DAGPatchBody = {
  properties: {
    is_paused: {
      type: "boolean",
      title: "Is Paused",
    },
  },
  type: "object",
  required: ["is_paused"],
  title: "DAGPatchBody",
  description: "Dag Serializer for updatable body.",
} as const;

export const $DAGResponse = {
  properties: {
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
    dag_display_name: {
      type: "string",
      title: "Dag Display Name",
    },
    is_paused: {
      type: "boolean",
      title: "Is Paused",
    },
    is_active: {
      type: "boolean",
      title: "Is Active",
    },
    last_parsed_time: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Parsed Time",
    },
    last_pickled: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Pickled",
    },
    last_expired: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Expired",
    },
    scheduler_lock: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Scheduler Lock",
    },
    pickle_id: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Pickle Id",
    },
    default_view: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Default View",
    },
    fileloc: {
      type: "string",
      title: "Fileloc",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    timetable_summary: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Summary",
    },
    timetable_description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Description",
    },
    tags: {
      items: {
        $ref: "#/components/schemas/DagTagPydantic",
      },
      type: "array",
      title: "Tags",
    },
    max_active_tasks: {
      type: "integer",
      title: "Max Active Tasks",
    },
    max_active_runs: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Max Active Runs",
    },
    max_consecutive_failed_dag_runs: {
      type: "integer",
      title: "Max Consecutive Failed Dag Runs",
    },
    has_task_concurrency_limits: {
      type: "boolean",
      title: "Has Task Concurrency Limits",
    },
    has_import_errors: {
      type: "boolean",
      title: "Has Import Errors",
    },
    next_dagrun: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun",
    },
    next_dagrun_data_interval_start: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval Start",
    },
    next_dagrun_data_interval_end: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval End",
    },
    next_dagrun_create_after: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Create After",
    },
    owners: {
      items: {
        type: "string",
      },
      type: "array",
      title: "Owners",
    },
    file_token: {
      type: "string",
      title: "File Token",
      description: "Return file token.",
      readOnly: true,
    },
  },
  type: "object",
  required: [
    "dag_id",
    "dag_display_name",
    "is_paused",
    "is_active",
    "last_parsed_time",
    "last_pickled",
    "last_expired",
    "scheduler_lock",
    "pickle_id",
    "default_view",
    "fileloc",
    "description",
    "timetable_summary",
    "timetable_description",
    "tags",
    "max_active_tasks",
    "max_active_runs",
    "max_consecutive_failed_dag_runs",
    "has_task_concurrency_limits",
    "has_import_errors",
    "next_dagrun",
    "next_dagrun_data_interval_start",
    "next_dagrun_data_interval_end",
    "next_dagrun_create_after",
    "owners",
    "file_token",
  ],
  title: "DAGResponse",
  description: "DAG serializer for responses.",
} as const;

export const $DagRunState = {
  type: "string",
  enum: ["queued", "running", "success", "failed"],
  title: "DagRunState",
  description: `All possible states that a DagRun can be in.

These are "shared" with TaskInstanceState in some parts of the code,
so please ensure that their values always match the ones with the
same name in TaskInstanceState.`,
} as const;

export const $DagTagPydantic = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
  },
  type: "object",
  required: ["name", "dag_id"],
  title: "DagTagPydantic",
  description:
    "Serializable representation of the DagTag ORM SqlAlchemyModel used by internal API.",
} as const;

export const $HTTPValidationError = {
  properties: {
    detail: {
      items: {
        $ref: "#/components/schemas/ValidationError",
      },
      type: "array",
      title: "Detail",
    },
  },
  type: "object",
  title: "HTTPValidationError",
} as const;

export const $ValidationError = {
  properties: {
    loc: {
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "integer",
          },
        ],
      },
      type: "array",
      title: "Location",
    },
    msg: {
      type: "string",
      title: "Message",
    },
    type: {
      type: "string",
      title: "Error Type",
    },
  },
  type: "object",
  required: ["loc", "msg", "type"],
  title: "ValidationError",
} as const;
