if ($response.body.includes("adEvents")) {
  let body = JSON.parse($response.body);
  if (body.data.subredditInfoByName) {
    body.data.subredditInfoByName.elements.edges = body.data.subredditInfoByName.elements.edges.filter((n) => !n.node.adEvents && n.node.__typename !== "PostRecommendation");
    $done({ body: JSON.stringify(body) });
  } else if (body.data.home) {
    body.data.home.elements.edges = body.data.home.elements.edges.filter((n) => !n.node.adEvents && n.node.__typename !== "PostRecommendation");
    $done({ body: JSON.stringify(body) });
  } else {
    $done({});
  }
} else {
  $done({});
}