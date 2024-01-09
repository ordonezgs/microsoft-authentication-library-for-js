window.BENCHMARK_DATA = {
  "lastUpdate": 1704769692984,
  "repoUrl": "https://github.com/ordonezgs/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "release@msaljs.com",
            "name": "MSAL.js Release Automation"
          },
          "committer": {
            "email": "release@msaljs.com",
            "name": "MSAL.js Release Automation"
          },
          "distinct": true,
          "id": "3d2f8c800af4e07d889026a1f69afd5f7c214bac",
          "message": "Bump package versions",
          "timestamp": "2024-01-09T00:03:25Z",
          "tree_id": "241da67228f980afa7a1c32b0c6dd17009282af6",
          "url": "https://github.com/ordonezgs/microsoft-authentication-library-for-js/commit/3d2f8c800af4e07d889026a1f69afd5f7c214bac"
        },
        "date": 1704769691410,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 197085,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "220 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 185284,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "219 samples"
          }
        ]
      }
    ]
  }
}