interface Payment {
  sum: number,
  from: number,
  to: number
}

const enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface successPayload extends Payment {
  databaseId: number,
}

interface failPayload {
  errorMessage: string,
  errorCode: number
}

interface ResponseSuccess {
  status: PaymentStatus.SUCCESS,
  data: successPayload
}

interface ResponseFail {
  status: PaymentStatus.FAILED,
  data: failPayload
}

function isSuccessResponse(response: ResponseSuccess | ResponseFail): response is ResponseSuccess {
  return response.status === PaymentStatus.SUCCESS
}

function check(response: ResponseSuccess | ResponseFail): number {
  if (isSuccessResponse(response)) {
    return response.data.databaseId
  } else {
    throw new Error(response.data.errorMessage)
  }
}