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
