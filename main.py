import os
import re
import subprocess

def convert_mp3_to_opus(input_folder, output_folder, bitrate="64k"):
    # Ensure FFmpeg is installed
    try:
        subprocess.run(["ffmpeg", "-version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    except FileNotFoundError:
        print("Error: FFmpeg is not installed or not in your PATH.")
        return

    # Ensure output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Regex pattern to match filenames like 'sound1.mp3', 'sound2.mp3', ..., 'sound27.mp3'
    sound_pattern = re.compile(r"sound(\d{1,2})\.mp3")

    # Iterate through files in the input folder
    for filename in os.listdir(input_folder):
        if sound_pattern.match(filename):
            input_file = os.path.join(input_folder, filename)
            sound_number = sound_pattern.match(filename).group(1)
            output_file = os.path.join(output_folder, f"sound{sound_number}.opus")

            print(f"Converting: {filename} -> {output_file}")

            try:
                subprocess.run([
                    "ffmpeg",
                    "-i", input_file,      # Input file
                    "-c:a", "libopus",   # Use the Opus codec
                    "-b:a", bitrate,     # Set the bitrate (e.g., 64k)
                    output_file          # Output file
                ], check=True)
                print(f"Success: {output_file}")
            except subprocess.CalledProcessError as e:
                print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    input_folder = "D:/PROJECTS_EXTENDED/Joke_app/very_silly_app/public/sounds"    # Folder containing MP3 files
    output_folder = "D:/PROJECTS_EXTENDED/Joke_app/very_silly_app/public/output_sounds"  # Folder to save converted Opus files

    convert_mp3_to_opus(input_folder, output_folder, bitrate="64k")
