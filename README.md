# Quantum Voxel: Typescript Mod
This example is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).  
The Quantum Voxel game is licensed under [Ultreon PSL 1.0](https://github.com/Ultreon/quantum-voxel/blob/master/LICENSE.md).

## Dependencies

- [Quantum Voxel](https://github.com/Ultreon/quantum-voxel) and [QuantumJS](https://gitlab.com/ultreon/quantumjs)

## How to build

```bash
npm install
npm run build
```

The output is located in the `build` directory.
Zip it up to use it in Quantum Voxel.

## How to run

Put the zipped file in the mods directory and restart Quantum Voxel if it's running.

## Notes

- The [libs/quantumjs-0.1.0.tgz](libs/quantumjs-0.1.0.tgz) file contains the generated stubs for the Quantum Voxel game. Meaning it will not work as API in the mods folder.
The API is generated separetly on the Quantum Voxel repository.

## References

- [Quantum Voxel](https://github.com/Ultreon/quantum-voxel): the game where this mod is for.
- [LangGen](https://github.com/Ultreon/lang-gen): generator for the typescript/javascript files.
- [Typescript](https://www.typescriptlang.org/): the typescript language.
- [Fabric Loader](https://fabricmc.net/): the modloader used for Java mods. (Has API in Quantum.JS)

## Contributors

- [XyperCode](https://github.com/XyperCode): author, maintainer, and contributor.
