// This file is auto-generated by @hey-api/openapi-ts
import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";
import type {
  NextRunDatasetsUiNextRunDatasetsDagIdGetData,
  NextRunDatasetsUiNextRunDatasetsDagIdGetResponse,
  GetDagsPublicDagsGetData,
  GetDagsPublicDagsGetResponse,
  PatchDagPublicDagsDagIdPatchData,
  PatchDagPublicDagsDagIdPatchResponse,
} from "./types.gen";

export class DatasetService {
  /**
   * Next Run Datasets
   * @param data The data for the request.
   * @param data.dagId
   * @returns unknown Successful Response
   * @throws ApiError
   */
  public static nextRunDatasetsUiNextRunDatasetsDagIdGet(
    data: NextRunDatasetsUiNextRunDatasetsDagIdGetData,
  ): CancelablePromise<NextRunDatasetsUiNextRunDatasetsDagIdGetResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/ui/next_run_datasets/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }
}

export class DagService {
  /**
   * Get Dags
   * Get all DAGs.
   * @param data The data for the request.
   * @param data.limit
   * @param data.offset
   * @param data.tags
   * @param data.owners
   * @param data.dagIdPattern
   * @param data.dagDisplayNamePattern
   * @param data.onlyActive
   * @param data.paused
   * @param data.lastDagRunState
   * @param data.orderBy
   * @returns DAGCollectionResponse Successful Response
   * @throws ApiError
   */
  public static getDagsPublicDagsGet(
    data: GetDagsPublicDagsGetData = {},
  ): CancelablePromise<GetDagsPublicDagsGetResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/public/dags",
      query: {
        limit: data.limit,
        offset: data.offset,
        tags: data.tags,
        owners: data.owners,
        dag_id_pattern: data.dagIdPattern,
        dag_display_name_pattern: data.dagDisplayNamePattern,
        only_active: data.onlyActive,
        paused: data.paused,
        last_dag_run_state: data.lastDagRunState,
        order_by: data.orderBy,
      },
      errors: {
        422: "Validation Error",
      },
    });
  }

  /**
   * Patch Dag
   * Update the specific DAG.
   * @param data The data for the request.
   * @param data.dagId
   * @param data.requestBody
   * @param data.updateMask
   * @returns DAGResponse Successful Response
   * @throws ApiError
   */
  public static patchDagPublicDagsDagIdPatch(
    data: PatchDagPublicDagsDagIdPatchData,
  ): CancelablePromise<PatchDagPublicDagsDagIdPatchResponse> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/public/dags/{dag_id}",
      path: {
        dag_id: data.dagId,
      },
      query: {
        update_mask: data.updateMask,
      },
      body: data.requestBody,
      mediaType: "application/json",
      errors: {
        422: "Validation Error",
      },
    });
  }
}
