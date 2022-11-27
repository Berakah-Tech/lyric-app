import { timeSignatureOptions, toneOptions } from "../common/data";
import type { TSongFormData } from "../types/types";
import Select from "./elements/Select";

const MusicInput = () => {
  const SongSelect = Select<TSongFormData>;

  return (
    <div className="col-span-2 flex flex-col bg-gray-100 p-4">
      <h3 className="mb-4 text-xl">Music Section</h3>
      <div className="grid grid-cols-2 gap-6">
        <SongSelect options={toneOptions} name="music.tone" label="Tone" />

        <SongSelect
          options={[
            { value: "major", label: "Major" },
            { value: "minor", label: "Minor" },
          ]}
          name="music.mode"
          label="Mode"
        />
        <SongSelect
          options={timeSignatureOptions}
          name="music.timeSignature"
          label="Time Signature"
        />
      </div>
    </div>
  );
};

export default MusicInput;
