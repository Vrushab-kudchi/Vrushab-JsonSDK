import { Base } from "./base";
import Posts from "./posts";
import { applyMixins } from "./utils";

class JsonPlaceholder extends Base {}
interface JsonPlaceholder extends Posts {}

applyMixins(JsonPlaceholder, [Posts]);

export default JsonPlaceholder;
