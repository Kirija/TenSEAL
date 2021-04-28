window.BENCHMARK_DATA = {
  "lastUpdate": 1619633564201,
  "repoUrl": "https://github.com/OpenMined/TenSEAL",
  "entries": {
    "Python-Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "a4ccaaddd93460c404d6f55651b46ed6a6f89dc2",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/a4ccaaddd93460c404d6f55651b46ed6a6f89dc2"
        },
        "date": 1619591724524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.175606880979702,
            "unit": "iter/sec",
            "range": "stddev: 0.0380990806818788",
            "extra": "mean: 850.6244869599959 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 102.34098787437016,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841213433252199",
            "extra": "mean: 9.771256079993691 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 4.415092752415025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986260099905226",
            "extra": "mean: 226.49580792000506 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 127.66326768493684,
            "unit": "iter/sec",
            "range": "stddev: 0.00009810094612679351",
            "extra": "mean: 7.833106719999705 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.47405387864507914,
            "unit": "iter/sec",
            "range": "stddev: 0.07279315891288224",
            "extra": "mean: 2.1094648626399977 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 280.47700117803197,
            "unit": "iter/sec",
            "range": "stddev: 0.00010668119643284509",
            "extra": "mean: 3.5653547199945024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 4.681059315274635,
            "unit": "iter/sec",
            "range": "stddev: 0.0019208475521162534",
            "extra": "mean: 213.62685936000162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.39735413866443176,
            "unit": "iter/sec",
            "range": "stddev: 0.0608718557467081",
            "extra": "mean: 2.51664674579999 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 7557.108692355562,
            "unit": "iter/sec",
            "range": "stddev: 0.000010979050833215425",
            "extra": "mean: 132.32574000312525 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 52.72175406903807,
            "unit": "iter/sec",
            "range": "stddev: 0.00019794048953973386",
            "extra": "mean: 18.967502460000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 7700.9742502381805,
            "unit": "iter/sec",
            "range": "stddev: 0.000005239277812468991",
            "extra": "mean: 129.85370000023977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 53.230789313671636,
            "unit": "iter/sec",
            "range": "stddev: 0.00016396044636967066",
            "extra": "mean: 18.786120080003457 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 7626.8493776075975,
            "unit": "iter/sec",
            "range": "stddev: 0.000007097215762602499",
            "extra": "mean: 131.11573999822212 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 52.71386106738817,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859090220791586",
            "extra": "mean: 18.97034251999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 7557.794073624866,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031106182710762",
            "extra": "mean: 132.3137399958796 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 52.97489721137412,
            "unit": "iter/sec",
            "range": "stddev: 0.00016586505985844832",
            "extra": "mean: 18.876865320000885 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3751.676530444723,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100374413320284",
            "extra": "mean: 266.54750000034255 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 26.417623921819086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002754580926477401",
            "extra": "mean: 37.853517899998224 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 16171.071827855165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036179652589512132",
            "extra": "mean: 61.838820001867134 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 270.2737370790892,
            "unit": "iter/sec",
            "range": "stddev: 0.000024240225112307774",
            "extra": "mean: 3.6999525399960476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 20533.61948981636,
            "unit": "iter/sec",
            "range": "stddev: 0.000003855501264640142",
            "extra": "mean: 48.70062000009057 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 286.76501567296077,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592024942709808",
            "extra": "mean: 3.4871757199994136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 14822.091912884911,
            "unit": "iter/sec",
            "range": "stddev: 0.000003432397066397542",
            "extra": "mean: 67.46686000042246 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 59.303148579455424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453112006294829",
            "extra": "mean: 16.862511080000786 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 113.09233910775744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279245839240472",
            "extra": "mean: 8.842331920000106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 16205.138908552248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035474468436247286",
            "extra": "mean: 61.708820001058484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 270.0786939634744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002666765169331157",
            "extra": "mean: 3.702624539998851 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 19315.21385943424,
            "unit": "iter/sec",
            "range": "stddev: 0.000010229037815771019",
            "extra": "mean: 51.77266000146119 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 282.270869824861,
            "unit": "iter/sec",
            "range": "stddev: 0.000023205062307113654",
            "extra": "mean: 3.5426964200041766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 14375.061452975602,
            "unit": "iter/sec",
            "range": "stddev: 0.000003860458494952696",
            "extra": "mean: 69.56492000199432 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 49.13093555671769,
            "unit": "iter/sec",
            "range": "stddev: 0.00019539928964632314",
            "extra": "mean: 20.35377484000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 112.68224770382626,
            "unit": "iter/sec",
            "range": "stddev: 0.00006180013072116707",
            "extra": "mean: 8.874512359998334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 15814.06705499728,
            "unit": "iter/sec",
            "range": "stddev: 0.000004019577291797257",
            "extra": "mean: 63.234840001769044 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 270.5863106930276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003074346371624345",
            "extra": "mean: 3.6956784600033643 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 21289.904200244753,
            "unit": "iter/sec",
            "range": "stddev: 0.000004187301274986009",
            "extra": "mean: 46.970619998774055 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 281.3295144465344,
            "unit": "iter/sec",
            "range": "stddev: 0.000027381912716518762",
            "extra": "mean: 3.5545506199991905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 14702.228417307146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041888616632069905",
            "extra": "mean: 68.01689999747396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 42.07007390585679,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463955435834107",
            "extra": "mean: 23.769865539998136 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 112.50876398268164,
            "unit": "iter/sec",
            "range": "stddev: 0.000049775369309552744",
            "extra": "mean: 8.888196479999806 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 7333.863425163205,
            "unit": "iter/sec",
            "range": "stddev: 0.000005698328009287543",
            "extra": "mean: 136.35377999662524 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 134.06907366306004,
            "unit": "iter/sec",
            "range": "stddev: 0.00007232640585080019",
            "extra": "mean: 7.458841720001602 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 8547.191179512818,
            "unit": "iter/sec",
            "range": "stddev: 0.000005376276641229736",
            "extra": "mean: 116.9974999970691 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 141.20941417969456,
            "unit": "iter/sec",
            "range": "stddev: 0.00002354867758842779",
            "extra": "mean: 7.081680820001566 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6878.055920199001,
            "unit": "iter/sec",
            "range": "stddev: 0.00000644622270102732",
            "extra": "mean: 145.38992000098006 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 21.001801030448423,
            "unit": "iter/sec",
            "range": "stddev: 0.00016779011795692414",
            "extra": "mean: 47.61496400000169 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 55.006141199147045,
            "unit": "iter/sec",
            "range": "stddev: 0.00013841518436794847",
            "extra": "mean: 18.179788259997167 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 3530.603197876367,
            "unit": "iter/sec",
            "range": "stddev: 0.000017208849565953234",
            "extra": "mean: 283.23772000248937 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 65.63998966293205,
            "unit": "iter/sec",
            "range": "stddev: 0.000054308361584122726",
            "extra": "mean: 15.23461543999474 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 4025.1002028427038,
            "unit": "iter/sec",
            "range": "stddev: 0.000014683268872650843",
            "extra": "mean: 248.44102000088242 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 67.54989249920578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011939248597618053",
            "extra": "mean: 14.803872560000856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3353.9307161923384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599407618426171",
            "extra": "mean: 298.15762000453105 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 10.496625864444185,
            "unit": "iter/sec",
            "range": "stddev: 0.00023430152133594663",
            "extra": "mean: 95.26870948000123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 27.580947662538332,
            "unit": "iter/sec",
            "range": "stddev: 0.00009059828667734253",
            "extra": "mean: 36.25691228000278 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1391.4139186532977,
            "unit": "iter/sec",
            "range": "stddev: 0.000009800643452478333",
            "extra": "mean: 718.6933999969369 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 657.2790134289916,
            "unit": "iter/sec",
            "range": "stddev: 0.00002133594949085157",
            "extra": "mean: 1.521423900001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1411.9362378735163,
            "unit": "iter/sec",
            "range": "stddev: 0.000004115052112571249",
            "extra": "mean: 708.2472799947935 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 68.4129150809632,
            "unit": "iter/sec",
            "range": "stddev: 0.00012706261611866832",
            "extra": "mean: 14.6171230799996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1301.0227964677376,
            "unit": "iter/sec",
            "range": "stddev: 0.000006655047210744768",
            "extra": "mean: 768.6260400009814 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 632.5228152244367,
            "unit": "iter/sec",
            "range": "stddev: 0.000011043965255229923",
            "extra": "mean: 1.5809706400000323 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1302.5684043819535,
            "unit": "iter/sec",
            "range": "stddev: 0.000006630367413072087",
            "extra": "mean: 767.7139999987048 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 55.16363338616606,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970499715861162",
            "extra": "mean: 18.127884959999392 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 1046.425176156486,
            "unit": "iter/sec",
            "range": "stddev: 0.000025320051957559127",
            "extra": "mean: 955.6344999964494 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 561.6641840168799,
            "unit": "iter/sec",
            "range": "stddev: 0.000017979126147723667",
            "extra": "mean: 1.7804233000015302 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 1070.15025401532,
            "unit": "iter/sec",
            "range": "stddev: 0.00002000563373975275",
            "extra": "mean: 934.4482200026505 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 46.53688583423156,
            "unit": "iter/sec",
            "range": "stddev: 0.00016678040410913824",
            "extra": "mean: 21.488330859999678 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 520.3370781055021,
            "unit": "iter/sec",
            "range": "stddev: 0.000014859528157796028",
            "extra": "mean: 1.9218311400004495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 285.11376606656023,
            "unit": "iter/sec",
            "range": "stddev: 0.000042132306605494244",
            "extra": "mean: 3.5073718599983295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 520.7164162249242,
            "unit": "iter/sec",
            "range": "stddev: 0.000006245556340336007",
            "extra": "mean: 1.9204311000021335 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 23.195676744861704,
            "unit": "iter/sec",
            "range": "stddev: 0.00036857126458830276",
            "extra": "mean: 43.11148197999955 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 260.1850545386874,
            "unit": "iter/sec",
            "range": "stddev: 0.00002764411495525679",
            "extra": "mean: 3.8434182999981203 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 141.23718024369643,
            "unit": "iter/sec",
            "range": "stddev: 0.00005291824664345764",
            "extra": "mean: 7.080288619997646 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 261.600819124537,
            "unit": "iter/sec",
            "range": "stddev: 0.000040882268935016874",
            "extra": "mean: 3.8226179999992382 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 11.598601082702826,
            "unit": "iter/sec",
            "range": "stddev: 0.00028220520352603484",
            "extra": "mean: 86.21729403999552 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 73.95706282495918,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844496142690123",
            "extra": "mean: 13.521359039998515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 52.1178853740567,
            "unit": "iter/sec",
            "range": "stddev: 0.0012032944729649551",
            "extra": "mean: 19.187271179996515 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 30.350834357093202,
            "unit": "iter/sec",
            "range": "stddev: 0.0016959465550996154",
            "extra": "mean: 32.94802337999954 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 14.558140532408126,
            "unit": "iter/sec",
            "range": "stddev: 0.0032565675934787316",
            "extra": "mean: 68.6900911399971 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 627.0139845951768,
            "unit": "iter/sec",
            "range": "stddev: 0.00001976114155709786",
            "extra": "mean: 1.5948607599966635 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 288.83026584390814,
            "unit": "iter/sec",
            "range": "stddev: 0.00004538673175595625",
            "extra": "mean: 3.462241040003846 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 76.48148389546513,
            "unit": "iter/sec",
            "range": "stddev: 0.00003479964603411508",
            "extra": "mean: 13.075060119999762 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 107.96617029479313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171856414727445",
            "extra": "mean: 9.262160519999725 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 189.06290600082977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006827780343114123",
            "extra": "mean: 5.289244839998446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 182.53433770242367,
            "unit": "iter/sec",
            "range": "stddev: 0.000060466836537952556",
            "extra": "mean: 5.4784212800018395 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 164.54298982616712,
            "unit": "iter/sec",
            "range": "stddev: 0.00005159099387338586",
            "extra": "mean: 6.077439099997264 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 24.680235903803677,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639511582976404",
            "extra": "mean: 40.518251280000186 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.536309599777091,
            "unit": "iter/sec",
            "range": "stddev: 0.002567075244774029",
            "extra": "mean: 650.910467619999 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 17.52208720156164,
            "unit": "iter/sec",
            "range": "stddev: 0.00016519845676891078",
            "extra": "mean: 57.070826580002176 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 17.507908259130993,
            "unit": "iter/sec",
            "range": "stddev: 0.00027401672118164823",
            "extra": "mean: 57.117045920003875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 17.367283021376466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670932634316099",
            "extra": "mean: 57.579530359996625 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "28764765a9052e49266a4d49593f738200f23a00",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/28764765a9052e49266a4d49593f738200f23a00"
        },
        "date": 1619591961257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0542006196790532,
            "unit": "iter/sec",
            "range": "stddev: 0.008900495714879025",
            "extra": "mean: 948.5860483599845 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 92.16786633779478,
            "unit": "iter/sec",
            "range": "stddev: 0.00030569989216199396",
            "extra": "mean: 10.849768359994414 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.967776959588841,
            "unit": "iter/sec",
            "range": "stddev: 0.0013261378159950335",
            "extra": "mean: 252.03029559998868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 111.29846253376967,
            "unit": "iter/sec",
            "range": "stddev: 0.0003510153257443505",
            "extra": "mean: 8.98485007999625 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.400669725555678,
            "unit": "iter/sec",
            "range": "stddev: 0.00776418989619867",
            "extra": "mean: 2.495821211880002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 219.39015469242895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006404831256414138",
            "extra": "mean: 4.558089680012927 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.905830546144505,
            "unit": "iter/sec",
            "range": "stddev: 0.001784578649815354",
            "extra": "mean: 256.02749227999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3287857369461145,
            "unit": "iter/sec",
            "range": "stddev: 0.023116651831654993",
            "extra": "mean: 3.0414944677599944 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6460.233772420845,
            "unit": "iter/sec",
            "range": "stddev: 0.000008711089527471813",
            "extra": "mean: 154.79316000437396 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 42.33554312901933,
            "unit": "iter/sec",
            "range": "stddev: 0.0002051319461899269",
            "extra": "mean: 23.620814239998253 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6233.280005706578,
            "unit": "iter/sec",
            "range": "stddev: 0.000015374027361417428",
            "extra": "mean: 160.4291799958446 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 41.09180012190677,
            "unit": "iter/sec",
            "range": "stddev: 0.00046296038457765303",
            "extra": "mean: 24.3357554800059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6668.484050896055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006131538805633464",
            "extra": "mean: 149.9591199990391 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.83878739359714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831214305631524",
            "extra": "mean: 23.901266319994647 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 6611.346445686822,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841457248596566",
            "extra": "mean: 151.255119999405 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 41.46952768554092,
            "unit": "iter/sec",
            "range": "stddev: 0.000401974670632355",
            "extra": "mean: 24.11409186000128 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3369.4745419190594,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842639896406857",
            "extra": "mean: 296.7821799984449 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.80727984466196,
            "unit": "iter/sec",
            "range": "stddev: 0.0010247723357764593",
            "extra": "mean: 48.060102400004325 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11440.252253173498,
            "unit": "iter/sec",
            "range": "stddev: 0.000006824456683062628",
            "extra": "mean: 87.41065999856801 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 208.82136539594086,
            "unit": "iter/sec",
            "range": "stddev: 0.00014290565280449048",
            "extra": "mean: 4.788782020000326 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12770.645089165817,
            "unit": "iter/sec",
            "range": "stddev: 0.000002096712956381711",
            "extra": "mean: 78.304579997166 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 217.4030904307992,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702499332597166",
            "extra": "mean: 4.599750620004671 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 12206.94184292692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042304471987750145",
            "extra": "mean: 81.92060000510537 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.61378962151084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968169511534991",
            "extra": "mean: 21.923194900000453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 90.47765119047115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001835663020589449",
            "extra": "mean: 11.05245314000058 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10782.287290217966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023575474501798516",
            "extra": "mean: 92.74469999581925 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 212.07470940730593,
            "unit": "iter/sec",
            "range": "stddev: 0.000018490383049596224",
            "extra": "mean: 4.715319439997074 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 12585.486918973762,
            "unit": "iter/sec",
            "range": "stddev: 0.000008793337252538171",
            "extra": "mean: 79.4566000058694 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 215.54730186622712,
            "unit": "iter/sec",
            "range": "stddev: 0.0001962135484995031",
            "extra": "mean: 4.639352899998812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11112.01488829111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035823879786378107",
            "extra": "mean: 89.9926800002504 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.833490382048545,
            "unit": "iter/sec",
            "range": "stddev: 0.00020672722135723026",
            "extra": "mean: 25.750968820002527 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 89.7421247839545,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190581073901683",
            "extra": "mean: 11.143039039998257 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 11070.43587073416,
            "unit": "iter/sec",
            "range": "stddev: 0.000009402749649263109",
            "extra": "mean: 90.33067999098421 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 212.72631431366386,
            "unit": "iter/sec",
            "range": "stddev: 0.000044328707413181595",
            "extra": "mean: 4.700875880007516 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 12587.067895759878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027310868128771365",
            "extra": "mean: 79.44661999772507 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 219.22801572708465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007386849386688016",
            "extra": "mean: 4.561460799995984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11308.804084993959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023833140369229866",
            "extra": "mean: 88.42667999942933 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.13505506356941,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623762390025381",
            "extra": "mean: 30.179518280006054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 90.62870070400248,
            "unit": "iter/sec",
            "range": "stddev: 0.00023951122311594543",
            "extra": "mean: 11.034032180004942 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 6005.1670859728965,
            "unit": "iter/sec",
            "range": "stddev: 0.00000962450495260117",
            "extra": "mean: 166.52325999984896 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 106.54138967530298,
            "unit": "iter/sec",
            "range": "stddev: 0.00004714035252070766",
            "extra": "mean: 9.386023619999833 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6741.945431358148,
            "unit": "iter/sec",
            "range": "stddev: 0.000011607297389501038",
            "extra": "mean: 148.32514000318042 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 110.24792838572604,
            "unit": "iter/sec",
            "range": "stddev: 0.00007239994512933583",
            "extra": "mean: 9.070465220002006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 6251.9834418867495,
            "unit": "iter/sec",
            "range": "stddev: 0.000005027409739113276",
            "extra": "mean: 159.94923999642197 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.38757413593882,
            "unit": "iter/sec",
            "range": "stddev: 0.001019478748146442",
            "extra": "mean: 61.021844460001375 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 44.02949502409333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008618115124006519",
            "extra": "mean: 22.71204789999956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2955.1478883682685,
            "unit": "iter/sec",
            "range": "stddev: 0.000009688352110773984",
            "extra": "mean: 338.39253999303764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 51.94738810091893,
            "unit": "iter/sec",
            "range": "stddev: 0.000598207924210662",
            "extra": "mean: 19.25024599999688 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3485.5333287252215,
            "unit": "iter/sec",
            "range": "stddev: 0.000012724730164903492",
            "extra": "mean: 286.9001400040361 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 55.392053538626435,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751277014495515",
            "extra": "mean: 18.053131020005825 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 3167.660667998265,
            "unit": "iter/sec",
            "range": "stddev: 0.00000830239531375084",
            "extra": "mean: 315.69038000270666 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.255632301777666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993871769719659",
            "extra": "mean: 121.12942575999567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 22.408728837367846,
            "unit": "iter/sec",
            "range": "stddev: 0.0006781228759716363",
            "extra": "mean: 44.62546747999568 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1165.8294185010004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004524728467607622",
            "extra": "mean: 857.7584199974808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 533.057559204504,
            "unit": "iter/sec",
            "range": "stddev: 0.000014647900238987116",
            "extra": "mean: 1.8759700199962026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1189.4930461519896,
            "unit": "iter/sec",
            "range": "stddev: 0.00002296149651848117",
            "extra": "mean: 840.6942800002071 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 53.53045244392377,
            "unit": "iter/sec",
            "range": "stddev: 0.00028497340220972825",
            "extra": "mean: 18.68095550000362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1104.8249517572187,
            "unit": "iter/sec",
            "range": "stddev: 0.000022455317884771983",
            "extra": "mean: 905.120759998681 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 505.4797083832505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000510513789700645",
            "extra": "mean: 1.9783187799930604 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1123.4103827408615,
            "unit": "iter/sec",
            "range": "stddev: 0.000013571544731638758",
            "extra": "mean: 890.1466599945707 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.18321948812246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005646406200319808",
            "extra": "mean: 23.70610901999953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 841.3153972983833,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566892694527136",
            "extra": "mean: 1.1886148799976581 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 433.2411667624303,
            "unit": "iter/sec",
            "range": "stddev: 0.00008556631795492309",
            "extra": "mean: 2.3081832400021085 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 851.1023792944042,
            "unit": "iter/sec",
            "range": "stddev: 0.00003307481083709713",
            "extra": "mean: 1.174946779997299 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.911088663526066,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801566012372324",
            "extra": "mean: 27.8465520599957 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 443.26615631618955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081658347723207",
            "extra": "mean: 2.2559809400081576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 227.63451301251425,
            "unit": "iter/sec",
            "range": "stddev: 0.00009241028888846585",
            "extra": "mean: 4.393006959999184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 438.5162658302573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006700685023436387",
            "extra": "mean: 2.2804171200050405 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.1774737259388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007096193598597042",
            "extra": "mean: 55.01314511999681 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 217.0146141546467,
            "unit": "iter/sec",
            "range": "stddev: 0.00020360443714887924",
            "extra": "mean: 4.607984600002056 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 115.43434458906152,
            "unit": "iter/sec",
            "range": "stddev: 0.00013446226974102987",
            "extra": "mean: 8.662933059999887 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 226.19454015243076,
            "unit": "iter/sec",
            "range": "stddev: 0.000038755050883370194",
            "extra": "mean: 4.420973199999025 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.044562717341602,
            "unit": "iter/sec",
            "range": "stddev: 0.001786791875195791",
            "extra": "mean: 110.56366473999334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 64.1699328242895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005723207528403756",
            "extra": "mean: 15.583622359995388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.682396422070646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008647030262127483",
            "extra": "mean: 23.99094308000258 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 25.118166606293368,
            "unit": "iter/sec",
            "range": "stddev: 0.001015491015128311",
            "extra": "mean: 39.811822879996726 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.59727536675426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009856497000222389",
            "extra": "mean: 79.38224503999663 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 552.0325208087075,
            "unit": "iter/sec",
            "range": "stddev: 0.000030490674788258742",
            "extra": "mean: 1.8114874800039615 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 258.2353286366096,
            "unit": "iter/sec",
            "range": "stddev: 0.00005866752135556241",
            "extra": "mean: 3.872436839992588 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 69.41877270735013,
            "unit": "iter/sec",
            "range": "stddev: 0.00014499396919145823",
            "extra": "mean: 14.405325260008794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.44684701746233,
            "unit": "iter/sec",
            "range": "stddev: 0.00009540032793417153",
            "extra": "mean: 10.157765639996796 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 178.49099988932065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225829648647317",
            "extra": "mean: 5.602523380002822 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 172.20130856445564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008850252037999151",
            "extra": "mean: 5.8071568000059415 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 160.86600424566822,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717205551870166",
            "extra": "mean: 6.216353819995675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 23.04060300819208,
            "unit": "iter/sec",
            "range": "stddev: 0.0012810057488704303",
            "extra": "mean: 43.40164186000038 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.458748305913402,
            "unit": "iter/sec",
            "range": "stddev: 0.004029220608852669",
            "extra": "mean: 685.5192194199981 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.72715822838651,
            "unit": "iter/sec",
            "range": "stddev: 0.0005110107881521528",
            "extra": "mean: 63.584277939994536 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.709525208386925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005542127925653272",
            "extra": "mean: 63.655647559999124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.500054126654476,
            "unit": "iter/sec",
            "range": "stddev: 0.0009174337776832452",
            "extra": "mean: 64.51590373999807 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "caf696ac3efe91c5020f5e55921fd422a6a9f728",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/caf696ac3efe91c5020f5e55921fd422a6a9f728"
        },
        "date": 1619594061185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0015357132388532,
            "unit": "iter/sec",
            "range": "stddev: 0.021408841086326694",
            "extra": "mean: 998.4666415600032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 94.45586644659096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415724828703475",
            "extra": "mean: 10.586954920004246 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.8265859372585567,
            "unit": "iter/sec",
            "range": "stddev: 0.003857979143616644",
            "extra": "mean: 261.32955496000704 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 101.91180554796215,
            "unit": "iter/sec",
            "range": "stddev: 0.00011497406333795413",
            "extra": "mean: 9.812405879997641 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.37908098525101885,
            "unit": "iter/sec",
            "range": "stddev: 0.051667023567538876",
            "extra": "mean: 2.6379587447200037 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 208.11176367550377,
            "unit": "iter/sec",
            "range": "stddev: 0.00028097892781062963",
            "extra": "mean: 4.805110400002377 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.686624818908578,
            "unit": "iter/sec",
            "range": "stddev: 0.0044169734938536995",
            "extra": "mean: 271.2508185999923 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3068571701767659,
            "unit": "iter/sec",
            "range": "stddev: 0.1376989739477466",
            "extra": "mean: 3.258845147480006 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6134.017987934285,
            "unit": "iter/sec",
            "range": "stddev: 0.00001676163214347771",
            "extra": "mean: 163.02527999869199 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 41.28518839510366,
            "unit": "iter/sec",
            "range": "stddev: 0.00024410709094962763",
            "extra": "mean: 24.2217618199993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6114.739665498203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144528249495881",
            "extra": "mean: 163.53926000192587 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.49377205057293,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466602297019895",
            "extra": "mean: 24.695155559998053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6171.267737766983,
            "unit": "iter/sec",
            "range": "stddev: 0.00001327394717211253",
            "extra": "mean: 162.0412599959309 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 39.999173489080796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009736257617653926",
            "extra": "mean: 25.000516579998475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5817.708616234611,
            "unit": "iter/sec",
            "range": "stddev: 0.000015319953015361902",
            "extra": "mean: 171.88898000313202 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 38.37098815385991,
            "unit": "iter/sec",
            "range": "stddev: 0.0018187260405744155",
            "extra": "mean: 26.061356459995295 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3038.4623144549455,
            "unit": "iter/sec",
            "range": "stddev: 0.000030948453359268504",
            "extra": "mean: 329.1138399981719 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.212762538051408,
            "unit": "iter/sec",
            "range": "stddev: 0.0007539264142302021",
            "extra": "mean: 49.47369257999526 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 9678.220462362575,
            "unit": "iter/sec",
            "range": "stddev: 0.000006334426278531786",
            "extra": "mean: 103.32477999327239 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 201.2754738215403,
            "unit": "iter/sec",
            "range": "stddev: 0.00018354753694183268",
            "extra": "mean: 4.968315219998658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 12723.19667678533,
            "unit": "iter/sec",
            "range": "stddev: 0.000003124993525346474",
            "extra": "mean: 78.59660000576696 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 213.04921408285662,
            "unit": "iter/sec",
            "range": "stddev: 0.00005698235304692782",
            "extra": "mean: 4.693751180002437 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 9723.201835178543,
            "unit": "iter/sec",
            "range": "stddev: 0.000018373105222408913",
            "extra": "mean: 102.84677999607084 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.1196378666476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956287755745592",
            "extra": "mean: 22.66564388000006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 84.37110324676163,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571128357322722",
            "extra": "mean: 11.852399240001432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10259.29127534892,
            "unit": "iter/sec",
            "range": "stddev: 0.000011210031164520665",
            "extra": "mean: 97.47262000473711 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 189.39003824600556,
            "unit": "iter/sec",
            "range": "stddev: 0.0003473785262658813",
            "extra": "mean: 5.280108760002804 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11659.833227150952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011394735106704864",
            "extra": "mean: 85.76451999942947 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 207.73998120532673,
            "unit": "iter/sec",
            "range": "stddev: 0.00013531442928331635",
            "extra": "mean: 4.813709880004353 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10506.786439126507,
            "unit": "iter/sec",
            "range": "stddev: 0.000010593158175697194",
            "extra": "mean: 95.17657999367657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 35.014612326025585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005108564904599185",
            "extra": "mean: 28.55950512000163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 77.8133381274447,
            "unit": "iter/sec",
            "range": "stddev: 0.00040870101431790914",
            "extra": "mean: 12.851267200003349 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 9123.852835327845,
            "unit": "iter/sec",
            "range": "stddev: 0.000012296684225952718",
            "extra": "mean: 109.6028199981447 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 184.80572564200904,
            "unit": "iter/sec",
            "range": "stddev: 0.00007676657111944577",
            "extra": "mean: 5.411087760003284 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 9879.98778805628,
            "unit": "iter/sec",
            "range": "stddev: 0.000015816162504351266",
            "extra": "mean: 101.21470000285626 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 201.6698904206139,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483766117542641",
            "extra": "mean: 4.958598419993905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 9512.324071997817,
            "unit": "iter/sec",
            "range": "stddev: 0.000014476331028189575",
            "extra": "mean: 105.12677999940934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.023508365007817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005584117921268892",
            "extra": "mean: 33.307233380010075 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 77.51393007488937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498769389290146",
            "extra": "mean: 12.900906959998792 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 4989.34873819561,
            "unit": "iter/sec",
            "range": "stddev: 0.000013164492216740217",
            "extra": "mean: 200.42696000473373 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 91.74023071122235,
            "unit": "iter/sec",
            "range": "stddev: 0.00014231112999528212",
            "extra": "mean: 10.900343200005409 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6050.675618667366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074728040182800585",
            "extra": "mean: 165.2707999937775 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 94.88694918368519,
            "unit": "iter/sec",
            "range": "stddev: 0.0008239939769040465",
            "extra": "mean: 10.538857120004648 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5419.31047725863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011918806350306696",
            "extra": "mean: 184.5253200008301 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.124875383040342,
            "unit": "iter/sec",
            "range": "stddev: 0.00048120902312639107",
            "extra": "mean: 70.79708477999702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 37.48687138538451,
            "unit": "iter/sec",
            "range": "stddev: 0.0011097532669462338",
            "extra": "mean: 26.67600584000411 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2734.07151806704,
            "unit": "iter/sec",
            "range": "stddev: 0.000015677718168554037",
            "extra": "mean: 365.75487999925826 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.54721023987842,
            "unit": "iter/sec",
            "range": "stddev: 0.00046794445453043556",
            "extra": "mean: 21.483564639997894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3262.850966990006,
            "unit": "iter/sec",
            "range": "stddev: 0.00002092116929494049",
            "extra": "mean: 306.4804399946297 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.20983676248296,
            "unit": "iter/sec",
            "range": "stddev: 0.00030021896344171567",
            "extra": "mean: 20.742654759997095 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2381.8523808907853,
            "unit": "iter/sec",
            "range": "stddev: 0.00012382744435611337",
            "extra": "mean: 419.8412999994616 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.430357056993165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787916015355164",
            "extra": "mean: 134.58303447999697 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.797343769875496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346965957457391",
            "extra": "mean: 50.51182682000217 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1003.3761399646638,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722878706229986",
            "extra": "mean: 996.6352200035545 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 441.4242511090494,
            "unit": "iter/sec",
            "range": "stddev: 0.00015884716125653142",
            "extra": "mean: 2.2653943399973286 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1059.30989223334,
            "unit": "iter/sec",
            "range": "stddev: 0.00001418066344625229",
            "extra": "mean: 944.0108199987662 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 46.58778715116914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009326133663357287",
            "extra": "mean: 21.464852940002856 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 981.2759208938955,
            "unit": "iter/sec",
            "range": "stddev: 0.000011310979720585522",
            "extra": "mean: 1.0190813600002002 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 421.0644852083298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336409809441405",
            "extra": "mean: 2.374933140004032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 983.4492183985361,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472435273713774",
            "extra": "mean: 1.0168293200013068 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 39.083197759256194,
            "unit": "iter/sec",
            "range": "stddev: 0.0011431172585354198",
            "extra": "mean: 25.58644270000059 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 753.7330892442037,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965497905575593",
            "extra": "mean: 1.3267296000003626 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 400.4706266719236,
            "unit": "iter/sec",
            "range": "stddev: 0.00005366005326055513",
            "extra": "mean: 2.4970620400063126 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 718.3856231386168,
            "unit": "iter/sec",
            "range": "stddev: 0.000223097042353476",
            "extra": "mean: 1.3920100399991497 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.88834795596685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893808765131707",
            "extra": "mean: 30.405905499992514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 413.1934656914641,
            "unit": "iter/sec",
            "range": "stddev: 0.00000871420658684747",
            "extra": "mean: 2.4201738000056143 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 196.17915744527485,
            "unit": "iter/sec",
            "range": "stddev: 0.000214519677361287",
            "extra": "mean: 5.09738146000018 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 390.40130615196244,
            "unit": "iter/sec",
            "range": "stddev: 0.00015802237364725142",
            "extra": "mean: 2.5614668399975926 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 15.80785519634379,
            "unit": "iter/sec",
            "range": "stddev: 0.0017734922705202971",
            "extra": "mean: 63.25968877999913 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 201.42356182903944,
            "unit": "iter/sec",
            "range": "stddev: 0.000087021580564003",
            "extra": "mean: 4.96466247999706 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 99.64105565175113,
            "unit": "iter/sec",
            "range": "stddev: 0.00024104995544622007",
            "extra": "mean: 10.036023740003657 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 196.23151349992156,
            "unit": "iter/sec",
            "range": "stddev: 0.00006510736110642177",
            "extra": "mean: 5.096021440003824 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 7.97309599818904,
            "unit": "iter/sec",
            "range": "stddev: 0.003825989454676001",
            "extra": "mean: 125.4217935199995 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 55.52188363061441,
            "unit": "iter/sec",
            "range": "stddev: 0.00058748375177741",
            "extra": "mean: 18.01091632000407 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 37.7376604073524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880931159651063",
            "extra": "mean: 26.498728039991875 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.26854922707573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373665379822191",
            "extra": "mean: 44.90638297999794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.54874291166527,
            "unit": "iter/sec",
            "range": "stddev: 0.0009213666361465537",
            "extra": "mean: 86.58951088000322 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 500.8101856768153,
            "unit": "iter/sec",
            "range": "stddev: 0.00011819956919665042",
            "extra": "mean: 1.9967645000042467 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 227.81669762762206,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060996901657261",
            "extra": "mean: 4.389493880007649 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 62.2257577846819,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359323999363773",
            "extra": "mean: 16.070515420001357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 92.91463419854239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789762716722442",
            "extra": "mean: 10.762567259998832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 171.2920739626393,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217193567054168",
            "extra": "mean: 5.837981739996394 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 167.9214727457212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000444039651775132",
            "extra": "mean: 5.955164540000624 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 145.4149752373071,
            "unit": "iter/sec",
            "range": "stddev: 0.0004196991947421051",
            "extra": "mean: 6.876870819996839 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.219226872934946,
            "unit": "iter/sec",
            "range": "stddev: 0.0007359827597957493",
            "extra": "mean: 45.006066400001146 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2229394470095338,
            "unit": "iter/sec",
            "range": "stddev: 0.03290096543309879",
            "extra": "mean: 817.7019740800006 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.947345896088374,
            "unit": "iter/sec",
            "range": "stddev: 0.004219970744933765",
            "extra": "mean: 71.69822900000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 9.762798307599446,
            "unit": "iter/sec",
            "range": "stddev: 0.007734059550666615",
            "extra": "mean: 102.4296485999912 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 12.894088602726562,
            "unit": "iter/sec",
            "range": "stddev: 0.003601677085280978",
            "extra": "mean: 77.55491922000147 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "0c270aff072afb2431a76be54e50f310f3164232",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/0c270aff072afb2431a76be54e50f310f3164232"
        },
        "date": 1619594252419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.007496920395247,
            "unit": "iter/sec",
            "range": "stddev: 0.015295504337333015",
            "extra": "mean: 992.5588651999988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 88.31010337242739,
            "unit": "iter/sec",
            "range": "stddev: 0.00016851888483488428",
            "extra": "mean: 11.323732639998525 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.9896509577641437,
            "unit": "iter/sec",
            "range": "stddev: 0.0031936505509443857",
            "extra": "mean: 250.6484929599992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 116.09774075599462,
            "unit": "iter/sec",
            "range": "stddev: 0.00015521478358470047",
            "extra": "mean: 8.613432040006046 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.39595356539897664,
            "unit": "iter/sec",
            "range": "stddev: 0.029805537320169297",
            "extra": "mean: 2.5255486688000017 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 209.2399263426154,
            "unit": "iter/sec",
            "range": "stddev: 0.00015805008097113832",
            "extra": "mean: 4.779202599997916 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.647825894315136,
            "unit": "iter/sec",
            "range": "stddev: 0.005689232763657784",
            "extra": "mean: 274.1358905200014 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.322919332273723,
            "unit": "iter/sec",
            "range": "stddev: 0.03025003141504588",
            "extra": "mean: 3.096748630559996 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5581.955102129375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001049278308159385",
            "extra": "mean: 179.14869999913208 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.12843117237692,
            "unit": "iter/sec",
            "range": "stddev: 0.00046531262428240074",
            "extra": "mean: 24.91998742000078 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5113.989810045622,
            "unit": "iter/sec",
            "range": "stddev: 0.000003536501727588125",
            "extra": "mean: 195.54204000087338 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.29636822163238,
            "unit": "iter/sec",
            "range": "stddev: 0.00046352775243909094",
            "extra": "mean: 25.447644280000077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5655.4541255764125,
            "unit": "iter/sec",
            "range": "stddev: 0.000009691149093774449",
            "extra": "mean: 176.82046000118135 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 40.22783420086776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003985216760519071",
            "extra": "mean: 24.858410100000583 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5107.2001307276305,
            "unit": "iter/sec",
            "range": "stddev: 0.000007525177303065637",
            "extra": "mean: 195.80200000063996 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.4702257047094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007039967492555652",
            "extra": "mean: 25.33555311999862 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2626.677153081768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008782289719335715",
            "extra": "mean: 380.7091399971796 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.875404673624594,
            "unit": "iter/sec",
            "range": "stddev: 0.000637002271746528",
            "extra": "mean: 50.31344097999863 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 11396.380236338999,
            "unit": "iter/sec",
            "range": "stddev: 0.00000337773053945639",
            "extra": "mean: 87.7471599983437 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 210.10049472236616,
            "unit": "iter/sec",
            "range": "stddev: 0.00011830789536244851",
            "extra": "mean: 4.759627060000184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 17252.456577424586,
            "unit": "iter/sec",
            "range": "stddev: 0.00000478070689749755",
            "extra": "mean: 57.96275999955469 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 205.4631070425062,
            "unit": "iter/sec",
            "range": "stddev: 0.000205181875472625",
            "extra": "mean: 4.867053819998546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11253.751156957986,
            "unit": "iter/sec",
            "range": "stddev: 0.000006491152633024582",
            "extra": "mean: 88.8592599972071 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.11417569120847,
            "unit": "iter/sec",
            "range": "stddev: 0.00042626986032427597",
            "extra": "mean: 22.16598185999601 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.85427241040196,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894135738726952",
            "extra": "mean: 11.925450799999453 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 13310.595287163524,
            "unit": "iter/sec",
            "range": "stddev: 0.000005993673054606705",
            "extra": "mean: 75.12811999959013 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 203.75374879388283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008487982767308549",
            "extra": "mean: 4.90788516000066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15375.314502089133,
            "unit": "iter/sec",
            "range": "stddev: 0.000011042468750291955",
            "extra": "mean: 65.03931999986888 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 211.32504526931075,
            "unit": "iter/sec",
            "range": "stddev: 0.000078804519628281",
            "extra": "mean: 4.732046780000019 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11249.44680855853,
            "unit": "iter/sec",
            "range": "stddev: 0.000007448744659497742",
            "extra": "mean: 88.89325999916764 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.95576395085114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001573813469941507",
            "extra": "mean: 26.346459559999857 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.81779806344703,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812520104275206",
            "extra": "mean: 11.652594480001426 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12096.175237718495,
            "unit": "iter/sec",
            "range": "stddev: 0.000003290354381451422",
            "extra": "mean: 82.67076000038288 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 208.73020947478295,
            "unit": "iter/sec",
            "range": "stddev: 0.000056316893672036805",
            "extra": "mean: 4.790873360000205 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 16676.4334980016,
            "unit": "iter/sec",
            "range": "stddev: 0.00000468437494902236",
            "extra": "mean: 59.96485999958168 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 209.96215499343074,
            "unit": "iter/sec",
            "range": "stddev: 0.00021029933071649786",
            "extra": "mean: 4.762763080000241 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11865.644829378783,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156295293287762",
            "extra": "mean: 84.27691999713716 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 32.072685387803574,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402845389037753",
            "extra": "mean: 31.17917904000251 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 84.78100028211458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002701998610586964",
            "extra": "mean: 11.795095560000844 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5752.806506740721,
            "unit": "iter/sec",
            "range": "stddev: 0.000009627268597305943",
            "extra": "mean: 173.82819999738786 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 103.29282166143643,
            "unit": "iter/sec",
            "range": "stddev: 0.000251224281283392",
            "extra": "mean: 9.681214859999727 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6192.0585858093955,
            "unit": "iter/sec",
            "range": "stddev: 0.00004773098885828179",
            "extra": "mean: 161.49717999951463 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 104.3671962755866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922409457541178",
            "extra": "mean: 9.581554699998378 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5541.740612023019,
            "unit": "iter/sec",
            "range": "stddev: 0.000010428120993287598",
            "extra": "mean: 180.44871999791212 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.795116584381173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010477157737193933",
            "extra": "mean: 63.31070711999928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 40.968861964693275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011346755189889599",
            "extra": "mean: 24.408781500003442 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2764.6336343359644,
            "unit": "iter/sec",
            "range": "stddev: 0.000038164665847291734",
            "extra": "mean: 361.7115800011561 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 49.489921581864344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007123065932574568",
            "extra": "mean: 20.206134259999544 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3339.9415189449364,
            "unit": "iter/sec",
            "range": "stddev: 0.00002212671908317455",
            "extra": "mean: 299.4064400013485 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.22634162365729,
            "unit": "iter/sec",
            "range": "stddev: 0.00026175696804607964",
            "extra": "mean: 19.147425780001868 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2615.8751603962924,
            "unit": "iter/sec",
            "range": "stddev: 0.000021377456129282086",
            "extra": "mean: 382.2812399994291 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.878726818464062,
            "unit": "iter/sec",
            "range": "stddev: 0.0019113299262247258",
            "extra": "mean: 126.9240605799996 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.77991057293978,
            "unit": "iter/sec",
            "range": "stddev: 0.0004355281430689568",
            "extra": "mean: 48.12340248000055 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1070.9065427368846,
            "unit": "iter/sec",
            "range": "stddev: 0.00002782470442026913",
            "extra": "mean: 933.7882999989233 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 503.80570801420816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003371525977064719",
            "extra": "mean: 1.9848921599987082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1133.1289138535515,
            "unit": "iter/sec",
            "range": "stddev: 0.00001631504637533491",
            "extra": "mean: 882.5121200015928 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.91857449636706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016840892316891828",
            "extra": "mean: 19.260929440001746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1014.9806062565107,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367684417368624",
            "extra": "mean: 985.2405000015096 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 489.06235517613993,
            "unit": "iter/sec",
            "range": "stddev: 0.00003373007800579191",
            "extra": "mean: 2.0447290400011298 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 993.2910736986436,
            "unit": "iter/sec",
            "range": "stddev: 0.000014412609212144187",
            "extra": "mean: 1.0067542399997362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 43.09411687640289,
            "unit": "iter/sec",
            "range": "stddev: 0.00022202170856382023",
            "extra": "mean: 23.205023620000702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 795.6293470311911,
            "unit": "iter/sec",
            "range": "stddev: 0.000027130034220958396",
            "extra": "mean: 1.25686665999865 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 434.51018969838185,
            "unit": "iter/sec",
            "range": "stddev: 0.000031076476260579665",
            "extra": "mean: 2.3014420000004066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 808.9338786982971,
            "unit": "iter/sec",
            "range": "stddev: 0.000039460196146911916",
            "extra": "mean: 1.2361949800015282 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.81519130635674,
            "unit": "iter/sec",
            "range": "stddev: 0.0001586715793960822",
            "extra": "mean: 27.92111290000321 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 403.6235025482543,
            "unit": "iter/sec",
            "range": "stddev: 0.00007997403640185618",
            "extra": "mean: 2.477556419996745 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 213.49735942611127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010460385400019291",
            "extra": "mean: 4.683898680002585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 412.0411171217404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002603211183704994",
            "extra": "mean: 2.426942259999123 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.09352776024071,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578785277443265",
            "extra": "mean: 55.268381779999345 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.32842665150702,
            "unit": "iter/sec",
            "range": "stddev: 0.00009818999928943429",
            "extra": "mean: 5.016845899999679 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 107.69789300446473,
            "unit": "iter/sec",
            "range": "stddev: 0.00012209539140737915",
            "extra": "mean: 9.28523271999893 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 204.7531787858622,
            "unit": "iter/sec",
            "range": "stddev: 0.00011796173746916534",
            "extra": "mean: 4.883929060001719 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.058514812563041,
            "unit": "iter/sec",
            "range": "stddev: 0.00078468088292733",
            "extra": "mean: 110.39337249999562 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.122192476317814,
            "unit": "iter/sec",
            "range": "stddev: 0.00041220165166397073",
            "extra": "mean: 16.36066966000044 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 41.0658106160038,
            "unit": "iter/sec",
            "range": "stddev: 0.000702914529438421",
            "extra": "mean: 24.35115696000139 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.458837662723763,
            "unit": "iter/sec",
            "range": "stddev: 0.00008987041288201335",
            "extra": "mean: 40.88501726000004 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.270637182300113,
            "unit": "iter/sec",
            "range": "stddev: 0.0005608523228431395",
            "extra": "mean: 81.49536043999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 533.9133654226478,
            "unit": "iter/sec",
            "range": "stddev: 0.00001461187710073785",
            "extra": "mean: 1.8729630400025599 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 251.48002912833462,
            "unit": "iter/sec",
            "range": "stddev: 0.000045249398047464686",
            "extra": "mean: 3.9764589000014894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.34257402567636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000917413055669284",
            "extra": "mean: 14.84944723999888 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 95.8438976790404,
            "unit": "iter/sec",
            "range": "stddev: 0.00021370613864065162",
            "extra": "mean: 10.4336324399992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 165.74097734209207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004572440739749144",
            "extra": "mean: 6.033510940001179 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 159.79267194839395,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242270173059585",
            "extra": "mean: 6.258109259997582 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 146.2474375840937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008867023907232325",
            "extra": "mean: 6.8377266399966175 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.315768312621024,
            "unit": "iter/sec",
            "range": "stddev: 0.000473670663389591",
            "extra": "mean: 46.91362682000545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.3291796131923284,
            "unit": "iter/sec",
            "range": "stddev: 0.003706068302340305",
            "extra": "mean: 752.3437691000026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.532346929480854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321974850106823",
            "extra": "mean: 64.38177080000514 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.529199282579194,
            "unit": "iter/sec",
            "range": "stddev: 0.0005564857575710892",
            "extra": "mean: 64.39482048001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.348261242740694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003598982154857383",
            "extra": "mean: 65.15396006000174 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "f9b89d4c512096e2f178054f1b8c8635dca51c41",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/f9b89d4c512096e2f178054f1b8c8635dca51c41"
        },
        "date": 1619594433993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0282550322981199,
            "unit": "iter/sec",
            "range": "stddev: 0.010578511084131688",
            "extra": "mean: 972.5213770799928 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 90.54279558479278,
            "unit": "iter/sec",
            "range": "stddev: 0.00045948246726090807",
            "extra": "mean: 11.044501039991701 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.688828977938661,
            "unit": "iter/sec",
            "range": "stddev: 0.006238385546385338",
            "extra": "mean: 271.08874008000384 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 103.71068492311338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258087407355361",
            "extra": "mean: 9.642208040004334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.36850775169004224,
            "unit": "iter/sec",
            "range": "stddev: 0.10150280141735622",
            "extra": "mean: 2.7136471225200056 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 199.81288881701227,
            "unit": "iter/sec",
            "range": "stddev: 0.00023056509337084384",
            "extra": "mean: 5.004682159997174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.651322656506577,
            "unit": "iter/sec",
            "range": "stddev: 0.0016512470691339072",
            "extra": "mean: 273.87335880000137 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.31664680777010834,
            "unit": "iter/sec",
            "range": "stddev: 0.02203430931235889",
            "extra": "mean: 3.158092788120002 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 6182.737228816194,
            "unit": "iter/sec",
            "range": "stddev: 0.000011910531745695806",
            "extra": "mean: 161.74066000075985 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 40.35482766723973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006082373897102193",
            "extra": "mean: 24.78018264000184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 6394.57330928236,
            "unit": "iter/sec",
            "range": "stddev: 0.000006773973721838649",
            "extra": "mean: 156.38260000059745 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 40.30450414005843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004965551282069932",
            "extra": "mean: 24.811122760002036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 6356.445028507441,
            "unit": "iter/sec",
            "range": "stddev: 0.000009968064177664898",
            "extra": "mean: 157.32063999848833 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 41.01230673431375,
            "unit": "iter/sec",
            "range": "stddev: 0.00041300500154599655",
            "extra": "mean: 24.382925019999675 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5581.7046012177125,
            "unit": "iter/sec",
            "range": "stddev: 0.000009318775612183262",
            "extra": "mean: 179.15674000050788 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 40.35719888763745,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368584207357041",
            "extra": "mean: 24.778726659999393 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3132.1324528714445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001906477557784403",
            "extra": "mean: 319.2712999998548 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.34347516600795,
            "unit": "iter/sec",
            "range": "stddev: 0.0011792907993421712",
            "extra": "mean: 49.15580999999975 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10704.302423220646,
            "unit": "iter/sec",
            "range": "stddev: 0.000008752574964943093",
            "extra": "mean: 93.42037999886088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 194.5230472092721,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519617826206889",
            "extra": "mean: 5.1407790200005365 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11520.42409857317,
            "unit": "iter/sec",
            "range": "stddev: 0.000005455404448986617",
            "extra": "mean: 86.80236000373043 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 212.15120374387348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648061705348669",
            "extra": "mean: 4.71361926000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11511.673873129117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000270648715041323",
            "extra": "mean: 86.86834000172894 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.76051875884041,
            "unit": "iter/sec",
            "range": "stddev: 0.00041528753627582954",
            "extra": "mean: 22.341117299997677 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.71754930514408,
            "unit": "iter/sec",
            "range": "stddev: 0.0004668497429753969",
            "extra": "mean: 11.94492682000373 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 10153.065586426166,
            "unit": "iter/sec",
            "range": "stddev: 0.000006222648114623646",
            "extra": "mean: 98.49241999745573 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 200.79384489140318,
            "unit": "iter/sec",
            "range": "stddev: 0.0001924497144640654",
            "extra": "mean: 4.980232339994473 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11260.961983898385,
            "unit": "iter/sec",
            "range": "stddev: 0.000017440364734893108",
            "extra": "mean: 88.80235999640718 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 213.79951342325657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940908532784524",
            "extra": "mean: 4.677279119996456 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10503.056494467597,
            "unit": "iter/sec",
            "range": "stddev: 0.000008212625518088771",
            "extra": "mean: 95.2103800000259 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 37.41444141301618,
            "unit": "iter/sec",
            "range": "stddev: 0.00032823919965174845",
            "extra": "mean: 26.727647460002117 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 87.44974101599885,
            "unit": "iter/sec",
            "range": "stddev: 0.000153116724688151",
            "extra": "mean: 11.43513964000249 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10883.716414160825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028375405631817316",
            "extra": "mean: 91.88038000502274 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 199.56069267848497,
            "unit": "iter/sec",
            "range": "stddev: 0.00018361174840334903",
            "extra": "mean: 5.01100686000882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 10758.196832007674,
            "unit": "iter/sec",
            "range": "stddev: 0.000026525868965399705",
            "extra": "mean: 92.95237999594973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 212.20196795903342,
            "unit": "iter/sec",
            "range": "stddev: 0.00007749752095285261",
            "extra": "mean: 4.7124916400071015 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10986.067688799449,
            "unit": "iter/sec",
            "range": "stddev: 0.000016616441124007176",
            "extra": "mean: 91.02437999899848 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 31.644852964473554,
            "unit": "iter/sec",
            "range": "stddev: 0.001085071368410296",
            "extra": "mean: 31.60071564000191 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 82.32409088283387,
            "unit": "iter/sec",
            "range": "stddev: 0.0006597449705619973",
            "extra": "mean: 12.147112580000794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5501.737558711838,
            "unit": "iter/sec",
            "range": "stddev: 0.000003895234917519937",
            "extra": "mean: 181.76076000145258 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 102.15422022822413,
            "unit": "iter/sec",
            "range": "stddev: 0.00016774156796218754",
            "extra": "mean: 9.789120779992118 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6108.411600338557,
            "unit": "iter/sec",
            "range": "stddev: 0.000011537566073394763",
            "extra": "mean: 163.70868000194608 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 100.37927808323064,
            "unit": "iter/sec",
            "range": "stddev: 0.00030278245887704067",
            "extra": "mean: 9.962215500004275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5691.107621522316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000139331263721494",
            "extra": "mean: 175.71272000168392 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.09927398092539,
            "unit": "iter/sec",
            "range": "stddev: 0.00026043479339246304",
            "extra": "mean: 62.11460226000327 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 41.16439436903604,
            "unit": "iter/sec",
            "range": "stddev: 0.0015293624232277422",
            "extra": "mean: 24.292838880005547 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2877.0045457312713,
            "unit": "iter/sec",
            "range": "stddev: 0.000006105263126328049",
            "extra": "mean: 347.5837399992088 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 49.88254799908315,
            "unit": "iter/sec",
            "range": "stddev: 0.00041748014992413416",
            "extra": "mean: 20.047091419996832 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3346.6807887712075,
            "unit": "iter/sec",
            "range": "stddev: 0.000015118646819643536",
            "extra": "mean: 298.8035199996375 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 51.76283698817097,
            "unit": "iter/sec",
            "range": "stddev: 0.0007141060727066182",
            "extra": "mean: 19.318879299999026 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2998.3612157246866,
            "unit": "iter/sec",
            "range": "stddev: 0.000008658114676207197",
            "extra": "mean: 333.51551999658113 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.971129078080578,
            "unit": "iter/sec",
            "range": "stddev: 0.0015434550877138162",
            "extra": "mean: 125.45274204000178 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.588224931721218,
            "unit": "iter/sec",
            "range": "stddev: 0.001132329386083841",
            "extra": "mean: 46.321548119994986 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1152.2364263837553,
            "unit": "iter/sec",
            "range": "stddev: 0.000017950535163176357",
            "extra": "mean: 867.8774399959366 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 513.9718783588312,
            "unit": "iter/sec",
            "range": "stddev: 0.000020538140491011442",
            "extra": "mean: 1.945631739995406 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1132.3162234955116,
            "unit": "iter/sec",
            "range": "stddev: 0.00003130394430407908",
            "extra": "mean: 883.1455199970151 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.37024107758252,
            "unit": "iter/sec",
            "range": "stddev: 0.00030568164546094666",
            "extra": "mean: 19.466523399992184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 972.5525253704322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000718600259807717",
            "extra": "mean: 1.028222100003404 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 499.7995903618502,
            "unit": "iter/sec",
            "range": "stddev: 0.000052827143491440715",
            "extra": "mean: 2.0008019599936233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1080.6024851625089,
            "unit": "iter/sec",
            "range": "stddev: 0.000019290556083160337",
            "extra": "mean: 925.4096799986655 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.85799436151778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193435617305034",
            "extra": "mean: 23.890298980004445 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 824.6410531279239,
            "unit": "iter/sec",
            "range": "stddev: 0.00003557677494364122",
            "extra": "mean: 1.21264882000105 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 435.6127122787327,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082366953259704",
            "extra": "mean: 2.2956171200075914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 820.2067042291429,
            "unit": "iter/sec",
            "range": "stddev: 0.00004346921665608222",
            "extra": "mean: 1.2192048599990812 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 34.650052923553524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005602998961409337",
            "extra": "mean: 28.85998478000147 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 415.5945504764442,
            "unit": "iter/sec",
            "range": "stddev: 0.000059126040854882265",
            "extra": "mean: 2.4061913200102936 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 217.78806496301775,
            "unit": "iter/sec",
            "range": "stddev: 0.00022877539993370127",
            "extra": "mean: 4.59161984000275 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 427.36337609569284,
            "unit": "iter/sec",
            "range": "stddev: 0.00009940970248694578",
            "extra": "mean: 2.339929099998699 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.74920334635433,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438551588563006",
            "extra": "mean: 56.34055684000032 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 214.73355276702986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005272104600001497",
            "extra": "mean: 4.656934079998791 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 110.35043832002044,
            "unit": "iter/sec",
            "range": "stddev: 0.00021595142000297647",
            "extra": "mean: 9.062039219998042 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 211.46323682666434,
            "unit": "iter/sec",
            "range": "stddev: 0.00016153065455619354",
            "extra": "mean: 4.728954379997958 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.779911683861926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940391089716905",
            "extra": "mean: 113.89636206000432 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 61.398670255091595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559539833185937",
            "extra": "mean: 16.28699768000388 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 40.7480278795974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969019055582317",
            "extra": "mean: 24.541064979998737 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.922575739561577,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111411012461554",
            "extra": "mean: 41.80151881999336 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.09919396111114,
            "unit": "iter/sec",
            "range": "stddev: 0.0012804761282740045",
            "extra": "mean: 82.65013382000232 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 518.1347955660176,
            "unit": "iter/sec",
            "range": "stddev: 0.00004090018149636386",
            "extra": "mean: 1.9299996999961877 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 237.36850502879997,
            "unit": "iter/sec",
            "range": "stddev: 0.00022601916672044864",
            "extra": "mean: 4.2128588199966535 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 67.77915614070939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002008985487754108",
            "extra": "mean: 14.753798320002716 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 93.39377367436458,
            "unit": "iter/sec",
            "range": "stddev: 0.00040810980896296186",
            "extra": "mean: 10.707351899995956 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 176.26726104649987,
            "unit": "iter/sec",
            "range": "stddev: 0.00018318579481802142",
            "extra": "mean: 5.673203259998446 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 169.53410491957993,
            "unit": "iter/sec",
            "range": "stddev: 0.00012206946524016634",
            "extra": "mean: 5.898518180010797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 152.31919144576574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694045131559764",
            "extra": "mean: 6.56516090000423 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 22.401947089783828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006590978671117639",
            "extra": "mean: 44.638976960000036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.4073224845127579,
            "unit": "iter/sec",
            "range": "stddev: 0.0038563360216013155",
            "extra": "mean: 710.5691914999989 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.035404368848294,
            "unit": "iter/sec",
            "range": "stddev: 0.001263368543914345",
            "extra": "mean: 66.50968444000682 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.863826267056503,
            "unit": "iter/sec",
            "range": "stddev: 0.0017122434874871461",
            "extra": "mean: 67.27742789999866 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.847843298913077,
            "unit": "iter/sec",
            "range": "stddev: 0.0014463809350094452",
            "extra": "mean: 67.34984871999586 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "committer": {
            "name": "OpenMined",
            "username": "OpenMined"
          },
          "id": "00cca183f0621e778488429b052431e8f8aacfbd",
          "message": "Add benchmarks action",
          "timestamp": "2021-04-26T07:52:34Z",
          "url": "https://github.com/OpenMined/TenSEAL/pull/286/commits/00cca183f0621e778488429b052431e8f8aacfbd"
        },
        "date": 1619594540005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9596884280033304,
            "unit": "iter/sec",
            "range": "stddev: 0.018036320081098633",
            "extra": "mean: 1.0420048536800004 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 85.02395532931564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008865832299219701",
            "extra": "mean: 11.761391200006983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.824857796441837,
            "unit": "iter/sec",
            "range": "stddev: 0.0009564578918867983",
            "extra": "mean: 261.4476284400098 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 108.4479217572334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706348165824581",
            "extra": "mean: 9.221015799994348 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3718042325338555,
            "unit": "iter/sec",
            "range": "stddev: 0.018444165297894402",
            "extra": "mean: 2.6895874562400057 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 211.1949046135696,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660135250026174",
            "extra": "mean: 4.734962720003751 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.557294603496563,
            "unit": "iter/sec",
            "range": "stddev: 0.004485395780593768",
            "extra": "mean: 281.1125058399921 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.30959688012479103,
            "unit": "iter/sec",
            "range": "stddev: 0.05403551590436483",
            "extra": "mean: 3.2300067093600044 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5674.5792244002405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067508821667844465",
            "extra": "mean: 176.22451999613986 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.95783259649986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068153315436135",
            "extra": "mean: 27.057863779996296 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5829.193440111767,
            "unit": "iter/sec",
            "range": "stddev: 0.000008104791785960114",
            "extra": "mean: 171.55032000118808 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 37.09388944006682,
            "unit": "iter/sec",
            "range": "stddev: 0.0007015491223102591",
            "extra": "mean: 26.958618119992934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5789.436571238145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008570032368379518",
            "extra": "mean: 172.72837998916657 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.334376724621876,
            "unit": "iter/sec",
            "range": "stddev: 0.0002958563681154281",
            "extra": "mean: 26.78496570000334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5116.575545453318,
            "unit": "iter/sec",
            "range": "stddev: 0.00002504584171048743",
            "extra": "mean: 195.44322000456305 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 37.25803830738126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001540081173538",
            "extra": "mean: 26.839845720000994 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 2866.455890426084,
            "unit": "iter/sec",
            "range": "stddev: 0.00001917805223458209",
            "extra": "mean: 348.86286000073596 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 19.575364245613827,
            "unit": "iter/sec",
            "range": "stddev: 0.00032080499092211807",
            "extra": "mean: 51.0846177600024 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 12325.137118477565,
            "unit": "iter/sec",
            "range": "stddev: 0.000003743337216028961",
            "extra": "mean: 81.13499999126361 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 202.135422477385,
            "unit": "iter/sec",
            "range": "stddev: 0.000021898360236320103",
            "extra": "mean: 4.947178420011369 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 15992.24695712101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036747436035104958",
            "extra": "mean: 62.530300006073965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 211.18215241197018,
            "unit": "iter/sec",
            "range": "stddev: 0.000021269156315323484",
            "extra": "mean: 4.735248639995007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11240.34005099509,
            "unit": "iter/sec",
            "range": "stddev: 0.00000486194853660269",
            "extra": "mean: 88.9652800060503 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 44.58745519945658,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241712694285228",
            "extra": "mean: 22.427833019996797 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 83.97208702657589,
            "unit": "iter/sec",
            "range": "stddev: 0.00006044680522061859",
            "extra": "mean: 11.908719140010362 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 12611.46326672902,
            "unit": "iter/sec",
            "range": "stddev: 0.000003877696096725537",
            "extra": "mean: 79.29293999040965 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 202.12422617190978,
            "unit": "iter/sec",
            "range": "stddev: 0.000013148711727234875",
            "extra": "mean: 4.947452460000932 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 14952.49293800632,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007584043502847",
            "extra": "mean: 66.87848000638041 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 211.29889036898223,
            "unit": "iter/sec",
            "range": "stddev: 0.000022176161347410014",
            "extra": "mean: 4.7326325199992425 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11345.426952977585,
            "unit": "iter/sec",
            "range": "stddev: 0.000004428849201853913",
            "extra": "mean: 88.14124000309675 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.79685468530997,
            "unit": "iter/sec",
            "range": "stddev: 0.000670868719020948",
            "extra": "mean: 28.738229619993945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 76.51507570264481,
            "unit": "iter/sec",
            "range": "stddev: 0.00027269742610115563",
            "extra": "mean: 13.069319879996328 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 12042.522628421242,
            "unit": "iter/sec",
            "range": "stddev: 0.000004809352072411773",
            "extra": "mean: 83.03908000470983 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 191.07025592545324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007767899982301114",
            "extra": "mean: 5.233676980001292 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 13095.38151999257,
            "unit": "iter/sec",
            "range": "stddev: 0.000004878429724030398",
            "extra": "mean: 76.36280000497209 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 203.1074819163278,
            "unit": "iter/sec",
            "range": "stddev: 0.000027816832970354668",
            "extra": "mean: 4.923501539997233 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 10570.656913987226,
            "unit": "iter/sec",
            "range": "stddev: 0.000008638093972651252",
            "extra": "mean: 94.6014999954059 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 30.18947823431466,
            "unit": "iter/sec",
            "range": "stddev: 0.0007004775344854876",
            "extra": "mean: 33.124123320003484 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 79.36227901036173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730316716461236",
            "extra": "mean: 12.600444600002447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5107.42967590689,
            "unit": "iter/sec",
            "range": "stddev: 0.000030304068407791147",
            "extra": "mean: 195.7931999959328 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 93.54792373887148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002234447922743969",
            "extra": "mean: 10.689708119994066 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6584.8564102631635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073922303196246755",
            "extra": "mean: 151.86360000825516 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 100.01873831063591,
            "unit": "iter/sec",
            "range": "stddev: 0.0002001477731104529",
            "extra": "mean: 9.998126519994914 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5252.127873275876,
            "unit": "iter/sec",
            "range": "stddev: 0.000007931937722856307",
            "extra": "mean: 190.39902000258735 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 15.148347049166544,
            "unit": "iter/sec",
            "range": "stddev: 0.00045280043155016935",
            "extra": "mean: 66.0138031399947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.00657438005726,
            "unit": "iter/sec",
            "range": "stddev: 0.00014243987862615993",
            "extra": "mean: 23.805797420004637 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2733.065584016077,
            "unit": "iter/sec",
            "range": "stddev: 0.000012218740247510503",
            "extra": "mean: 365.88949999895704 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 50.3177435180141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406239915891875",
            "extra": "mean: 19.873705180002617 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3219.0000317786016,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105433215586239",
            "extra": "mean: 310.65548000242416 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 52.60132537813252,
            "unit": "iter/sec",
            "range": "stddev: 0.000066028180582447",
            "extra": "mean: 19.01092781999978 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2682.6788973917896,
            "unit": "iter/sec",
            "range": "stddev: 0.000013539547330578152",
            "extra": "mean: 372.7617200001987 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.020980464484367,
            "unit": "iter/sec",
            "range": "stddev: 0.00019529948480011662",
            "extra": "mean: 124.67303771999468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 20.695583512227028,
            "unit": "iter/sec",
            "range": "stddev: 0.00023456368278717337",
            "extra": "mean: 48.319488040006036 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1039.4821732272303,
            "unit": "iter/sec",
            "range": "stddev: 0.000009694699037764662",
            "extra": "mean: 962.0174599967868 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 490.4934472973814,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738481517064165",
            "extra": "mean: 2.0387632199981454 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1053.269083920454,
            "unit": "iter/sec",
            "range": "stddev: 0.000006246063612457104",
            "extra": "mean: 949.4249999988824 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 51.43817812853043,
            "unit": "iter/sec",
            "range": "stddev: 0.00006339696497021958",
            "extra": "mean: 19.440812960001495 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 969.3021805539597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048611710863502385",
            "extra": "mean: 1.0316700200019113 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 472.9187790378089,
            "unit": "iter/sec",
            "range": "stddev: 0.000014685779399274597",
            "extra": "mean: 2.1145279999973354 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 971.0698670902441,
            "unit": "iter/sec",
            "range": "stddev: 0.000008322662793096547",
            "extra": "mean: 1.0297920200082444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 41.981104474470726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000700926868993282",
            "extra": "mean: 23.82024038000509 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 764.8509970844558,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181209051570146",
            "extra": "mean: 1.3074441999970077 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 420.5880155252921,
            "unit": "iter/sec",
            "range": "stddev: 0.000010738268652256526",
            "extra": "mean: 2.3776236199955747 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 769.0817211922885,
            "unit": "iter/sec",
            "range": "stddev: 0.000005205362438819207",
            "extra": "mean: 1.3002519400015444 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 35.22836735591493,
            "unit": "iter/sec",
            "range": "stddev: 0.00006276773552102088",
            "extra": "mean: 28.38621471999886 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 387.3868094483745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064059418951847895",
            "extra": "mean: 2.5813991999984864 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 211.7379857443068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006007183510347803",
            "extra": "mean: 4.722818139998708 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 385.9004926250874,
            "unit": "iter/sec",
            "range": "stddev: 0.000011845713093092764",
            "extra": "mean: 2.5913416000003053 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 17.598989205293577,
            "unit": "iter/sec",
            "range": "stddev: 0.00008409569664861858",
            "extra": "mean: 56.8214451599988 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 191.28136551985867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000299547560470641",
            "extra": "mean: 5.227900779996162 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 105.10502660775454,
            "unit": "iter/sec",
            "range": "stddev: 0.000035862263362711234",
            "extra": "mean: 9.514292819999355 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 194.95171899819863,
            "unit": "iter/sec",
            "range": "stddev: 0.00002215608101788086",
            "extra": "mean: 5.129475159997127 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.79893663076974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001575825487009064",
            "extra": "mean: 113.65009681999709 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.47461352544552,
            "unit": "iter/sec",
            "range": "stddev: 0.000594705555200583",
            "extra": "mean: 17.10143838000477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 39.43492167502543,
            "unit": "iter/sec",
            "range": "stddev: 0.0011234749179398803",
            "extra": "mean: 25.3582347199972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 23.559889614001968,
            "unit": "iter/sec",
            "range": "stddev: 0.0008406093333493117",
            "extra": "mean: 42.445020599998315 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.755549310735322,
            "unit": "iter/sec",
            "range": "stddev: 0.0014199939687761824",
            "extra": "mean: 85.06620776000545 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 528.3876586640417,
            "unit": "iter/sec",
            "range": "stddev: 0.000019298310867318958",
            "extra": "mean: 1.8925498800035712 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 245.29845647144788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001075359989047451",
            "extra": "mean: 4.076666500004649 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 66.51154825641841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568182418766815",
            "extra": "mean: 15.034983040009138 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 93.56525050073972,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502970683769851",
            "extra": "mean: 10.687728559996685 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 161.1646905454875,
            "unit": "iter/sec",
            "range": "stddev: 0.00003233863564932064",
            "extra": "mean: 6.20483305999187 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 155.75632448881004,
            "unit": "iter/sec",
            "range": "stddev: 0.000052002703026133695",
            "extra": "mean: 6.42028503999427 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 140.99301737440229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390089415048191",
            "extra": "mean: 7.092549819999476 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.845735625345085,
            "unit": "iter/sec",
            "range": "stddev: 0.00010870417555910794",
            "extra": "mean: 47.97144211999694 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2773121235112435,
            "unit": "iter/sec",
            "range": "stddev: 0.014324910068492108",
            "extra": "mean: 782.8940018599906 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.008579678586146,
            "unit": "iter/sec",
            "range": "stddev: 0.00018561327966223572",
            "extra": "mean: 66.62855656000374 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 14.948149107051865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782336522523704",
            "extra": "mean: 66.89791444000548 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 14.818011145435651,
            "unit": "iter/sec",
            "range": "stddev: 0.00011292436274916181",
            "extra": "mean: 67.48543985999277 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7902a18bb18adc30a5047c90c952aab20e63fd4c",
          "message": "Add benchmarks action (#286)\n\n* add benchmarks action\r\n\r\n* add code security workflows",
          "timestamp": "2021-04-28T14:43:23+03:00",
          "tree_id": "51186b7269a0017fc40dc11518c53fd1e40c6d60",
          "url": "https://github.com/OpenMined/TenSEAL/commit/7902a18bb18adc30a5047c90c952aab20e63fd4c"
        },
        "date": 1619611201193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 1.0232256761823366,
            "unit": "iter/sec",
            "range": "stddev: 0.010945404624190606",
            "extra": "mean: 977.3015115599992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 92.10724777821916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194885564548154",
            "extra": "mean: 10.856908920000022 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.9706726303760345,
            "unit": "iter/sec",
            "range": "stddev: 0.001282497006635627",
            "extra": "mean: 251.84649883999555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 112.19720901628125,
            "unit": "iter/sec",
            "range": "stddev: 0.00005460040038032135",
            "extra": "mean: 8.912877680004385 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.40022588369781925,
            "unit": "iter/sec",
            "range": "stddev: 0.016744052137889733",
            "extra": "mean: 2.4985890236800015 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 217.28357703989693,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679600360348726",
            "extra": "mean: 4.602280639996934 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.776107094408943,
            "unit": "iter/sec",
            "range": "stddev: 0.0021382446185277946",
            "extra": "mean: 264.8229975999993 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.3274581362771508,
            "unit": "iter/sec",
            "range": "stddev: 0.013223375384987671",
            "extra": "mean: 3.0538254793999977 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5784.857002868225,
            "unit": "iter/sec",
            "range": "stddev: 0.000009750417655793859",
            "extra": "mean: 172.86512000282528 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 39.04408656475279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006374955227327303",
            "extra": "mean: 25.612073119998513 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5804.332469920304,
            "unit": "iter/sec",
            "range": "stddev: 0.000007377926337162311",
            "extra": "mean: 172.28509999767994 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 39.08229628226256,
            "unit": "iter/sec",
            "range": "stddev: 0.00012640067901311354",
            "extra": "mean: 25.58703287999606 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5832.231430319801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068557968417811875",
            "extra": "mean: 171.46096000260513 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 38.439397871029925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909204845688805",
            "extra": "mean: 26.01497566000262 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5809.8669901193025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007150958988845715",
            "extra": "mean: 172.12097999845355 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 39.542810673226334,
            "unit": "iter/sec",
            "range": "stddev: 0.00024674034036600113",
            "extra": "mean: 25.28904706000276 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3033.6886268214544,
            "unit": "iter/sec",
            "range": "stddev: 0.000013566379207679863",
            "extra": "mean: 329.6317199988153 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 20.160586677458856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006852918125020616",
            "extra": "mean: 49.60173114000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 13117.96778592231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029049165207745817",
            "extra": "mean: 76.23131999707766 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 204.30950195934685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005726117653194971",
            "extra": "mean: 4.894534959998964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 16755.74579593964,
            "unit": "iter/sec",
            "range": "stddev: 0.000004838685101579095",
            "extra": "mean: 59.68102000224462 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 214.39701788505783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002793564339431432",
            "extra": "mean: 4.664243979998447 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11621.21801977602,
            "unit": "iter/sec",
            "range": "stddev: 0.000004638071202331756",
            "extra": "mean: 86.04950000062672 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 45.945775886967745,
            "unit": "iter/sec",
            "range": "stddev: 0.0002279543738434789",
            "extra": "mean: 21.76478644000099 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 86.22533271713631,
            "unit": "iter/sec",
            "range": "stddev: 0.00008433646832048726",
            "extra": "mean: 11.59751976000507 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 11778.077463958707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005854339118706611",
            "extra": "mean: 84.90350000329272 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 206.2163829660793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007074589796841801",
            "extra": "mean: 4.849275240001135 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 15642.318980317168,
            "unit": "iter/sec",
            "range": "stddev: 0.000010537796057706103",
            "extra": "mean: 63.929139998890605 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 218.19347463257975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044202683031916",
            "extra": "mean: 4.583088480001152 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 11459.802336463557,
            "unit": "iter/sec",
            "range": "stddev: 0.000003966238457924346",
            "extra": "mean: 87.26154000214592 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 38.43171063533469,
            "unit": "iter/sec",
            "range": "stddev: 0.00028382161244162104",
            "extra": "mean: 26.020179260003715 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 85.65208384952595,
            "unit": "iter/sec",
            "range": "stddev: 0.0003607989286028686",
            "extra": "mean: 11.675139179997132 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 13570.119249393247,
            "unit": "iter/sec",
            "range": "stddev: 0.000005528972151110243",
            "extra": "mean: 73.69131999666934 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 204.57929223945152,
            "unit": "iter/sec",
            "range": "stddev: 0.00004485713148279579",
            "extra": "mean: 4.888080259997878 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 17171.827487057555,
            "unit": "iter/sec",
            "range": "stddev: 0.000006601270390719112",
            "extra": "mean: 58.234920002178114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 212.77832484743018,
            "unit": "iter/sec",
            "range": "stddev: 0.00006460440958749533",
            "extra": "mean: 4.699726819999341 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11594.286243103857,
            "unit": "iter/sec",
            "range": "stddev: 0.000006370115807245559",
            "extra": "mean: 86.24937999911708 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 33.0336607281419,
            "unit": "iter/sec",
            "range": "stddev: 0.00022370425040439128",
            "extra": "mean: 30.27215203999731 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 86.72697730046711,
            "unit": "iter/sec",
            "range": "stddev: 0.00011039443730008356",
            "extra": "mean: 11.530437600004007 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5819.2740641479195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064883023984859434",
            "extra": "mean: 171.8427400010114 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 104.7673109746868,
            "unit": "iter/sec",
            "range": "stddev: 0.000045522152570056004",
            "extra": "mean: 9.544961979997879 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6895.680490706767,
            "unit": "iter/sec",
            "range": "stddev: 0.000006225246474597218",
            "extra": "mean: 145.01831999723436 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 107.98702908181973,
            "unit": "iter/sec",
            "range": "stddev: 0.00006522824702942866",
            "extra": "mean: 9.260371440002473 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5454.854695232835,
            "unit": "iter/sec",
            "range": "stddev: 0.000008497315107533301",
            "extra": "mean: 183.3229399994707 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 16.5588090150797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852384109767762",
            "extra": "mean: 60.39081670000087 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 42.32919181868046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751842375775418",
            "extra": "mean: 23.62435843999947 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2865.0348001732787,
            "unit": "iter/sec",
            "range": "stddev: 0.000011166927872312727",
            "extra": "mean: 349.03589999657925 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 51.61985494826374,
            "unit": "iter/sec",
            "range": "stddev: 0.00037895576695249884",
            "extra": "mean: 19.372390740002174 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3160.982650879438,
            "unit": "iter/sec",
            "range": "stddev: 0.000012128761130615057",
            "extra": "mean: 316.3573200004066 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 54.31164231305773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000988940655475163",
            "extra": "mean: 18.412258539999584 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2724.8088560420506,
            "unit": "iter/sec",
            "range": "stddev: 0.000012525968000638828",
            "extra": "mean: 366.9982199971855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 8.178489415286847,
            "unit": "iter/sec",
            "range": "stddev: 0.0009130620593194647",
            "extra": "mean: 122.27196848000403 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 21.438285179901126,
            "unit": "iter/sec",
            "range": "stddev: 0.00041812718760297094",
            "extra": "mean: 46.64552186000037 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1075.7188378133542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040590959748795275",
            "extra": "mean: 929.6109400042951 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 510.1937111637861,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316919726790136",
            "extra": "mean: 1.960039840002992 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1083.5114030150996,
            "unit": "iter/sec",
            "range": "stddev: 0.000007450138746521635",
            "extra": "mean: 922.9252199997973 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 52.532592778148334,
            "unit": "iter/sec",
            "range": "stddev: 0.00026075393489086347",
            "extra": "mean: 19.03580134000094 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 1011.3636823289532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662817329330424",
            "extra": "mean: 988.7640000056307 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 479.12469055178804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001178229418852933",
            "extra": "mean: 2.0871393600032206 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 1012.2850713820113,
            "unit": "iter/sec",
            "range": "stddev: 0.000015217464505821704",
            "extra": "mean: 987.8640199985967 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 42.57295356454621,
            "unit": "iter/sec",
            "range": "stddev: 0.00032268494221136297",
            "extra": "mean: 23.489091460000964 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 784.9929814553777,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356397987599014",
            "extra": "mean: 1.273896740001419 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 434.54994687517814,
            "unit": "iter/sec",
            "range": "stddev: 0.00001991911011499941",
            "extra": "mean: 2.3012314400011746 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 790.3685311422684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010587449869124031",
            "extra": "mean: 1.2652325599992764 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 36.19524667848511,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457996760865699",
            "extra": "mean: 27.62793714000054 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 399.7073055325792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003724222487515925",
            "extra": "mean: 2.5018306799961465 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 216.12877588745948,
            "unit": "iter/sec",
            "range": "stddev: 0.00007071816140854293",
            "extra": "mean: 4.626871160000974 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 400.25321619498624,
            "unit": "iter/sec",
            "range": "stddev: 0.000013272332862319087",
            "extra": "mean: 2.4984183999981724 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 18.200496590357037,
            "unit": "iter/sec",
            "range": "stddev: 0.00038186608252558404",
            "extra": "mean: 54.94355580000047 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 199.00611569681547,
            "unit": "iter/sec",
            "range": "stddev: 0.000053039049757910836",
            "extra": "mean: 5.024971199998163 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 106.07211588161759,
            "unit": "iter/sec",
            "range": "stddev: 0.000026633773319764423",
            "extra": "mean: 9.427548339999703 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 201.5957464523118,
            "unit": "iter/sec",
            "range": "stddev: 0.000020709234695036068",
            "extra": "mean: 4.960422120000202 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 9.060161815783822,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193633140609338",
            "extra": "mean: 110.37330462 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 62.029641402550276,
            "unit": "iter/sec",
            "range": "stddev: 0.00040689201007580803",
            "extra": "mean: 16.121324860002915 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 42.011792668194175,
            "unit": "iter/sec",
            "range": "stddev: 0.00039261462237538463",
            "extra": "mean: 23.80284049999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 24.94391776653734,
            "unit": "iter/sec",
            "range": "stddev: 0.00020279172157656837",
            "extra": "mean: 40.08993331999818 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 12.316481900955111,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613120034075309",
            "extra": "mean: 81.19201636000071 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 544.90281451282,
            "unit": "iter/sec",
            "range": "stddev: 0.00003133822809885951",
            "extra": "mean: 1.835189639998589 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 249.49006227200476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818033380060981",
            "extra": "mean: 4.008175679998658 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 69.43345264670852,
            "unit": "iter/sec",
            "range": "stddev: 0.00019760882708358957",
            "extra": "mean: 14.402279620001082 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 98.65331691559201,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047834762551037",
            "extra": "mean: 10.136506620001455 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 166.39518072694483,
            "unit": "iter/sec",
            "range": "stddev: 0.00005153581464929726",
            "extra": "mean: 6.009789440001896 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 162.5084402414451,
            "unit": "iter/sec",
            "range": "stddev: 0.00008028216974508664",
            "extra": "mean: 6.153526540001621 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 147.69307057022215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007577859711781371",
            "extra": "mean: 6.77079835999848 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 21.767118330539617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003144090559212798",
            "extra": "mean: 45.94085376000294 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.34233490203587,
            "unit": "iter/sec",
            "range": "stddev: 0.002765332613375601",
            "extra": "mean: 744.9705721600003 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 15.68498081750738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809003697377424",
            "extra": "mean: 63.75525807999794 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 15.557426444641488,
            "unit": "iter/sec",
            "range": "stddev: 0.00038601201454084236",
            "extra": "mean: 64.27798348000124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 15.541266130124065,
            "unit": "iter/sec",
            "range": "stddev: 0.00038723876339192626",
            "extra": "mean: 64.34482181999783 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bogdan.cebere@gmail.com",
            "name": "Bogdan Cebere",
            "username": "bcebere"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cd83fe4b8e858d5fef8b200a7addc753c7697ed",
          "message": "Update codeql-analysis.yml (#290)",
          "timestamp": "2021-04-28T20:53:27+03:00",
          "tree_id": "0a1889416121abb330c28a484af03ba1b0ec6bb5",
          "url": "https://github.com/OpenMined/TenSEAL/commit/4cd83fe4b8e858d5fef8b200a7addc753c7697ed"
        },
        "date": 1619633562031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_gen_keys",
            "value": 0.9517591439122248,
            "unit": "iter/sec",
            "range": "stddev: 0.006763391939229945",
            "extra": "mean: 1.0506859917200064 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_prepare_input",
            "value": 86.0626273952689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000774318056081819",
            "extra": "mean: 11.619445400001496 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_conv",
            "value": 3.534171997682675,
            "unit": "iter/sec",
            "range": "stddev: 0.0023309723072630966",
            "extra": "mean: 282.9517071199962 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square1",
            "value": 100.10725731808498,
            "unit": "iter/sec",
            "range": "stddev: 0.00023360195167961839",
            "extra": "mean: 9.989285759997983 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc1",
            "value": 0.3605931310152422,
            "unit": "iter/sec",
            "range": "stddev: 0.007059899772665137",
            "extra": "mean: 2.773208677560001 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_square2",
            "value": 192.52084991159768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008148241578336103",
            "extra": "mean: 5.1942426000050546 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_fc2",
            "value": 3.508814450746188,
            "unit": "iter/sec",
            "range": "stddev: 0.0010850308612091661",
            "extra": "mean: 284.9965462799946 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_mnist_eval.py::test_perf_mnist_eval_full",
            "value": 0.2971994136307026,
            "unit": "iter/sec",
            "range": "stddev: 0.018466662047501702",
            "extra": "mean: 3.3647441890399934 sec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-add]",
            "value": 5811.31947384864,
            "unit": "iter/sec",
            "range": "stddev: 0.000008873283771774509",
            "extra": "mean: 172.07796000548115 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[256-bfv_test-multiply]",
            "value": 36.57973598248154,
            "unit": "iter/sec",
            "range": "stddev: 0.0007600326348942372",
            "extra": "mean: 27.337540119997357 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-add]",
            "value": 5496.07701015506,
            "unit": "iter/sec",
            "range": "stddev: 0.000005229281150175812",
            "extra": "mean: 181.94795999988855 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[1024-bfv_test-multiply]",
            "value": 36.94301981549321,
            "unit": "iter/sec",
            "range": "stddev: 0.00028841249161395586",
            "extra": "mean: 27.068712979998967 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-add]",
            "value": 5941.841964078082,
            "unit": "iter/sec",
            "range": "stddev: 0.000011796201195626933",
            "extra": "mean: 168.2979799943496 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[4096-bfv_test-multiply]",
            "value": 37.130753656554056,
            "unit": "iter/sec",
            "range": "stddev: 0.000280888169884636",
            "extra": "mean: 26.931853019996197 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-add]",
            "value": 5416.4731632437115,
            "unit": "iter/sec",
            "range": "stddev: 0.000008543138891113726",
            "extra": "mean: 184.62197999724594 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[8192-bfv_test-multiply]",
            "value": 36.306769558963396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501578691707153",
            "extra": "mean: 27.54307288000291 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-add]",
            "value": 3101.333530066162,
            "unit": "iter/sec",
            "range": "stddev: 0.000014019457728413123",
            "extra": "mean: 322.44193999304116 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_bfv[16384-bfv_test-multiply]",
            "value": 18.45245804894692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359828857629126",
            "extra": "mean: 54.19332196000141 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-add]",
            "value": 10398.255255264288,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945121076243492",
            "extra": "mean: 96.16998000637977 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-multiply]",
            "value": 183.6866119774347,
            "unit": "iter/sec",
            "range": "stddev: 0.00008047401618852235",
            "extra": "mean: 5.444054899999173 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-negate]",
            "value": 11546.5441187592,
            "unit": "iter/sec",
            "range": "stddev: 0.000003802726658017775",
            "extra": "mean: 86.60600000439445 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-square]",
            "value": 194.54938989769283,
            "unit": "iter/sec",
            "range": "stddev: 0.00003997441031583593",
            "extra": "mean: 5.140082939997228 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-sub]",
            "value": 11129.415289873605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055555984483535915",
            "extra": "mean: 89.85197999663797 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-dot]",
            "value": 40.408907563081065,
            "unit": "iter/sec",
            "range": "stddev: 0.00038281316287662367",
            "extra": "mean: 24.747018919997572 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[256-ckks_test-polyval]",
            "value": 77.65125840822704,
            "unit": "iter/sec",
            "range": "stddev: 0.000668814852700817",
            "extra": "mean: 12.878091359998509 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-add]",
            "value": 9488.209760980171,
            "unit": "iter/sec",
            "range": "stddev: 0.000002609957071689432",
            "extra": "mean: 105.39395999785484 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-multiply]",
            "value": 184.03480136387145,
            "unit": "iter/sec",
            "range": "stddev: 0.00007740890049361745",
            "extra": "mean: 5.433754879995831 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-negate]",
            "value": 11184.683961755369,
            "unit": "iter/sec",
            "range": "stddev: 0.000008967438562012453",
            "extra": "mean: 89.40798000367067 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-square]",
            "value": 193.37942562896234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006750112530764969",
            "extra": "mean: 5.171180939996702 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-sub]",
            "value": 10081.256946819149,
            "unit": "iter/sec",
            "range": "stddev: 0.000004787579219323734",
            "extra": "mean: 99.19398000420188 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-dot]",
            "value": 34.268838304522696,
            "unit": "iter/sec",
            "range": "stddev: 0.00013953963358279245",
            "extra": "mean: 29.181030039994763 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[1024-ckks_test-polyval]",
            "value": 80.37151469051412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010013655695208268",
            "extra": "mean: 12.442219159993329 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-add]",
            "value": 10289.549994936504,
            "unit": "iter/sec",
            "range": "stddev: 0.000002416253256280129",
            "extra": "mean: 97.18597999835765 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-multiply]",
            "value": 185.70320289386524,
            "unit": "iter/sec",
            "range": "stddev: 0.000053407777625191865",
            "extra": "mean: 5.3849367400061965 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-negate]",
            "value": 11636.84028147337,
            "unit": "iter/sec",
            "range": "stddev: 0.000002897338639004075",
            "extra": "mean: 85.93397999902663 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-square]",
            "value": 196.1523985186363,
            "unit": "iter/sec",
            "range": "stddev: 0.000016348705110770963",
            "extra": "mean: 5.098076840008616 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-sub]",
            "value": 11292.547212543825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025069301272112464",
            "extra": "mean: 88.55397999923298 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-dot]",
            "value": 29.179279602367412,
            "unit": "iter/sec",
            "range": "stddev: 0.00023247820801429128",
            "extra": "mean: 34.27089406000505 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[4096-ckks_test-polyval]",
            "value": 78.68156722024979,
            "unit": "iter/sec",
            "range": "stddev: 0.00016930398077221603",
            "extra": "mean: 12.7094570600093 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-add]",
            "value": 5163.743334020252,
            "unit": "iter/sec",
            "range": "stddev: 0.000006378241585362912",
            "extra": "mean: 193.65795999419788 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-multiply]",
            "value": 91.97923181055265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013690813696814726",
            "extra": "mean: 10.872019480002564 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-negate]",
            "value": 6071.130826062481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050685875736068345",
            "extra": "mean: 164.71395999360536 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-square]",
            "value": 97.66285330593037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931259425877261",
            "extra": "mean: 10.239307640003972 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-sub]",
            "value": 5530.179405621585,
            "unit": "iter/sec",
            "range": "stddev: 0.000010235932280001973",
            "extra": "mean: 180.82596000112972 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-dot]",
            "value": 14.68180674192791,
            "unit": "iter/sec",
            "range": "stddev: 0.0003865572590286677",
            "extra": "mean: 68.11150817999987 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[8192-ckks_test-polyval]",
            "value": 40.04071512890105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917726654306861",
            "extra": "mean: 24.974578920000567 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-add]",
            "value": 2585.9978766267423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297732660938064",
            "extra": "mean: 386.6979199938214 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-multiply]",
            "value": 46.137098529046895,
            "unit": "iter/sec",
            "range": "stddev: 0.00008947888204066907",
            "extra": "mean: 21.674531599996953 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-negate]",
            "value": 3074.388645541893,
            "unit": "iter/sec",
            "range": "stddev: 0.00000927622258731302",
            "extra": "mean: 325.26791999771376 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-square]",
            "value": 48.62991133354017,
            "unit": "iter/sec",
            "range": "stddev: 0.00023924588767354588",
            "extra": "mean: 20.563475699991614 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-sub]",
            "value": 2725.6721630309385,
            "unit": "iter/sec",
            "range": "stddev: 0.000015906896028198893",
            "extra": "mean: 366.88197999865224 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-dot]",
            "value": 7.3087887663358275,
            "unit": "iter/sec",
            "range": "stddev: 0.0009729223957597668",
            "extra": "mean: 136.8215763200033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_ops[16384-ckks_test-polyval]",
            "value": 19.868064701745006,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107818452029112",
            "extra": "mean: 50.33202855999207 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-add]",
            "value": 1006.0344359951889,
            "unit": "iter/sec",
            "range": "stddev: 0.000014548683704379396",
            "extra": "mean: 994.0017600001739 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-multiply]",
            "value": 466.8709538347213,
            "unit": "iter/sec",
            "range": "stddev: 0.000020546144408042205",
            "extra": "mean: 2.1419194999953106 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-sub]",
            "value": 1048.8009383979802,
            "unit": "iter/sec",
            "range": "stddev: 0.00002863468844842281",
            "extra": "mean: 953.4697800017966 usec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[256-ckks_test-dot]",
            "value": 47.06106660377327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002566233517178572",
            "extra": "mean: 21.248987160010984 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-add]",
            "value": 895.3034315764082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001714781840050869",
            "extra": "mean: 1.1169397600087905 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-multiply]",
            "value": 448.71833703041943,
            "unit": "iter/sec",
            "range": "stddev: 0.000048338009374676434",
            "extra": "mean: 2.2285695000073247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-sub]",
            "value": 987.9980174415849,
            "unit": "iter/sec",
            "range": "stddev: 0.000009556768821154863",
            "extra": "mean: 1.012147780002124 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[1024-ckks_test-dot]",
            "value": 38.42268721358319,
            "unit": "iter/sec",
            "range": "stddev: 0.00041906369338800663",
            "extra": "mean: 26.02628999999979 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-add]",
            "value": 781.4272252514702,
            "unit": "iter/sec",
            "range": "stddev: 0.00001019683528881051",
            "extra": "mean: 1.2797097000020585 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-multiply]",
            "value": 404.7574510811516,
            "unit": "iter/sec",
            "range": "stddev: 0.000022660043535432583",
            "extra": "mean: 2.470615419997557 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-sub]",
            "value": 769.3398497911601,
            "unit": "iter/sec",
            "range": "stddev: 0.000013672005678131082",
            "extra": "mean: 1.2998156799903882 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[4096-ckks_test-dot]",
            "value": 32.37381800050458,
            "unit": "iter/sec",
            "range": "stddev: 0.000221851460288406",
            "extra": "mean: 30.88915863999773 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-add]",
            "value": 385.8790792340988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386019894600124",
            "extra": "mean: 2.5914853999984184 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-multiply]",
            "value": 197.13488883805582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033859894360186",
            "extra": "mean: 5.07266879999861 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-sub]",
            "value": 393.30448203744027,
            "unit": "iter/sec",
            "range": "stddev: 0.000021205366596930107",
            "extra": "mean: 2.5425593799991475 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[8192-ckks_test-dot]",
            "value": 16.131893009916222,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618522293174252",
            "extra": "mean: 61.98900521998894 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-add]",
            "value": 198.68909465447763,
            "unit": "iter/sec",
            "range": "stddev: 0.00003853213750783862",
            "extra": "mean: 5.032988860002661 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-multiply]",
            "value": 101.5934347087294,
            "unit": "iter/sec",
            "range": "stddev: 0.00009735630986978701",
            "extra": "mean: 9.843155740004477 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-sub]",
            "value": 195.25183388237664,
            "unit": "iter/sec",
            "range": "stddev: 0.00011466599042113971",
            "extra": "mean: 5.1215908199992555 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_plain_ops[16384-ckks_test-dot]",
            "value": 8.039950210292657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004807970528593822",
            "extra": "mean: 124.37887970000247 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape0]",
            "value": 58.273427773679614,
            "unit": "iter/sec",
            "range": "stddev: 0.00025138713486882325",
            "extra": "mean: 17.1604801400008 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape1]",
            "value": 38.66642862479824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003798659192445386",
            "extra": "mean: 25.862228179994418 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape2]",
            "value": 22.5289036721212,
            "unit": "iter/sec",
            "range": "stddev: 0.0016130811094583516",
            "extra": "mean: 44.38742401999207 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_matmul[matrix_shape3]",
            "value": 11.562201924844887,
            "unit": "iter/sec",
            "range": "stddev: 0.0007800394337398856",
            "extra": "mean: 86.48871611999766 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape0]",
            "value": 487.8430678329971,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372255257814883",
            "extra": "mean: 2.0498395199956576 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape1]",
            "value": 226.92517177471626,
            "unit": "iter/sec",
            "range": "stddev: 0.00005493172940514597",
            "extra": "mean: 4.4067389799874945 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape2]",
            "value": 61.561395639711016,
            "unit": "iter/sec",
            "range": "stddev: 0.00043422432933612487",
            "extra": "mean: 16.243946220006364 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_enc_matmul[matrix_shape3]",
            "value": 87.81554593271532,
            "unit": "iter/sec",
            "range": "stddev: 0.000055934004231645914",
            "extra": "mean: 11.387505359998613 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape0]",
            "value": 160.90952396355257,
            "unit": "iter/sec",
            "range": "stddev: 0.000013912215274059722",
            "extra": "mean: 6.214672539995263 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape1]",
            "value": 152.52010928852425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001558598784378578",
            "extra": "mean: 6.556512479992307 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape2]",
            "value": 140.31589491420684,
            "unit": "iter/sec",
            "range": "stddev: 0.00019717678832873055",
            "extra": "mean: 7.126776339996468 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape3]",
            "value": 20.649000284248253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619896667887686",
            "extra": "mean: 48.428494659997334 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_im2col_encoding[image_shape4]",
            "value": 1.2778936124229767,
            "unit": "iter/sec",
            "range": "stddev: 0.004461692785849501",
            "extra": "mean: 782.5377561000005 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape0]",
            "value": 13.895326110998875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006877799760759653",
            "extra": "mean: 71.9666449000033 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape1]",
            "value": 13.849997468900359,
            "unit": "iter/sec",
            "range": "stddev: 0.0007194369816337113",
            "extra": "mean: 72.2021792599935 msec\nrounds: 5"
          },
          {
            "name": "tests/python/benchmarks/test_ops.py::test_perf_ckks_conv_eval[image_shape2]",
            "value": 13.79686330095426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243678628329258",
            "extra": "mean: 72.48024265999902 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}