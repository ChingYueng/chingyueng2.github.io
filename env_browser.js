/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: 'http://localhost:8086', //'/influx',
  /** InfluxDB authorization token */
  token: 'vAgixsCL7Ba5mcXa_kOuLMDTinebx_JAhwVof2UnnoQ4XrdXYt32kUEtsEOkE07Tk1_SPFFhLlytxir59Ai7Cg==',
  /** InfluxDB organization */
  org: 'TestingOrgaisation',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: 'TestingBucket',

  /** The following properties are used ONLY in the onboarding example */
  /** InfluxDB user  */
  /**username: 'cc8916s',*/
  /** InfluxDB password  */
  /**password: 'Wqf6223ccy',*/
}
