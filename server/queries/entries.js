import db from "../db";

export const getEntries = (req, res, next) =>
  db
    .any(
      "select * FROM entries WHERE username=${username} ORDER BY modified desc",
      {
        username: req.headers.username
      }
    )
    .then(data =>
      res.status(200).json({
        status: "success",
        data,
        message: "Retrieved entry"
      })
    )
    .catch(error =>
      res.status(500).json({
        status: "failure",
        error,
        message: "Getting entries from database failed."
      })
    );

export const createEntry = (req, res, next) => {
  const { username } = req.headers;
  const {
    coin,
    investment,
    gutFeeling,
    technicalAnalysis,
    otherPrompts
  } = req.body;
  db
    .none(
      "insert into entries(username, coin, investment, gut_feeling, technical_analysis, other_influences) values($1, $2, $3, $4, $5, $6)",
      [
        username,
        coin,
        investment,
        gutFeeling,
        technicalAnalysis,
        otherInfluences
      ]
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Inserted one entry",
        data
      });
    })
    .catch(error =>
      res.status(500).json({
        status: "failure",
        error,
        message: "Exiting trade database update failed."
      })
    );
};

export const exitTrade = (req, res, next) => {
  if (req.body.update.username !== req.headers.username) {
    res.status(400).json({
      status: "failure",
      message: "You cannot update notes that are not yours"
    });
  }
  const { roi, nextImprove, wentWell, unexpected, id } = req.body;
  const { username } = req.headers;
  db
    .none(
      "update entries(roi, next_time_improve, what_went_well, unexpected) values($2, $3, $4, $5) where id=$1",
      [id, roi, nextImprove, wentWell, unexpected]
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Inserted one entry"
      });
    })
    .catch(error =>
      res.status(500).json({
        status: "failure",
        error,
        message: "Exiting trade database update failed."
      })
    );
};
