import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
  base: String,
  purchasedAt: Date,
  assignedTo: String,
  expended: { type: Boolean, default: false },
  history: [
    {
      type: String,
      date: Date,
      quantity: Number,
      fromBase: String,
      toBase: String,
    },
  ],
});

export default mongoose.model("Asset", assetSchema);
