var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1666",
        "ok": "1666",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1665",
        "ok": "1665",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1744",
        "ok": "1744",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1947",
        "ok": "1947",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2020",
        "ok": "2020",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
},
contents: {
"req_verify-cep-98b18": {
        type: "REQUEST",
        name: "Verify Cep",
path: "Verify Cep",
pathFormatted: "req_verify-cep-98b18",
stats: {
    "name": "Verify Cep",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1666",
        "ok": "1666",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1665",
        "ok": "1665",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1744",
        "ok": "1744",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1947",
        "ok": "1947",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2020",
        "ok": "2020",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
